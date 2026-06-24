import React from 'react';
import { Award, RefreshCw, Send } from 'lucide-react';
import penutupImg from '../assets/penutup.png';

export default function Penutup({ challengeValue, onChallengeChange, reflectionAnswers = {}, materiReflection = '', onRestart }) {
  return (
    <div className="closing-container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <h2 style={{ fontSize: '1.6rem', color: '#FF6F3C' }}>Hore! Kamu Berhasil!</h2>
      
      {/* Happy Characters Illustration */}
      <div className="closing-illustration">
        <img 
          src={penutupImg} 
          alt="Rani, Ayah, Bu Fitri Tersenyum Bersama" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Slogan Banner */}
      <div className="slogan-card">
        📢 "Berani Berpendapat, Santun Berkata, Bijak Mendengarkan."
      </div>

      {/* Inspirational Quote */}
      <div className="comic-card" style={{ padding: '16px', margin: 0, backgroundColor: '#FFF9C4' }}>
        <p style={{ fontSize: '0.88rem', fontStyle: 'italic', lineHeight: 1.5, color: '#4A3728' }}>
          "Pendapat diri adalah suara hati yang lahir dari pengalaman, pemikiran, dan keyakinan kita. 
          Ketika disampaikan dengan santun dan penuh tanggung jawab, pendapat dapat menjadi kekuatan untuk belajar, 
          berkembang, dan memberi manfaat bagi orang lain."
        </p>
      </div>

      {/* Reflection Summary Card */}
      <div className="comic-card" style={{ padding: '16px', margin: 0, backgroundColor: '#FFF', textAlign: 'left' }}>
        <h3 style={{ fontSize: '1.05rem', marginBottom: '10px', borderBottom: '2px solid #4A3728', paddingBottom: '4px' }}>
          📓 Catatan Refleksimu Selama Belajar
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
          <div>
            <strong>1. Apakah saya sering menyampaikan pendapat sendiri?</strong>
            <p style={{ color: '#7A624E', fontStyle: 'italic', marginTop: '2px', paddingLeft: '8px', borderLeft: '2px solid #FF6F3C' }}>
              {reflectionAnswers.q1 ? `"${reflectionAnswers.q1}"` : "(Belum diisi)"}
            </p>
          </div>
          <div>
            <strong>2. Apakah saya pernah hanya ikut pendapat teman?</strong>
            <p style={{ color: '#7A624E', fontStyle: 'italic', marginTop: '2px', paddingLeft: '8px', borderLeft: '2px solid #FF6F3C' }}>
              {reflectionAnswers.q2 ? `"${reflectionAnswers.q2}"` : "(Belum diisi)"}
            </p>
          </div>
          <div>
            <strong>3. Bagaimana perasaan saya saat pendapat saya dihargai?</strong>
            <p style={{ color: '#7A624E', fontStyle: 'italic', marginTop: '2px', paddingLeft: '8px', borderLeft: '2px solid #FF6F3C' }}>
              {reflectionAnswers.q3 ? `"${reflectionAnswers.q3}"` : "(Belum diisi)"}
            </p>
          </div>
          <div>
            <strong>4. Mengapa penting menyampaikan pendapat secara santun?</strong>
            <p style={{ color: '#7A624E', fontStyle: 'italic', marginTop: '2px', paddingLeft: '8px', borderLeft: '2px solid #FF6F3C' }}>
              {materiReflection ? `"${materiReflection}"` : "(Belum diisi)"}
            </p>
          </div>
        </div>
      </div>

      {/* Challenge Text Input */}
      <div className="challenge-card">
        <div className="challenge-title" style={{ color: '#4A3728' }}>
          <Award size={20} color="#FF6F3C" fill="#FFC107" />
          <span>Tantangan Terakhir! 🏆</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: '#7A624E', marginBottom: '8px' }}>
          Tuliskan satu pendapatmu tentang masalah di lingkungan sekitar (misal: sampah, ketertiban, dll) beserta alasannya:
        </p>
        <textarea
          className="challenge-textarea"
          placeholder="Tulis pendapat dan alasanmu di sini..."
          value={challengeValue || ''}
          onChange={(e) => onChallengeChange(e.target.value)}
        />
      </div>

      {/* Restart Button */}
      <div style={{ marginTop: '10px', width: '100%' }}>
        <button className="btn btn-secondary" onClick={onRestart} style={{ width: '100%' }}>
          <RefreshCw size={18} /> Ulangi Belajar
        </button>
      </div>
    </div>
  );
}
