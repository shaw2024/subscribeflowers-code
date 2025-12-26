import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders footer with all sections', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByText('Connect With Us')).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument();
  });

  it('displays social media links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const facebookLink = screen.getByText('facebook.com/subscribeflowers');
    const instagramLink = screen.getByText('@subscribeflower');

    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
  });

  it('displays copyright text', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText(/© 2025 Subscribe Flowers. All rights reserved./i)).toBeInTheDocument();
  });

  it('social links have correct attributes', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const links = screen.getAllByRole('link', { name: /facebook|instagram/i });
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
