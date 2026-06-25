import React from 'react';
import { Target, MessageSquare } from 'lucide-react';
import tutorImg from '../assets/tutor.webp';

export default function SapaanTujuan() {
  const objectives = [
    "Mengenali pendapat diri sendiri.",
    "Membedakan pendapat pribadi dan ikut-ikutan.",
    "Menyampaikan pendapat secara santun.",
    "Menghargai pendapat orang lain.",
    "Memiliki keberanian menyuarakan gagasan secara mandiri."
  ];

  return (
    <div className="sapaan-container" style={{ animation: 'fadeIn 0.4s ease-out', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 className="text-center mb-3" style={{ fontSize: '1.4rem' }}>Sapaan & Tujuan Pembelajaran</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
      }} className="sapaan-grid">
        
        {/* Tutor Greeting Card */}
        <div className="comic-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', margin: 0 }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }} className="tutor-header-wrapper">
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: 'var(--radius-md)', 
              border: 'var(--border-width) solid var(--border-color)', 
              overflow: 'hidden',
              boxShadow: 'var(--shadow-comic-sm)',
              flexShrink: 0,
              backgroundColor: '#fff'
            }}>
              <img src={tutorImg} alt="Tutor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: '160px' }}>
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: '900', 
                fontSize: '1.1rem', 
                color: 'var(--color-accent)',
                marginBottom: '4px'
              }}>
                Bu Fitri (Tutor)
              </div>
              <div style={{ 
                fontSize: '0.8rem', 
                fontWeight: 'bold', 
                color: 'var(--color-text-muted)',
                backgroundColor: 'rgba(74, 55, 40, 0.1)',
                padding: '4px 10px',
                borderRadius: '12px',
                display: 'inline-block'
              }}>
                Virtual Tutor Paket B
              </div>
            </div>
          </div>

          {/* Speech bubble for narration */}
          <div className="speech-bubble speech-bubble-left" style={{ margin: '10px 0 0 0', position: 'relative', border: '3px solid #4A3728' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-accent)', marginBottom: '8px' }}>
              <MessageSquare size={16} />
              <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pesan Tutor:</strong>
            </div>
            <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', lineHeight: '1.5' }}>
              <strong>Assalamu’alaikum warahmatullahi wabarakatuh.</strong>
            </p>
            <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Halo Warga Belajar Paket B di mana pun berada. Selamat datang dalam pembelajaran hari ini. Pernahkah kalian memiliki pendapat yang berbeda dari teman-teman, tetapi ragu untuk menyampaikannya?
            </p>
            <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Setiap orang memiliki pikiran, pengalaman, dan pandangan yang berbeda. Oleh karena itu, setiap pendapat yang disampaikan dengan baik dan santun layak untuk dihargai.
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
              Melalui pembelajaran ini, kita akan belajar mengenali pendapat diri sendiri, berani menyampaikannya, serta menghargai pendapat orang lain.
            </p>
          </div>
        </div>

        {/* Learning Objectives Card */}
        <div className="comic-card" style={{ padding: '20px', backgroundColor: '#FFF', margin: 0 }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '15px', 
            borderBottom: '3px dashed var(--border-color)', 
            paddingBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Target size={22} color="var(--color-accent)" /> Tujuan Pembelajaran
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {objectives.map((obj, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                backgroundColor: 'var(--color-bg-page)',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: '2px solid var(--border-color)',
                boxShadow: 'var(--shadow-comic-sm)',
                transform: 'translate(0px, 0px)',
                transition: 'all 0.2s ease'
              }} className="objective-item">
                <div style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '900',
                  fontSize: '0.9rem',
                  border: '2px solid var(--border-color)',
                  flexShrink: 0,
                  boxShadow: '1px 1px 0px var(--border-color)'
                }}>
                  {index + 1}
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-text)', lineHeight: '1.4' }}>
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
