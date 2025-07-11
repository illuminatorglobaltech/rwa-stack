'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, CreditCard, AlertTriangle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminLayout>
        <div className="space-y-6">
          <div className="page-header">
            <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600">Manage your community efficiently</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="stats-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Residents</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">+12 from last month</p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Complaints</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">-3 from yesterday</p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹1,25,000</div>
                <p className="text-xs text-muted-foreground">23 residents</p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Urgent Issues</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Require immediate attention</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Water leakage in A-101</p>
                      <p className="text-sm text-slate-600">Reported 2 hours ago</p>
                    </div>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">High</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Elevator not working</p>
                      <p className="text-sm text-slate-600">Reported 5 hours ago</p>
                    </div>
                    <span className="bg-warmth-100 text-warmth-800 px-2 py-1 rounded text-xs">Medium</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Parking violation</p>
                      <p className="text-sm text-slate-600">Reported 1 day ago</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Low</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Monthly Society Meeting</p>
                      <p className="text-sm text-slate-600">Tomorrow, 7:00 PM</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Approved</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Holi Celebration</p>
                      <p className="text-sm text-slate-600">March 15, 2025</p>
                    </div>
                    <span className="bg-warmth-100 text-warmth-800 px-2 py-1 rounded text-xs">Pending</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">Fitness Workshop</p>
                      <p className="text-sm text-slate-600">March 20, 2025</p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Under Review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}