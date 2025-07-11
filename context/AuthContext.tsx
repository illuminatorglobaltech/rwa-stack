'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export type UserRole = 'admin' | 'resident' | 'worker' | 'guard' | 'vendor' | 'ai';

export interface User {
  id: string;
  email: string;
  phone?: string;
  name: string;
  role: UserRole;
  flatNumber?: string;
  building?: string;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  loginWithOTP: (phone: string, otp: string) => Promise<void>;
  logout: () => void;
  sendOTP: (phone: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // TODO: Check for existing auth token and validate
    // For now, just set loading to false
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    try {
      // TODO: Implement Firebase Auth login
      // For now, simulate login
      const mockUser: User = {
        id: '1',
        email,
        name: 'John Doe',
        role,
        flatNumber: role === 'resident' ? 'A-101' : undefined,
        building: role === 'resident' ? 'Tower A' : undefined,
        isActive: true,
      };
      
      setUser(mockUser);
      
      // Redirect based on role
      switch (role) {
        case 'admin':
          router.push('/admin/dashboard');
          break;
        case 'resident':
          router.push('/resident/dashboard');
          break;
        case 'worker':
          router.push('/worker/jobs');
          break;
        case 'guard':
          router.push('/guard/visitor-entry');
          break;
        case 'vendor':
          router.push('/vendor/dashboard');
          break;
        case 'ai':
          router.push('/ai/auto-tag-complaints');
          break;
        default:
          router.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const loginWithOTP = async (phone: string, otp: string) => {
    try {
      // TODO: Implement OTP verification
      const mockUser: User = {
        id: '1',
        phone,
        name: 'John Doe',
        role: 'resident',
        flatNumber: 'A-101',
        building: 'Tower A',
        isActive: true,
        email: 'john@example.com',
      };
      
      setUser(mockUser);
      router.push('/resident/dashboard');
    } catch (error) {
      console.error('OTP login error:', error);
      throw error;
    }
  };

  const sendOTP = async (phone: string) => {
    try {
      // TODO: Implement OTP sending
      console.log('OTP sent to:', phone);
    } catch (error) {
      console.error('Send OTP error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      loginWithOTP, 
      logout, 
      sendOTP 
    }}>
      {children}
    </AuthContext.Provider>
  );
};