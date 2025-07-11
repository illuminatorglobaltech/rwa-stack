'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Truck, Package, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function VendorInventory() {
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
                  <h1 className="text-xl font-bold text-slate-900">Inventory Management</h1>
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
                <Package className="h-5 w-5" />
                Inventory Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900">Total Items</h3>
                  <p className="text-2xl font-bold text-blue-600">1,234</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900">In Stock</h3>
                  <p className="text-2xl font-bold text-green-600">956</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900">Low Stock</h3>
                  <p className="text-2xl font-bold text-red-600">23</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium">Fresh Vegetables</p>
                    <p className="text-sm text-slate-600">Category: Produce • Stock: 45 units</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    In Stock
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium">Cleaning Supplies</p>
                    <p className="text-sm text-slate-600">Category: Services • Stock: 12 units</p>
                  </div>
                  <span className="bg-warmth-100 text-warmth-800 px-3 py-1 rounded-full text-sm">
                    Low Stock
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium">Dairy Products</p>
                    <p className="text-sm text-slate-600">Category: Perishables • Stock: 78 units</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    In Stock
                  </span>
                </div>
              </div>

              <div className="mt-8 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement inventory CRUD operations, 
                  stock alerts, and low inventory notifications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}