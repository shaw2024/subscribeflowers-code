import { db } from './config';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  Timestamp,
  deleteDoc,
  doc
} from 'firebase/firestore';

// Collections
const CONTACTS_COLLECTION = 'contacts';
const SUBSCRIPTIONS_COLLECTION = 'subscriptions';
const ORDERS_COLLECTION = 'orders';

// Contact Form Submissions
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: Timestamp;
}

export const saveContactForm = async (data: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, CONTACTS_COLLECTION), {
      ...data,
      timestamp: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving contact form:', error);
    return { success: false, error };
  }
};

export const getContacts = async () => {
  try {
    const q = query(collection(db, CONTACTS_COLLECTION), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting contacts:', error);
    return [];
  }
};

// Subscription Plan Sign-ups
export interface SubscriptionData {
  name: string;
  email: string;
  phone?: string;
  plan: string;
  price: string;
  timestamp?: Timestamp;
}

export const saveSubscription = async (data: SubscriptionData) => {
  try {
    const docRef = await addDoc(collection(db, SUBSCRIPTIONS_COLLECTION), {
      ...data,
      timestamp: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving subscription:', error);
    return { success: false, error };
  }
};

export const getSubscriptions = async () => {
  try {
    const q = query(collection(db, SUBSCRIPTIONS_COLLECTION), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting subscriptions:', error);
    return [];
  }
};

// Orders (Shop purchases)
export interface OrderData {
  customerName: string;
  customerEmail: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  timestamp?: Timestamp;
}

export const saveOrder = async (data: OrderData) => {
  try {
    const docRef = await addDoc(collection(db, ORDERS_COLLECTION), {
      ...data,
      timestamp: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving order:', error);
    return { success: false, error };
  }
};

export const getOrders = async () => {
  try {
    const q = query(collection(db, ORDERS_COLLECTION), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting orders:', error);
    return [];
  }
};

// Delete functions (for admin use)
export const deleteContact = async (id: string) => {
  try {
    await deleteDoc(doc(db, CONTACTS_COLLECTION, id));
    return { success: true };
  } catch (error) {
    console.error('Error deleting contact:', error);
    return { success: false, error };
  }
};

export const deleteSubscription = async (id: string) => {
  try {
    await deleteDoc(doc(db, SUBSCRIPTIONS_COLLECTION, id));
    return { success: true };
  } catch (error) {
    console.error('Error deleting subscription:', error);
    return { success: false, error };
  }
};
