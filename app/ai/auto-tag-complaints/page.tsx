'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Bot, Brain, Zap } from 'lucide-react';

export default function AIAutoTagComplaints() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={['ai']}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 rounded-full p-2">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">AI Assistant</h1>
                  <p className="text-sm text-slate-600">Automated Complaint Tagging</p>
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
            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Auto-Tagged
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-purple-100">Total processed</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-blue-100">Classification rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Active
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Running</div>
                <p className="text-green-100">AI Status</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Auto-Tagged Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Water leakage issue</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Plumbing</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Auto-tagged with 96% confidence • Priority: High
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Elevator not working</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Maintenance</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Auto-tagged with 89% confidence • Priority: Medium
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Noise complaint</h3>
                      <span className="bg-warmth-100 text-warmth-800 px-2 py-1 rounded text-xs">Community</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Auto-tagged with 91% confidence • Priority: Low
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Plumbing Issues</span>
                    <span className="text-sm text-green-600">98% accuracy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Electrical Problems</span>
                    <span className="text-sm text-green-600">95% accuracy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Community Issues</span>
                    <span className="text-sm text-green-600">92% accuracy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Maintenance</span>
                    <span className="text-sm text-green-600">90% accuracy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Integrate ML models for complaint classification, 
                  feedback loop, and accuracy monitoring.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}