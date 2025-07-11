'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { ShieldX, Home } from 'lucide-react';

export default function Unauthorized() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 rounded-full p-3">
              <ShieldX className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <CardTitle className="text-2xl text-red-800">Access Denied</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-6">
            You don't have permission to access this page. Please contact your administrator 
            or use the appropriate login for your role.
          </p>
          <Button onClick={() => router.push('/')} className="w-full">
            <Home className="h-4 w-4 mr-2" />
            Go to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}