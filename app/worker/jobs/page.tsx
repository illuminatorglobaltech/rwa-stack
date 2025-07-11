'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Wrench, Clock, CheckCircle } from 'lucide-react';

export default function WorkerJobs() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={['worker']}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-2">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Worker Portal</h1>
                  <p className="text-sm text-slate-600">Welcome, {user?.name}</p>
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
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Pending Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-blue-100">Awaiting assignment</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  In Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-orange-100">Currently working</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Completed Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-green-100">Jobs finished</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Job List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Electrical repair in A-101</h3>
                      <p className="text-sm text-slate-600">Priority: High • Assigned 2 hours ago</p>
                    </div>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Urgent</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Plumbing maintenance in B-205</h3>
                      <p className="text-sm text-slate-600">Priority: Medium • Assigned 1 day ago</p>
                    </div>
                    <span className="bg-warmth-100 text-warmth-800 px-3 py-1 rounded-full text-sm">Medium</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Garden maintenance</h3>
                      <p className="text-sm text-slate-600">Priority: Low • Assigned 3 days ago</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Low</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement job assignment, status updates, 
                  time tracking, and completion confirmation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}