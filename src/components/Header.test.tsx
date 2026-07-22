import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Mock the Cart component
vi.mock('./Cart', () => ({
  default: () => <div data-testid="cart-component">Cart</div>
}));

// Mock the auth hook
vi.mock('../context/useAuth', () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from '../context/useAuth';

describe('Header Component', () => {
  const mockAuthContextValue = {
    isAuthenticated: false,
    customer: null,
    login: vi.fn(),
    logout: vi.fn(),
    updateUsage: vi.fn(),
    getRemainingFlowers: vi.fn(),
    canPurchase: vi.fn(),
    updateAddress: vi.fn(),
  };

  it('renders header with logo', () => {
    vi.mocked(useAuth).mockReturnValue(mockAuthContextValue);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('Subscribe Flowers')).toBeInTheDocument();
  });

  it('displays all navigation links', () => {
    vi.mocked(useAuth).mockReturnValue(mockAuthContextValue);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('shows login link when not authenticated', () => {
    vi.mocked(useAuth).mockReturnValue(mockAuthContextValue);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
  });

  it('shows account link with customer name when authenticated', () => {
    const authenticatedContext = {
      ...mockAuthContextValue,
      isAuthenticated: true,
      customer: { 
        id: '1',
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'john@example.com',
        shippingAddress: {
          street: '123 Main St',
          city: 'City',
          state: 'State',
          zipCode: '12345',
          country: 'USA',
        },
        subscription: {
          name: 'Basic',
          quarterlyLimit: 12,
          pricePerMonth: 29.99,
        },
        usedThisQuarter: 0,
        currentQuarter: 'Q1 2025',
      },
    };

    vi.mocked(useAuth).mockReturnValue(authenticatedContext);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('John')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    vi.mocked(useAuth).mockReturnValue(mockAuthContextValue);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const hamburger = screen.getByRole('navigation').querySelector('.hamburger');
    const menu = screen.getByRole('list');

    expect(menu).not.toHaveClass('active');
    
    if (hamburger) {
      fireEvent.click(hamburger);
      expect(menu).toHaveClass('active');
      
      fireEvent.click(hamburger);
      expect(menu).not.toHaveClass('active');
    }
  });

  it('displays cart component when authenticated', () => {
    const authenticatedContext = {
      ...mockAuthContextValue,
      isAuthenticated: true,
      customer: { 
        id: '1',
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'john@example.com',
        shippingAddress: {
          street: '123 Main St',
          city: 'City',
          state: 'State',
          zipCode: '12345',
          country: 'USA',
        },
        subscription: {
          name: 'Basic',
          quarterlyLimit: 12,
          pricePerMonth: 29.99,
        },
        usedThisQuarter: 0,
        currentQuarter: 'Q1 2025',
      },
    };

    vi.mocked(useAuth).mockReturnValue(authenticatedContext);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByTestId('cart-component')).toBeInTheDocument();
  });
});
