'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Calendar, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function VendorBookings() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <ProtectedRoute allowedRoles={['vendor']}>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push('/vendor/dashboard')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Booking Management</h1>
                  <p className="text-sm text-slate-600">Vendor: {user?.name}</p>
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
                <Calendar className="h-5 w-5" />
                Service Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">House Cleaning Service</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Confirmed</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>Resident: John Doe (A-101)</p>
                    <p>Date: March 15, 2025 • Time: 10:00 AM</p>
                    <p>Duration: 2 hours • Fee: ₹800</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Grocery Delivery</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>Resident: Jane Smith (B-205)</p>
                    <p>Date: March 12, 2025 • Time: 2:00 PM</p>
                    <p>Items: 15 • Amount: ₹1,250</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Laundry Service</h3>
                    <span className="bg-warmth-100 text-warmth-800 px-2 py-1 rounded text-xs">Pending</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>Resident: Mike Johnson (C-304)</p>
                    <p>Date: March 18, 2025 • Time: 11:00 AM</p>
                    <p>Items: 8 pieces • Fee: ₹300</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement booking calendar, status management, 
                  customer communication, and payment tracking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}