import React, { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from './AuthContextValue';

export interface SubscriptionPlan {
  name: string;
  quarterlyLimit: number;
  pricePerMonth: number;
}

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  subscription: SubscriptionPlan;
  usedThisQuarter: number;
  currentQuarter: string;
}

export interface AuthContextType {
  customer: Customer | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUsage: (amount: number) => void;
  getRemainingFlowers: () => number;
  canPurchase: (amount: number) => boolean;
  updateAddress: (address: Customer['shippingAddress']) => void;
}

// Mock customer data - replace with actual API calls
const mockCustomers: { [email: string]: { password: string; data: Customer } } = {
  'demo@example.com': {
    password: 'password123',
    data: {
      id: '1',
      email: 'demo@example.com',
      firstName: 'John',
      lastName: 'Doe',
      shippingAddress: {
        street: '123 Flower Street',
        city: 'Garden City',
        state: 'CA',
        zipCode: '90210',
        country: 'United States',
      },
      subscription: {
        name: 'Premium Monthly',
        quarterlyLimit: 12, // 12 bouquets per quarter
        pricePerMonth: 49.99,
      },
      usedThisQuarter: 5,
      currentQuarter: 'Q1 2025',
    },
  },
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customer, setCustomer] = useState<Customer | null>(() => {
    const saved = localStorage.getItem('customer');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (customer) {
      localStorage.setItem('customer', JSON.stringify(customer));
    } else {
      localStorage.removeItem('customer');
    }
  }, [customer]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser = mockCustomers[email];
        if (mockUser && mockUser.password === password) {
          setCustomer(mockUser.data);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };

  const logout = () => {
    setCustomer(null);
  };

  const updateUsage = (amount: number) => {
    if (customer) {
      setCustomer({
        ...customer,
        usedThisQuarter: customer.usedThisQuarter + amount,
      });
    }
  };

  const getRemainingFlowers = (): number => {
    if (!customer) return 0;
    return Math.max(0, customer.subscription.quarterlyLimit - customer.usedThisQuarter);
  };

  const canPurchase = (amount: number): boolean => {
    return getRemainingFlowers() >= amount;
  };

  const updateAddress = (address: Customer['shippingAddress']) => {
    if (customer) {
      setCustomer({
        ...customer,
        shippingAddress: address,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        customer,
        isAuthenticated: !!customer,
        login,
        logout,
        updateUsage,
        getRemainingFlowers,
        canPurchase,
        updateAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

