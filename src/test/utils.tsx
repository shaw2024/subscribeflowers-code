import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

/**
 * Custom render function that wraps components with common providers
 * Useful for components that need Router context
 */
export function renderWithRouter(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: BrowserRouter, ...options });
}

/**
 * Mock authentication hook values for testing
 * Usage: vi.mocked(useAuth).mockReturnValue(mockAuthValues())
 */
export function mockAuthValues(overrides = {}) {
  return {
    isAuthenticated: false,
    customer: null,
    login: vi.fn(),
    logout: vi.fn(),
    updateUsage: vi.fn(),
    getRemainingFlowers: vi.fn(() => 0),
    canPurchase: vi.fn(() => false),
    updateAddress: vi.fn(),
    ...overrides,
  };
}

/**
 * Create a mock customer object for testing
 */
export function createMockCustomer(overrides = {}) {
  return {
    id: '1',
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User',
    shippingAddress: {
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
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
    ...overrides,
  };
}

/**
 * Wait for async operations to complete
 * Useful for testing async state updates
 */
export const waitFor = async (callback: () => void, timeout = 3000) => {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    try {
      callback();
      return;
    } catch (error) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
  throw new Error('Timeout waiting for condition');
};
