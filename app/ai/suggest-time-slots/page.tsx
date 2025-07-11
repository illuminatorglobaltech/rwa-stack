'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AISuggestTimeSlots() {
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
                  <h1 className="text-xl font-bold text-slate-900">AI Time Slot Suggestions</h1>
                  <p className="text-sm text-slate-600">Smart scheduling optimization</p>
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
                Smart Time Slot Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Optimization Rate</h3>
                  <div className="text-2xl font-bold text-blue-600">84%</div>
                  <p className="text-sm text-blue-700">Schedule efficiency improved</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Conflicts Reduced</h3>
                  <div className="text-2xl font-bold text-green-600">67%</div>
                  <p className="text-sm text-green-700">Fewer scheduling conflicts</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Optimal Time Slots for Today</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Morning Window (9:00 AM - 11:00 AM)</h5>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">High availability</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Best for: Maintenance work, Deliveries • Expected completion: 95%
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Afternoon Window (2:00 PM - 4:00 PM)</h5>
                      <span className="bg-warmth-100 text-warmth-800 px-2 py-1 rounded text-xs">Medium availability</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Best for: Cleaning services, Inspections • Expected completion: 78%
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Evening Window (6:00 PM - 8:00 PM)</h5>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Low availability</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Best for: Resident meetings, Events • Expected completion: 45%
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Weekly Optimization Insights</h4>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span>Tuesdays show highest service completion rates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-warmth-500" />
                      <span>Fridays have 23% more scheduling conflicts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>Morning slots show 40% better resident satisfaction</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement predictive scheduling, 
                  availability optimization, conflict resolution, and resident preference learning.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}