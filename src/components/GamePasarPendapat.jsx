import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Award, CheckCircle, XCircle } from 'lucide-react';

const opinionCards = [
  {
    id: 1,
    text: "Menurut saya ide kamu bagus, tapi mungkin kita bisa menambahkan sedikit detail di sini.",
    isSantun: true,
    reason: "Menyampaikan persetujuan sebagian dan memberi saran tambahan secara halus."
  },
  {
    id: 2,
    text: "Pendapatmu jelek sekali! Lebih baik kamu diam saja daripada bikin kacau kelas ini.",
    isSantun: false,
    reason: "Menghina pendapat orang lain secara langsung dan menggunakan kata-kata kasar."
  },
  {
    id: 3,
    text: "Aku kurang setuju karena gawai kadang bikin kita lupa waktu belajar. Bagaimana menurutmu?",
    isSantun: true,
    reason: "Mengemukakan ketidaksetujuan dengan alasan logis dan mengajak berdiskusi kembali."
  },
  {
    id: 4,
    text: "Semua orang juga tahu kalau idemu itu salah. Jangan sok tahu deh!",
    isSantun: false,
    reason: "Menolak pendapat dengan menjatuhkan mental pembicara dan terkesan meremehkan."
  },
  {
    id: 5,
    text: "Maaf memotong pembicaraan, saya punya pandangan yang sedikit berbeda mengenai hal ini.",
    isSantun: true,
    reason: "Meminta maaf sebelum menyampaikan ketidaksepakatan secara sopan."
  }
];

export default function GamePasarPendapat({ onScoreChange, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState(null); // { isCorrect, text }
  const [gameScore, setGameScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleCategorize = (isSantunChoice) => {
    if (feedback) return; // wait for next card

    const card = opinionCards[currentIndex];
    const isCorrect = isSantunChoice === card.isSantun;
    
    if (isCorrect) {
      setGameScore(prev => prev + 10);
      onScoreChange(10); // add to global score
      setFeedback({
        isCorrect: true,
        text: `Benar! +10 poin. ${card.reason}`
      });
    } else {
      setFeedback({
        isCorrect: false,
        text: `Salah! 0 poin. ${card.reason}`
      });
    }
  };

  const handleNext = () => {
    setFeedback(null);
    if (currentIndex < opinionCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
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
        <p style={{ margin: '10px 0' }}>Kamu berhasil mengumpulkan <strong>{gameScore} / 50</strong> poin dari Pasar Pendapat.</p>
        {gameScore < 30 ? (
          <div style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '1.2rem' }}>💪 Ayo belajar lebih giat lagi! 💪</div>
        ) : (
          <div style={{ color: '#A8D8A8', fontWeight: 'bold', fontSize: '1.2rem' }}>🎉 Bagus Sekali! 🎉</div>
        )}
      </div>
    );
  }

  const activeCard = opinionCards[currentIndex];

  return (
    <div className="game-pasar-pendapat" style={{ animation: 'fadeIn 0.4s ease-out' }}>
      <h3 className="text-center mb-2" style={{ fontSize: '1.25rem' }}>Game 1: Pasar Pendapat</h3>
      
      <div className="game-instructions">
        Misi: Masukkan kartu pendapat berikut ke dalam keranjang yang tepat!
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>
        <span>Kartu {currentIndex + 1} dari {opinionCards.length}</span>
        <span>Skor Game: {gameScore}</span>
      </div>

      {/* Draggable/Tappable Opinion Card Display */}
      <div className="opinions-dock">
        {!feedback ? (
          <div className="opinion-draggable-card">
            <p>"{activeCard.text}"</p>
          </div>
        ) : (
          <div 
            className="opinion-draggable-card"
            style={{ 
              backgroundColor: feedback.isCorrect ? '#E8F5E9' : '#FFEBEE',
              borderColor: feedback.isCorrect ? '#4CAF50' : '#F44336'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontWeight: 'bold', marginBottom: '6px' }}>
              {feedback.isCorrect ? <CheckCircle size={18} color="#4CAF50" /> : <XCircle size={18} color="#F44336" />}
              <span style={{ color: feedback.isCorrect ? '#2E7D32' : '#C62828' }}>
                {feedback.isCorrect ? "Jawaban Benar" : "Jawaban Salah"}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', fontWeight: 'normal', color: '#4A3728' }}>{feedback.text}</p>
          </div>
        )}
      </div>

      {/* Target Baskets */}
      {!feedback ? (
        <div className="baskets-container">
          <div 
            className="basket-drop-zone santun" 
            onClick={() => handleCategorize(true)}
          >
            <span className="basket-icon-img">🧺</span>
            <span className="basket-title">Santun</span>
            <span style={{ fontSize: '0.75rem', color: '#4CAF50' }}>Ketuk jika bahasanya sopan</span>
          </div>

          <div 
            className="basket-drop-zone tidak-santun" 
            onClick={() => handleCategorize(false)}
          >
            <span className="basket-icon-img">🧺</span>
            <span className="basket-title">Tidak Santun</span>
            <span style={{ fontSize: '0.75rem', color: '#F44336' }}>Ketuk jika kasar/menyinggung</span>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%' }}>
            Lanjutkan ▶
          </button>
        </div>
      )}
    </div>
  );
}
