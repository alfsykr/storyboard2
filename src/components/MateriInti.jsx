import React from 'react';
import { Heart, ShieldAlert, Sparkles, Smile, Check } from 'lucide-react';

export default function MateriInti({ answer, onChange }) {
  return (
    <div className="materi-container" style={{ animation: 'fadeIn 0.4s ease-out' }}>
      <h2 className="text-center mb-3" style={{ fontSize: '1.4rem' }}>Mari Mengenal Pendapat!</h2>

      <div className="materi-grid">
        {/* Left Column: Apa Itu Pendapat Diri? */}
        <div className="comic-card" style={{ padding: '16px', margin: 0 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', borderBottom: '2px solid #4A3728', paddingBottom: '4px' }}>
            💡 Apa Itu Pendapat Diri?
          </h3>
          <div className="checklist-container">
            <div className="checklist-item">
              <div className="checkmark-circle">
                <Check size={14} strokeWidth={3} />
              </div>
              <p style={{ fontSize: '0.85rem' }}>
                Pikiran atau pandangan yang berasal dari <strong>diri sendiri</strong>.
              </p>
            </div>
            <div className="checklist-item">
              <div className="checkmark-circle">
                <Check size={14} strokeWidth={3} />
              </div>
              <p style={{ fontSize: '0.85rem' }}>
                Berdasarkan <strong>pengalaman</strong> dan <strong>pengetahuan</strong> yang kamu miliki.
              </p>
            </div>
            <div className="checklist-item">
              <div className="checkmark-circle">
                <Check size={14} strokeWidth={3} />
              </div>
              <p style={{ fontSize: '0.85rem' }}>
                Disampaikan dengan cara yang <strong>santun</strong> dan tidak menyakiti.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Ciri Pendapat Diri */}
        <div className="comic-card" style={{ padding: '16px', margin: 0 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', borderBottom: '2px solid #4A3728', paddingBottom: '4px' }}>
            🌟 Ciri Pendapat Diri
          </h3>
          <div className="materi-cards-grid">
            <div className="materi-icon-card">
              <div className="materi-icon-box">
                <Heart size={20} color="#FF6F3C" fill="#FF6F3C" style={{ opacity: 0.8 }} />
              </div>
              <span className="materi-icon-title">Jujur</span>
              <span className="materi-icon-desc">Sesuai kata hati</span>
            </div>
            
            <div className="materi-icon-card">
              <div className="materi-icon-box">
                <Sparkles size={20} color="#FF6F3C" fill="#FF6F3C" style={{ opacity: 0.8 }} />
              </div>
              <span className="materi-icon-title">Berani</span>
              <span className="materi-icon-desc">Tanggung jawab</span>
            </div>

            <div className="materi-icon-card">
              <div className="materi-icon-box">
                <ShieldAlert size={20} color="#FF6F3C" fill="#FF6F3C" style={{ opacity: 0.8 }} />
              </div>
              <span className="materi-icon-title">Mandiri</span>
              <span className="materi-icon-desc">Tidak ikut-ikutan</span>
            </div>

            <div className="materi-icon-card">
              <div className="materi-icon-box">
                <Smile size={20} color="#FF6F3C" fill="#FF6F3C" style={{ opacity: 0.8 }} />
              </div>
              <span className="materi-icon-title">Santun</span>
              <span className="materi-icon-desc">Menghargai teman</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rani's Tip Bubble */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: '10px 14px', borderRadius: '16px', border: '2px solid #4A3728' }}>
        <div style={{ fontSize: '1.8rem' }}>👩‍🎓</div>
        <div className="speech-bubble speech-bubble-left" style={{ margin: 0, padding: '8px 12px', fontSize: '0.8rem', boxShadow: 'none', border: '2px solid #4A3728' }}>
          <p style={{ margin: 0 }}>"Setiap orang punya pendapat yang berharga lho! Jangan takut bicara ya."</p>
        </div>
      </div>

      {/* Catatan Refleksi Textbox */}
      <div className="comic-card" style={{ marginTop: '20px', padding: '15px' }}>
        <div className="reflection-question" style={{ color: '#4A3728' }}>
          📝 Catatan Refleksi
        </div>
        <p style={{ fontSize: '0.8rem', marginBottom: '8px', color: '#7A624E', fontStyle: 'italic' }}>
          Mengapa penting bagi kita untuk menyampaikan pendapat secara santun?
        </p>
        <textarea
          className="reflection-textarea"
          placeholder="Tulis refleksimu di sini..."
          value={answer || ''}
          onChange={(e) => onChange(e.target.value)}
          style={{ height: '70px' }}
        />
      </div>
    </div>
  );
}
