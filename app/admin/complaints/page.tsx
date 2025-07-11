'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { AdminLayout } from '@/components/layouts/AdminLayout';

export default function AdminComplaints() {
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminLayout>
        <div className="page-container">
          <div className="page-header">
            <h1 className="text-2xl font-bold text-slate-900">Complaints Management</h1>
            <p className="text-slate-600">View and manage resident complaints</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Complaints Dashboard</h2>
            <p className="text-slate-600">
              This page will display all resident complaints with filtering and management capabilities.
            </p>
            <div className="mt-6 bg-warmth-50 border border-warmth-200 rounded-lg p-4">
              <p className="text-sm text-warmth-800">
                <strong>TODO for Interns:</strong> Implement complaint listing, status updates,
                and resolution workflow.
              </p>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}