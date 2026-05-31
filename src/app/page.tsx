"use client";

import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  const products = [
    {
      id: 1,
      title: 'Aurora UI Kit - Dark Mode Elements',
      category: 'UI Templates',
      price: 49.00,
      rating: 4.9,
      imageUrl: '/product_crystal.png'
    },
    {
      id: 2,
      title: 'Nexus Dashboard Pro - React & Next.js',
      category: 'Dashboards',
      price: 79.00,
      rating: 4.8,
      imageUrl: '/product_crystal.png'
    },
    {
      id: 3,
      title: 'Lumina 3D Abstract Shapes Vol. 1',
      category: '3D Assets',
      price: 29.00,
      rating: 5.0,
      imageUrl: '/product_crystal.png'
    },
    {
      id: 4,
      title: 'Starlight Presentation Deck',
      category: 'Presentations',
      price: 39.00,
      rating: 4.7,
      imageUrl: '/product_crystal.png'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section style={{
          padding: '8rem 1.5rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div className="animate-fade-in" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            padding: '6px 16px',
            borderRadius: '100px',
            fontSize: '0.875rem',
            color: 'var(--primary-hover)',
            fontWeight: 600,
            marginBottom: '2rem'
          }}>
            <Sparkles size={16} /> Welcome to the future of digital assets
          </div>
          
          <h1 className="animate-fade-in delay-100" style={{ marginBottom: '1.5rem' }}>
            Elevate your creative <br/>
            <span style={{ 
              background: 'linear-gradient(to right, #8b5cf6, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>workflow instantly.</span>
          </h1>
          
          <p className="animate-fade-in delay-200" style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.7)', 
            marginBottom: '3rem',
            lineHeight: 1.6
          }}>
            Premium UI kits, 3D assets, and templates crafted for modern creators. Instant access, unlimited potential.
          </p>
          
          <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
              Explore Assets <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" style={{ fontSize: '1.1rem' }}>
              View Membership
            </button>
          </div>
        </section>

        {/* Features Bar */}
        <section className="glass animate-fade-in delay-300" style={{
          maxWidth: '1000px',
          margin: '0 auto 6rem',
          padding: '2rem',
          borderRadius: 'var(--radius)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <Zap size={32} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Instant Delivery</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Download links immediately after checkout.</p>
          </div>
          <div>
            <Shield size={32} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Secure Checkout</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Powered by Stripe & PayPal integration.</p>
          </div>
          <div>
            <Sparkles size={32} color="var(--success)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Premium Quality</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Carefully crafted pixel-perfect designs.</p>
          </div>
        </section>

        {/* Product Grid */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2>Trending Assets</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Hand-picked resources for your next project.</p>
            </div>
            <a href="#" style={{ color: 'var(--primary-hover)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              View all <ArrowRight size={16} />
            </a>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '4rem 1.5rem',
        marginTop: '4rem',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.5)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '1rem' }}>
          LUMINA<span style={{ color: 'var(--primary)' }}>.</span>
        </div>
        <p>© 2026 Lumina Digital Storefront. All rights reserved.</p>
      </footer>
    </>
  );
}
