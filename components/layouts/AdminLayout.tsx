'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Megaphone, 
  MessageSquare, 
  CreditCard, 
  Calendar,
  Users,
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Announcements', href: '/admin/announcements', icon: Megaphone },
  { name: 'Complaints', href: '/admin/complaints', icon: MessageSquare },
  { name: 'Payments', href: '/admin/payments', icon: CreditCard },
  { name: 'Event Approvals', href: '/admin/event-approvals', icon: Calendar },
  { name: 'Resident Access', href: '/admin/resident-access', icon: Users },
];

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-slate-900/50" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-slate-900">Admin Panel</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="sidebar-nav">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="sidebar-nav-item w-full text-left"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:bg-white lg:border-r lg:border-slate-200">
        <div className="flex items-center h-16 px-4 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Admin Panel</h2>
        </div>
        <nav className="sidebar-nav flex-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="sidebar-nav-item w-full text-left"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={logout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="flex items-center h-16 px-4 bg-white border-b border-slate-200 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="ml-4 text-xl font-bold text-slate-900">Admin Panel</h1>
        </div>
        
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:h-16 lg:px-6 lg:bg-white lg:border-b lg:border-slate-200">
          <div className="flex items-center space-x-4">
            <div className="role-badge admin">Admin</div>
            <span className="text-sm text-slate-600">Welcome, {user?.name}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};