import React, { useState, useEffect, ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  type User as FirebaseUser,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
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
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateUsage: (amount: number) => Promise<void>;
  getRemainingFlowers: () => number;
  canPurchase: (amount: number) => boolean;
  updateAddress: (address: Customer['shippingAddress']) => Promise<void>;
}

const NO_ACTIVE_PLAN: SubscriptionPlan = {
  name: 'No Active Plan',
  quarterlyLimit: 0,
  pricePerMonth: 0,
};

const EMPTY_ADDRESS: Customer['shippingAddress'] = {
  street: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
};

const getCurrentQuarter = (): string => {
  const now = new Date();
  const quarter = Math.floor(now.getMonth() / 3) + 1;
  return `Q${quarter} ${now.getFullYear()}`;
};

const customerDocRef = (uid: string) => doc(db, 'customers', uid);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (!firebaseUser) {
        setCustomer(null);
        setIsLoading(false);
        return;
      }

      const snapshot = await getDoc(customerDocRef(firebaseUser.uid));
      if (snapshot.exists()) {
        setCustomer(snapshot.data() as Customer);
      } else {
        // Auth account exists without a profile doc (e.g. created outside the app)
        const fallback: Customer = {
          id: firebaseUser.uid,
          email: firebaseUser.email ?? '',
          firstName: '',
          lastName: '',
          shippingAddress: EMPTY_ADDRESS,
          subscription: NO_ACTIVE_PLAN,
          usedThisQuarter: 0,
          currentQuarter: getCurrentQuarter(),
        };
        await setDoc(customerDocRef(firebaseUser.uid), fallback);
        setCustomer(fallback);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<boolean> => {
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const newCustomer: Customer = {
        id: credential.user.uid,
        email,
        firstName,
        lastName,
        shippingAddress: EMPTY_ADDRESS,
        subscription: NO_ACTIVE_PLAN,
        usedThisQuarter: 0,
        currentQuarter: getCurrentQuarter(),
      };
      await setDoc(customerDocRef(credential.user.uid), newCustomer);
      setCustomer(newCustomer);
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const updateUsage = async (amount: number) => {
    if (!customer) return;
    const usedThisQuarter = customer.usedThisQuarter + amount;
    setCustomer({ ...customer, usedThisQuarter });
    await updateDoc(customerDocRef(customer.id), { usedThisQuarter });
  };

  const getRemainingFlowers = (): number => {
    if (!customer) return 0;
    return Math.max(0, customer.subscription.quarterlyLimit - customer.usedThisQuarter);
  };

  const canPurchase = (amount: number): boolean => {
    return getRemainingFlowers() >= amount;
  };

  const updateAddress = async (address: Customer['shippingAddress']) => {
    if (!customer) return;
    setCustomer({ ...customer, shippingAddress: address });
    await updateDoc(customerDocRef(customer.id), { shippingAddress: address });
  };

  return (
    <AuthContext.Provider
      value={{
        customer,
        isAuthenticated: !!customer,
        isLoading,
        login,
        register,
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

