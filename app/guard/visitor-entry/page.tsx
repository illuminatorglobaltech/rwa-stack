'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Shield, UserCheck, Clock } from 'lucide-react';

export default function GuardVisitorEntry() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={['guard']}>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 rounded-full p-2">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Security Panel</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Today's Visitors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-orange-100">Entries logged</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Currently Inside
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-blue-100">Active visitors</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-green-100">No active alerts</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Quick Entry Form</h3>
                    <p className="text-sm text-slate-600">
                      Register new visitor entries with resident verification
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold mb-2">QR Code Scanner</h3>
                    <p className="text-sm text-slate-600">
                      Scan pre-approved visitor QR codes for quick entry
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Delivery - Amazon</p>
                      <p className="text-sm text-slate-600">To: A-101 • 2:30 PM</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">In</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Visitor - John Smith</p>
                      <p className="text-sm text-slate-600">To: B-205 • 1:45 PM</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Out</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Service - Plumber</p>
                      <p className="text-sm text-slate-600">To: C-304 • 12:15 PM</p>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">In</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement visitor entry forms, QR code scanning, 
                  resident verification, visitor tracking, and security alerts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}