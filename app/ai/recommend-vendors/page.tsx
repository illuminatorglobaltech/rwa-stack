'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Bot, Users, TrendingUp, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AIRecommendVendors() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <ProtectedRoute allowedRoles={['ai']}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push('/ai/auto-tag-complaints')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">AI Vendor Recommendations</h1>
                  <p className="text-sm text-slate-600">Smart vendor matching system</p>
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
                <Users className="h-5 w-5" />
                Vendor Recommendation Engine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Recommendation Accuracy</h3>
                  <div className="text-2xl font-bold text-blue-600">87%</div>
                  <p className="text-sm text-blue-700">Based on resident feedback</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Active Vendors</h3>
                  <div className="text-2xl font-bold text-green-600">156</div>
                  <p className="text-sm text-green-700">In recommendation pool</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Top Recommended Vendors</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Green Gardens Cleaning</h5>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">95% match</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Specialized in house cleaning • Rating: 4.9/5 • 45 completed orders
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Fresh Mart Delivery</h5>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">92% match</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Grocery delivery service • Rating: 4.7/5 • 78 completed orders
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Quick Fix Repairs</h5>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">89% match</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Home maintenance & repairs • Rating: 4.8/5 • 32 completed orders
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement collaborative filtering, 
                  vendor rating, and recommendation explanations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}