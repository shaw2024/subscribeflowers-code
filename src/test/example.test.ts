import { describe, it, expect } from 'vitest';

// Example utility function tests
describe('Example Utility Tests', () => {
  it('should add two numbers correctly', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  it('should demonstrate basic assertions', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
  });

  it('should test array operations', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
    expect(arr).toContain(3);
    expect(arr[0]).toBe(1);
  });

  it('should test object properties', () => {
    const user = {
      name: 'John',
      age: 30,
      email: 'john@example.com'
    };
    
    expect(user).toHaveProperty('name');
    expect(user.name).toBe('John');
    expect(user).toMatchObject({ name: 'John', age: 30 });
  });

  it('should test string operations', () => {
    const greeting = 'Hello, World!';
    expect(greeting).toContain('World');
    expect(greeting).toMatch(/Hello/);
    expect(greeting.toLowerCase()).toBe('hello, world!');
  });
});

// Example async test
describe('Async Operations', () => {
  it('should handle promises', async () => {
    const promise = Promise.resolve('success');
    await expect(promise).resolves.toBe('success');
  });

  it('should handle async/await', async () => {
    const fetchData = async () => {
      return new Promise(resolve => {
        setTimeout(() => resolve('data'), 100);
      });
    };

    const data = await fetchData();
    expect(data).toBe('data');
  });
});
