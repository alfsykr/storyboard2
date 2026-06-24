import React from 'react';
import { Heart, Lightbulb, Pencil } from 'lucide-react';

export default function Refleksi({ answers, onChange }) {
  const questions = [
    {
      id: 'q1',
      num: '1.',
      text: 'Apakah saya sering menyampaikan pendapat sendiri?'
    },
    {
      id: 'q2',
      num: '2.',
      text: 'Apakah saya pernah hanya ikut pendapat teman?'
    },
    {
      id: 'q3',
      num: '3.',
      text: 'Bagaimana perasaan saya saat pendapat saya dihargai?'
    }
  ];

  return (
    <div className="reflection-container" style={{ animation: 'fadeIn 0.4s ease-out' }}>
      {/* Friendly Header */}
      <div className="text-center mb-4">
        <div 
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#FFD180',
            border: '2.5px solid #4A3728',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 10px auto',
            fontSize: '1.8rem'
          }}
        >
          👩‍🎓
        </div>
        <h2 style={{ fontSize: '1.4rem' }}>Ruang Refleksi</h2>
        <p style={{ fontSize: '0.85rem', color: '#7A624E', maxWidth: '90%', margin: '0 auto', fontStyle: 'italic' }}>
          Halo! Mari sejenak berhenti dan mendengarkan suara hati kita sendiri. Tidak ada jawaban salah di sini.
        </p>
      </div>

      {/* Reflection Cards */}
      <div className="reflection-cards-grid">
        {questions.map((q) => (
          <div key={q.id} className="reflection-prompt-card">
            <div className="reflection-question" style={{ color: '#4A3728', display: 'flex', gap: '6px' }}>
              <span>{q.num}</span>
              <span>{q.text}</span>
            </div>
            <textarea
              className="reflection-textarea"
              placeholder="Tulis refleksimu di sini..."
              value={answers[q.id] || ''}
              onChange={(e) => onChange(q.id, e.target.value)}
              style={{ height: '75px' }}
            />
          </div>
        ))}
      </div>

      {/* Decorative Bottom Row */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px 0', opacity: 0.7 }}>
        <Lightbulb size={24} color="#FF6F3C" />
        <Pencil size={24} color="#FF6F3C" />
        <Heart size={24} color="#FF6F3C" />
      </div>
    </div>
  );
}
