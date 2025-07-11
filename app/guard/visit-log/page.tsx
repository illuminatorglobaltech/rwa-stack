'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Shield, FileText, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GuardVisitLog() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <ProtectedRoute allowedRoles={['guard']}>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push('/guard/visitor-entry')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Visit Log</h1>
                  <p className="text-sm text-slate-600">Guard: {user?.name}</p>
                </div>
              </div>
              <Button variant="ghost" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Visitor Log History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium">Amazon Delivery</p>
                    <p className="text-sm text-slate-600">
                      To: A-101 • Today 2:30 PM - 2:45 PM
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Completed
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium">John Smith (Guest)</p>
                    <p className="text-sm text-slate-600">
                      To: B-205 • Today 1:45 PM - 3:20 PM
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Completed
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium">Plumber Service</p>
                    <p className="text-sm text-slate-600">
                      To: C-304 • Today 12:15 PM - 1:30 PM
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Completed
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium">Food Delivery</p>
                    <p className="text-sm text-slate-600">
                      To: D-402 • Today 11:30 AM - 11:35 AM
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Completed
                  </span>
                </div>
              </div>

              <div className="mt-8 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement visit log filtering, search, 
                  and export features.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}