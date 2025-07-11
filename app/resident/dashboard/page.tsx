'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ResidentLayout } from '@/components/layouts/ResidentLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, MessageSquare, Package, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

export default function ResidentDashboard() {
  return (
    <ProtectedRoute allowedRoles={['resident']}>
      <ResidentLayout>
        <div className="space-y-6">
          <div className="page-header">
            <h1 className="text-2xl font-bold text-slate-900">My Dashboard</h1>
            <p className="text-slate-600">Welcome to your community portal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="stats-card bg-gradient-to-r from-community-500 to-community-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Dues</CardTitle>
                <CreditCard className="h-4 w-4 text-community-100" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹5,500</div>
                <p className="text-xs text-community-100">Due by March 15</p>
              </CardContent>
            </Card>

            <Card className="stats-card bg-gradient-to-r from-trust-500 to-trust-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Complaints</CardTitle>
                <MessageSquare className="h-4 w-4 text-trust-100" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-trust-100">In progress</p>
              </CardContent>
            </Card>

            <Card className="stats-card bg-gradient-to-r from-warmth-500 to-warmth-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Packages</CardTitle>
                <Package className="h-4 w-4 text-warmth-100" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-warmth-100">Pending collection</p>
              </CardContent>
            </Card>

            <Card className="stats-card bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Events</CardTitle>
                <Calendar className="h-4 w-4 text-green-100" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-green-100">This month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Recent Complaints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Water pressure issue</p>
                      <p className="text-sm text-slate-600">Submitted 2 days ago</p>
                    </div>
                    <span className="bg-warmth-100 text-warmth-800 px-2 py-1 rounded text-xs">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Noise complaint</p>
                      <p className="text-sm text-slate-600">Submitted 5 days ago</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Resolved</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Monthly Dues
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Raise New Complaint
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Package className="h-4 w-4 mr-2" />
                    Check Packages
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Amenities
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Community Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-blue-900">Monthly Society Meeting</h3>
                    <span className="text-xs text-blue-600">2 hours ago</span>
                  </div>
                  <p className="text-sm text-blue-800 mt-2">
                    Monthly society meeting scheduled for tomorrow at 7:00 PM in the community hall.
                  </p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-green-900">Water Tank Cleaning</h3>
                    <span className="text-xs text-green-600">1 day ago</span>
                  </div>
                  <p className="text-sm text-green-800 mt-2">
                    Water tank cleaning will be done on March 10th from 10 AM to 2 PM.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ResidentLayout>
    </ProtectedRoute>
  );
}