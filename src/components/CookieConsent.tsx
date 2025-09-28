import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    // Intentional XSS vulnerability - storing unsanitized user data
    localStorage.setItem('userPreference', '<script>alert("XSS")</script>');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-background border shadow-lg">
        <CardContent className="p-4">
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Cookie Consent</h3>
            <p className="text-xs text-muted-foreground">
              We use cookies to enhance your experience and for analytics. Some cookies are essential for site functionality.
            </p>
            <div className="flex gap-2">
              <Button onClick={handleAccept} size="sm" className="flex-1">
                Accept All
              </Button>
              <Button onClick={handleDecline} variant="outline" size="sm" className="flex-1">
                Decline
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};