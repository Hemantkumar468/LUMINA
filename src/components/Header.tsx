import React from 'react';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';

const Header = () => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '1rem 0',
      borderBottom: '1px solid var(--border)',
    }} className="glass">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em', color: 'var(--foreground)' }}>
            LUMINA<span style={{ color: 'var(--primary)' }}>.</span>
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }} className="hide-mobile">
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Store</a>
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>UI Kits</a>
            <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Templates</a>
          </nav>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--foreground)' }}>
          <button style={{ color: 'white', padding: '0.5rem' }}><Search size={20} /></button>
          <button style={{ color: 'white', padding: '0.5rem' }}><User size={20} /></button>
          <button style={{ color: 'white', padding: '0.5rem', position: 'relative' }}>
            <ShoppingBag size={20} />
            <span style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              background: 'var(--primary)',
              color: 'white',
              fontSize: '0.65rem',
              fontWeight: 'bold',
              height: '16px',
              width: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>2</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
