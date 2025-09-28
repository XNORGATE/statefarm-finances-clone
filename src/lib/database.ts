// Simple localStorage-based database with intentional vulnerabilities

export interface User {
  id: string;
  name: string;
  email: string;
  accountType: string;
  balance: number;
  created: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

// Intentionally vulnerable database operations
export class VulnerableDB {
  // SQL Injection simulation (even though we're using localStorage)
  static getUsers(query?: string): User[] {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (query) {
      // Intentional SQL injection vulnerability simulation
      // In real app, this would be: SELECT * FROM users WHERE name = '${query}'
      console.log(`Executing: SELECT * FROM users WHERE name = '${query}'`);
      
      // Simulate SQL injection - if query contains malicious code, "execute" it
      if (query.includes("'") || query.includes(";") || query.includes("DROP")) {
        console.log("SQL INJECTION DETECTED:", query);
        // In real scenario, this could drop tables, expose data, etc.
        if (query.includes("DROP")) {
          console.log("CRITICAL: Attempted to drop tables!");
          return [];
        }
      }
      
      return users.filter((user: User) => 
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    return users;
  }

  static createUser(userData: Omit<User, 'id' | 'created'>): User {
    const users = this.getUsers();
    const newUser: User = {
      ...userData,
      id: Math.random().toString(36).substr(2, 9),
      created: new Date().toISOString(),
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Intentional logging of sensitive data
    console.log("User created with sensitive data:", newUser);
    
    return newUser;
  }

  static updateUser(id: string, updates: Partial<User>): User | null {
    const users = this.getUsers();
    const userIndex = users.findIndex((user: User) => user.id === id);
    
    if (userIndex === -1) return null;
    
    // Intentional vulnerability - no validation of updates
    Object.assign(users[userIndex], updates);
    localStorage.setItem('users', JSON.stringify(users));
    
    return users[userIndex];
  }

  static deleteUser(id: string): boolean {
    const users = this.getUsers();
    const filteredUsers = users.filter((user: User) => user.id !== id);
    
    if (filteredUsers.length === users.length) return false;
    
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    return true;
  }

  // Contact messages with XSS vulnerability
  static saveContactMessage(messageData: Omit<ContactMessage, 'id' | 'timestamp'>): ContactMessage {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    
    // Intentional XSS vulnerability - no sanitization
    const newMessage: ContactMessage = {
      ...messageData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
    };
    
    messages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    return newMessage;
  }

  static getContactMessages(): ContactMessage[] {
    return JSON.parse(localStorage.getItem('contactMessages') || '[]');
  }

  // CSRF vulnerability - no token validation
  static transferFunds(fromUserId: string, toUserId: string, amount: number): boolean {
    console.log(`CSRF Attack Possible: Transfer ${amount} from ${fromUserId} to ${toUserId}`);
    
    const users = this.getUsers();
    const fromUser = users.find((u: User) => u.id === fromUserId);
    const toUser = users.find((u: User) => u.id === toUserId);
    
    if (!fromUser || !toUser || fromUser.balance < amount) {
      return false;
    }
    
    // Intentionally vulnerable - no CSRF protection
    fromUser.balance -= amount;
    toUser.balance += amount;
    
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
}