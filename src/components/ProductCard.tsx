import React from 'react';
import { Star, Download } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, category, price, rating, imageUrl }) => {
  return (
    <div className="glass" style={{
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: 'var(--secondary)' }}>
        {/* Placeholder for real image, using CSS background if url is not absolute */}
        {imageUrl.startsWith('http') ? (
          <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        )}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          padding: '4px 8px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <Star size={12} color="#fbbf24" fill="#fbbf24" /> {rating}
        </div>
      </div>
      
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          {category}
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.3 }}>{title}</h3>
        
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            ${price.toFixed(2)}
          </div>
          <button style={{
            background: 'var(--secondary)',
            color: 'white',
            border: '1px solid var(--border)',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'var(--primary)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'var(--secondary)'}
          >
            <Download size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
