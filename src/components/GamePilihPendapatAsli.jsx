import React, { useState } from 'react';
import { Award, CheckCircle, XCircle } from 'lucide-react';

const rounds = [
  {
    id: 1,
    statementA: {
      text: "Aku suka makan nasi goreng karena bumbunya pas dan rasanya enak menurut lidahku sendiri.",
      isAsli: true,
      explanation: "Lahir dari penilaian indra perasa dan keyakinan pribadimu sendiri."
    },
    statementB: {
      text: "Aku suka makan nasi goreng karena semua teman di kelasku bilang itu makanan terpopuler.",
      isAsli: false,
      explanation: "Ikut-ikutan menyukai sesuatu hanya karena orang lain mengatakannya."
    }
  },
  {
    id: 2,
    statementA: {
      text: "Aku ikut belajar kelompok di SKB karena semua teman-temanku ikut, biar dibilang eksis.",
      isAsli: false,
      explanation: "Mengikuti kegiatan tanpa tahu tujuan pribadi, melainkan demi gengsi kelompok."
    },
    statementB: {
      text: "Aku memilih belajar kelompok di SKB agar bisa berdiskusi langsung saat ada materi yang membingungkan.",
      isAsli: true,
      explanation: "Memiliki tujuan mandiri yang berdasar pada kebutuhan belajarmu sendiri."
    }
  },
  {
    id: 3,
    statementA: {
      text: "Menurutku gawai itu membantu sekali buat mencari arti kata bahasa Inggris yang sulit.",
      isAsli: true,
      explanation: "Menyampaikan fungsi gawai berdasarkan pengalaman belajarmu secara nyata."
    },
    statementB: {
      text: "Kata teman-teman di sosmed gawai itu cuma buang waktu saja, jadi aku setuju gawai itu buruk.",
      isAsli: false,
      explanation: "Mengadopsi pemikiran orang lain di media sosial tanpa menimbangnya sendiri."
    }
  }
];

export default function GamePilihPendapatAsli({ onScoreChange, onComplete }) {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // 'A' or 'B'
  const [isFlipped, setIsFlipped] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleCardClick = (choice) => {
    if (isFlipped) return; // already flipped

    setSelectedCard(choice);
    setIsFlipped(true);

    const round = rounds[currentRoundIndex];
    const isCorrect = (choice === 'A' && round.statementA.isAsli) || (choice === 'B' && round.statementB.isAsli);

    if (isCorrect) {
      setGameScore(prev => prev + 10);
      onScoreChange(10);
    }
  };

  const handleNext = () => {
    setIsFlipped(false);
    setSelectedCard(null);
    
    if (currentRoundIndex < rounds.length - 1) {
      setCurrentRoundIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
      onComplete();
    }
  };

  if (isFinished) {
    return (
      <div className="comic-card text-center" style={{ animation: 'popIn 0.3s ease-out' }}>
        <Award size={48} color="#FF6F3C" style={{ margin: '0 auto 10px auto' }} />
        <h3>Game Selesai!</h3>
        <p style={{ margin: '10px 0' }}>Kamu berhasil mengumpulkan <strong>{gameScore} / 30</strong> poin dari Pilih Pendapat Asli.</p>
        <div style={{ color: '#A8D8A8', fontWeight: 'bold', fontSize: '1.2rem' }}>🎉 Mantap! Pikiranmu Mandiri! 🎉</div>
      </div>
    );
  }

  const round = rounds[currentRoundIndex];

  return (
    <div className="game-pilih-pendapat" style={{ animation: 'fadeIn 0.4s ease-out' }}>
      <h3 className="text-center mb-2" style={{ fontSize: '1.25rem' }}>Game 2: Pilih Pendapat Asli</h3>
      
      <div className="game-instructions">
        Misi: Ketuk pernyataan yang merupakan <strong>Pendapat Asli</strong> (bukan sekadar ikut-ikutan)!
      </div>

      <div style={{ display: 'flex', justifyBetween: 'row', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '12px', justifyContent: 'space-between' }}>
        <span>Babak {currentRoundIndex + 1} dari {rounds.length}</span>
        <span>Skor Game: {gameScore}</span>
      </div>

      {/* Side-by-Side Flip Cards */}
      <div className="flip-cards-grid">
        {/* Card A */}
        <div 
          className={`flip-card-outer ${isFlipped ? 'flipped' : ''}`}
          onClick={() => handleCardClick('A')}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <span style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💬 Pilihan A</span>
              <p>"{round.statementA.text}"</p>
            </div>
            <div 
              className={`flip-card-back ${round.statementA.isAsli ? 'asli' : 'ikut-ikutan'}`}
              style={{ color: '#4A3728' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                {round.statementA.isAsli ? <CheckCircle size={18} /> : <XCircle size={18} />}
                <span className="flip-badge">
                  {round.statementA.isAsli ? "Pendapat Asli" : "Ikut-ikutan"}
                </span>
              </div>
              <p className="flip-explanation">{round.statementA.explanation}</p>
            </div>
          </div>
        </div>

        {/* Card B */}
        <div 
          className={`flip-card-outer ${isFlipped ? 'flipped' : ''}`}
          onClick={() => handleCardClick('B')}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <span style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💬 Pilihan B</span>
              <p>"{round.statementB.text}"</p>
            </div>
            <div 
              className={`flip-card-back ${round.statementB.isAsli ? 'asli' : 'ikut-ikutan'}`}
              style={{ color: '#4A3728' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                {round.statementB.isAsli ? <CheckCircle size={18} /> : <XCircle size={18} />}
                <span className="flip-badge">
                  {round.statementB.isAsli ? "Pendapat Asli" : "Ikut-ikutan"}
                </span>
              </div>
              <p className="flip-explanation">{round.statementB.explanation}</p>
            </div>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%' }}>
            Lanjutkan ▶
          </button>
        </div>
      )}
    </div>
  );
}
