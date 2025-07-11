'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ResidentLayout } from '@/components/layouts/ResidentLayout';

export default function ResidentPayDues() {
  return (
    <ProtectedRoute allowedRoles={['resident']}>
      <ResidentLayout>
        <div className="page-container">
          <div className="page-header">
            <h1 className="text-2xl font-bold text-slate-900">Pay Dues</h1>
            <p className="text-slate-600">View and pay your monthly dues</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Payment Portal</h2>
            <p className="text-slate-600">
              This page will handle monthly dues payment, payment history, and receipt generation.
            </p>
            <div className="mt-6 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
              <p className="text-sm text-warmth-800">
                <strong>TODO for Interns:</strong> Implement payment gateway integration, 
                dues calculation, payment history, and receipt generation.
              </p>
            </div>
          </div>
        </div>
      </ResidentLayout>
    </ProtectedRoute>
  );
}