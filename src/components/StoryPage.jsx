import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function StoryPage({ pageData, reflectionValue, onReflectionChange }) {
  const { title, image, narration, dialogues, reflectionPrompt, id } = pageData;

  return (
    <div className="comic-panel-container">
      <h2 className="text-center mb-3" style={{ fontSize: '1.4rem' }}>{title}</h2>
      
      {/* Comic Panel Image */}
      <div className="comic-panel-frame">
        <img 
          src={image} 
          alt={title} 
          className="comic-panel-image"
        />
        {id === 5 && (
          <div className="lightbulb-icon-float">
            <Lightbulb size={24} color="#FFB300" fill="#FFC107" />
          </div>
        )}
      </div>

      {/* Dialog Speech Bubbles */}
      {dialogues && dialogues.length > 0 && (
        <div className="dialog-container">
          {dialogues.map((dialog, index) => (
            <div 
              key={index} 
              className={`speech-bubble speech-bubble-${dialog.align}`}
              style={{
                alignSelf: dialog.align === 'left' ? 'flex-start' : 'flex-end',
                maxWidth: '85%',
                backgroundColor: dialog.align === 'left' ? '#FFF' : '#FFF9C4'
              }}
            >
              <span className="speech-bubble-tag">{dialog.speaker}</span>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>"{dialog.text}"</p>
            </div>
          ))}
        </div>
      )}

      {/* Narration Banner */}
      {narration && (
        <div className="narration-banner">
          {narration.split('\n').map((line, idx) => (
            <p key={idx} style={{ marginBottom: idx === narration.split('\n').length - 1 ? 0 : 4 }}>
              {line}
            </p>
          ))}
        </div>
      )}

      {/* Contextual mini reflection card */}
      {reflectionPrompt && (
        <div className="comic-card" style={{ marginTop: '20px', padding: '15px', backgroundColor: '#F9E4B7' }}>
          <div className="reflection-question" style={{ color: '#4A3728' }}>
            {id === 3 ? 'Ruang Refleksi' : 'Catatan Hatiku'}
          </div>
          <p style={{ fontSize: '0.85rem', marginBottom: '8px', fontStyle: 'italic', color: '#7A624E' }}>
            {reflectionPrompt}
          </p>
          <textarea
            className="reflection-textarea"
            placeholder="Tulis pendapatmu di sini..."
            value={reflectionValue || ''}
            onChange={(e) => onReflectionChange(id, e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
