'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ResidentLayout } from '@/components/layouts/ResidentLayout';

export default function ResidentPackages() {
  return (
    <ProtectedRoute allowedRoles={['resident']}>
      <ResidentLayout>
        <div className="page-container">
          <div className="page-header">
            <h1 className="text-2xl font-bold text-slate-900">My Packages</h1>
            <p className="text-slate-600">Track your delivered packages</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Package Management</h2>
            <p className="text-slate-600">
              This page will display package delivery tracking and collection management.
            </p>
            <div className="mt-6 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
              <p className="text-sm text-warmth-800">
                <strong>TODO for Interns:</strong> Implement package tracking, delivery notifications, 
                collection confirmation, and package history.
              </p>
            </div>
          </div>
        </div>
      </ResidentLayout>
    </ProtectedRoute>
  );
}