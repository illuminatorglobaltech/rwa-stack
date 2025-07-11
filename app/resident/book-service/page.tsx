'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ResidentLayout } from '@/components/layouts/ResidentLayout';

export default function ResidentBookService() {
  return (
    <ProtectedRoute allowedRoles={['resident']}>
      <ResidentLayout>
        <div className="page-container">
          <div className="page-header">
            <h1 className="text-2xl font-bold text-slate-900">Book Service</h1>
            <p className="text-slate-600">Book maintenance and other services</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Service Booking</h2>
            <p className="text-slate-600">
              This page will handle service booking, scheduling, and service provider management.
            </p>
            <div className="mt-6 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
              <p className="text-sm text-warmth-800">
                <strong>TODO for Interns:</strong> Implement service catalog, booking system, 
                scheduling, and service provider ratings.
              </p>
            </div>
          </div>
        </div>
      </ResidentLayout>
    </ProtectedRoute>
  );
}