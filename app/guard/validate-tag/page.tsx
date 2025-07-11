'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Shield, QrCode, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GuardValidateTag() {
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
                  <h1 className="text-xl font-bold text-slate-900">Validate Tag</h1>
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
                <QrCode className="h-5 w-5" />
                Tag Validation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-4">
                    <QrCode className="h-12 w-12 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">QR Code Scanner</h3>
                  <p className="text-slate-600">Scan visitor tags for validation</p>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full max-w-sm">
                    <QrCode className="h-5 w-5 mr-2" />
                    Start Scanning
                  </Button>
                  <Button variant="outline" size="lg" className="w-full max-w-sm">
                    Manual Entry
                  </Button>
                </div>
              </div>

              <div className="mt-8 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement QR code scanning, tag validation, 
                  visitor verification, and access control management.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}