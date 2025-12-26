# Testing Guide

This project uses **Vitest** and **React Testing Library** for testing.

## 🚀 Running Tests

### Run tests in watch mode (recommended for development)
```bash
npm test
```

### Run tests once (CI/production)
```bash
npm run test:run
```

### Run tests with UI dashboard
```bash
npm run test:ui
```

### Generate coverage report
```bash
npm run test:coverage
```

## 📁 Test File Structure

```
src/
├── components/
│   ├── Footer.tsx
│   ├── Footer.test.tsx      ← Component test
│   ├── Header.tsx
│   └── Header.test.tsx      ← Component test
├── test/
│   ├── setup.ts             ← Test configuration
│   └── example.test.ts      ← Example tests
```

## ✅ Testing Best Practices

### Naming Convention
- Test files: `*.test.ts` or `*.test.tsx`
- Place test files next to the components they test

### Writing Tests

#### Component Testing Example
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

#### User Interaction Testing
```typescript
import { fireEvent } from '@testing-library/react';

it('handles button click', () => {
  render(<MyButton />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Clicked!')).toBeInTheDocument();
});
```

#### Testing with React Router
```typescript
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <MyComponent />
  </BrowserRouter>
);
```

#### Testing with Context
```typescript
import { AuthContext } from '../context/AuthContext';

const mockValue = {
  isAuthenticated: true,
  customer: { firstName: 'John' }
};

render(
  <AuthContext.Provider value={mockValue}>
    <MyComponent />
  </AuthContext.Provider>
);
```

## 🔍 Common Test Queries

- `getByText()` - Find element by text content
- `getByRole()` - Find by ARIA role (button, link, etc.)
- `getByTestId()` - Find by data-testid attribute
- `getByLabelText()` - Find by label text
- `queryBy...()` - Returns null if not found (for asserting absence)
- `findBy...()` - Async version, waits for element

## 📊 Coverage Reports

After running `npm run test:coverage`, open `coverage/index.html` in your browser to view detailed coverage reports.

## 🛠️ Configuration Files

- `vitest.config.ts` - Vitest configuration
- `src/test/setup.ts` - Global test setup (runs before each test)

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Common Testing Patterns](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
