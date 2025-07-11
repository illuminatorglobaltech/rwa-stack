'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { AdminLayout } from '@/components/layouts/AdminLayout';

export default function AdminResidentAccess() {
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminLayout>
        <div className="page-container">
          <div className="page-header">
            <h1 className="text-2xl font-bold text-slate-900">Resident Access Management</h1>
            <p className="text-slate-600">Manage resident accounts and permissions</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Resident Management</h2>
            <p className="text-slate-600">
              This page will handle resident registration, access control, and account management.
            </p>
            <div className="mt-6 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
              <p className="text-sm text-warmth-800">
                <strong>TODO for Interns:</strong> Implement resident registration, access control,
                and resident directory.
              </p>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}