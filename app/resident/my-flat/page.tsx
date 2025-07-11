'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ResidentLayout } from '@/components/layouts/ResidentLayout';

export default function ResidentMyFlat() {
  return (
    <ProtectedRoute allowedRoles={['resident']}>
      <ResidentLayout>
        <div className="page-container">
          <div className="page-header">
            <h1 className="text-2xl font-bold text-slate-900">My Flat</h1>
            <p className="text-slate-600">View and manage your flat information</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Flat Management</h2>
            <p className="text-slate-600">
              This page will display flat details, maintenance history, and tenant management.
            </p>
            <div className="mt-6 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
              <p className="text-sm text-warmth-800">
                <strong>TODO for Interns:</strong> Implement flat details view, maintenance history, 
                tenant management, and flat-specific settings.
              </p>
            </div>
          </div>
        </div>
      </ResidentLayout>
    </ProtectedRoute>
  );
}