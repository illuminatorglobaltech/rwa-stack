'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { LogOut, Upload, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function VendorProofUpload() {
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
                  <h1 className="text-xl font-bold text-slate-900">Proof Upload</h1>
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
                <Upload className="h-5 w-5" />
                Service Proof Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4">
                    <Upload className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Upload Service Proof</h3>
                  <p className="text-slate-600">Upload photos and documents for completed services</p>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8">
                    <p className="text-slate-500 mb-4">Drop files here or click to upload</p>
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Recent Uploads</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Cleaning_Service_A101.jpg</li>
                        <li>• Delivery_Receipt_B205.pdf</li>
                        <li>• Service_Complete_C304.jpg</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Guidelines</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Max file size: 10MB</li>
                        <li>• Formats: JPG, PNG, PDF</li>
                        <li>• Clear, well-lit photos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
                <p className="text-sm text-warmth-800">
                  <strong>TODO for Interns:</strong> Implement file upload with drag-and-drop, 
                  preview, and upload progress.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}