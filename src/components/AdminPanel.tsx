import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VulnerableDB, User, ContactMessage } from "@/lib/database";
import { useToast } from "@/hooks/use-toast";

export const AdminPanel = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setUsers(VulnerableDB.getUsers());
    setMessages(VulnerableDB.getContactMessages());
  };

  // Intentional SQL injection vulnerability
  const handleSearch = () => {
    try {
      const results = VulnerableDB.getUsers(searchQuery);
      setUsers(results);
      
      // Log potentially dangerous query
      console.log("Search executed:", searchQuery);
    } catch (error) {
      toast({
        title: "Search Error",
        description: `Query failed: ${error}`,
        variant: "destructive",
      });
    }
  };

  const handleDeleteUser = (userId: string) => {
    // Intentional - no confirmation or authorization check
    if (VulnerableDB.deleteUser(userId)) {
      toast({
        title: "User Deleted",
        description: `User ${userId} has been deleted`,
      });
      loadData();
    }
  };

  // CSRF vulnerable transfer function
  const handleTransfer = (fromId: string, toId: string) => {
    // Intentional CSRF vulnerability - no token validation
    const success = VulnerableDB.transferFunds(fromId, toId, 100);
    if (success) {
      toast({
        title: "Transfer Complete",
        description: "$100 transferred",
      });
      loadData();
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <Button onClick={loadData}>Refresh Data</Button>
      </div>

      {/* Search with SQL injection vulnerability */}
      <Card>
        <CardHeader>
          <CardTitle>User Search (SQL Injection Test)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Search users... (try: ' OR 1=1 --)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
            <Button variant="outline" onClick={() => {setSearchQuery(''); loadData();}}>
              Clear
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Test SQL injection: Try entering <code>' OR 1=1 --</code> or <code>'; DROP TABLE users; --</code>
          </p>
        </CardContent>
      </Card>

      {/* Users table */}
      <Card>
        <CardHeader>
          <CardTitle>Users ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Account Type</th>
                  <th className="text-left p-2">Balance</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="p-2 font-mono text-xs">{user.id}</td>
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.accountType}</td>
                    <td className="p-2">${user.balance}</td>
                    <td className="p-2">
                      <div className="flex gap-1">
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Delete
                        </Button>
                        {users.length > 1 && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const otherUser = users.find(u => u.id !== user.id);
                              if (otherUser) handleTransfer(user.id, otherUser.id);
                            }}
                          >
                            Transfer $100
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Messages table with XSS vulnerability */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Messages ({messages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="border rounded p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <strong>{message.name}</strong> ({message.email})
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(message.timestamp).toLocaleString()}
                  </span>
                </div>
                {/* Intentional XSS vulnerability - rendering unsanitized HTML */}
                <div dangerouslySetInnerHTML={{ __html: message.message }} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};