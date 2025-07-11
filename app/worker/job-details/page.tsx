'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Wrench, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function WorkerJobDetails() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <ProtectedRoute allowedRoles={['worker']}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push('/worker/jobs')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Jobs
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Job Details</h1>
                  <p className="text-sm text-slate-600">Worker: {user?.name}</p>
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
                <Wrench className="h-5 w-5" />
                Job Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Electrical repair in A-101</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Priority:</p>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">High</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Status:</p>
                      <span className="bg-warmth-100 text-warmth-800 px-2 py-1 rounded text-sm">In Progress</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Assigned:</p>
                      <p className="font-medium">2 hours ago</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Location:</p>
                      <p className="font-medium">Tower A, Flat 101</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-slate-600">
                    Main electrical panel is not working properly. Resident reports frequent power outages.
                    Need to check wiring and replace faulty components if necessary.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p><strong>Resident:</strong> John Doe</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Email:</strong> john.doe@email.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>Start Job</Button>
                  <Button variant="outline">Update Status</Button>
                  <Button variant="outline">Complete Job</Button>
                </div>
              </div>

              <div className="mt-6 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement job status updates, time tracking, 
                  photo upload, completion forms, and resident feedback.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}