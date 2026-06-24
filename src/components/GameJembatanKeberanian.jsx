import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

const bridgeScenarios = [
  {
    id: 1,
    question: "Teman-teman sekelas mengajak mengejek pendapat Fikri yang berbeda tentang media sosial. Apa yang Rani lakukan?",
    choices: [
      {
        text: "Ikut mengejek karena takut dianggap aneh oleh teman-teman.",
        isCorrect: false,
        explanation: "Papan Jembatan Retak! 💔 Mengikuti ajakan buruk demi diterima kelompok adalah bentuk 'ikut-ikutan' yang merugikan orang lain."
      },
      {
        text: "Menolak ajakan tersebut dan mendengarkan pendapat Fikri secara santun.",
        isCorrect: true,
        explanation: "Papan Terpasang! 💚 Hebat, kamu berani menolak tekanan kelompok dan menghargai perbedaan pendapat!"
      }
    ]
  },
  {
    id: 2,
    question: "Bu Fitri menawarkan bertanya tentang materi sulit. Rani sebenarnya belum paham, tapi semua teman diam. Rani sebaiknya...",
    choices: [
      {
        text: "Memilih ikut diam karena malu dilihat teman-teman lain.",
        isCorrect: false,
        explanation: "Papan Jembatan Retak! 💔 Memendam ketidakpahaman hanya karena ingin sama dengan yang lain akan menghambat belajarmu."
      },
      {
        text: "Mengangkat tangan secara mandiri dan bertanya secara sopan.",
        isCorrect: true,
        explanation: "Papan Terpasang! 💚 Luar biasa! Berani menyuarakan kebutuhan belajar diri sendiri adalah wujud kemandirian sejati."
      }
    ]
  },
  {
    id: 3,
    question: "Teman Rani menyampaikan pendapat kurang tepat saat diskusi. Bagaimana Rani menanggapinya?",
    choices: [
      {
        text: "Menyampaikan sanggahan secara sopan: 'Saya menghargai pendapatmu, namun ada sudut pandang lain...'",
        isCorrect: true,
        explanation: "Papan Terpasang! 💚 Sempurna! Kamu berhasil menyampaikan ketidaksetujuan secara sopan tanpa melukai perasaannya."
      },
      {
        text: "Langsung memotong: 'Pendapatmu itu salah besar dan tidak masuk akal!'",
        isCorrect: false,
        explanation: "Papan Jembatan Retak! 💔 Menyela dan meremehkan pendapat teman adalah cara bicara yang tidak santun."
      }
    ]
  },
  {
    id: 4,
    question: "Rani ingin membuat tugas kelompok dengan ide barunya, namun teman kelompok ingin meniru tugas lain demi cari aman. Rani...",
    choices: [
      {
        text: "Mengikuti keinginan kelompok untuk meniru tugas lain agar cepat selesai.",
        isCorrect: false,
        explanation: "Papan Jembatan Retak! 💔 Menyerah pada tiruan membuatmu kehilangan kesempatan mengasah ide asli pemikiranmu."
      },
      {
        text: "Mengusulkan ide barunya secara percaya diri dan menjelaskan kelebihannya.",
        isCorrect: true,
        explanation: "Papan Terpasang! 💚 Bagus sekali! Berani menyuarakan gagasan mandiri yang konstruktif demi kemajuan bersama."
      }
    ]
  },
  {
    id: 5,
    question: "Kelompok memutuskan memakai ide teman lain, padahal Rani merasa idenya lebih bagus. Sikap Rani yang bijak adalah...",
    choices: [
      {
        text: "Menerima keputusan kelompok dengan lapang dada dan ikut bekerjasama.",
        isCorrect: true,
        explanation: "Papan Terpasang! 💚 Keren! Bijak mendengarkan dan menghargai keputusan musyawarah adalah bagian dari kedewasaan berpendapat."
      },
      {
        text: "Marah, mogok kerja kelompok, dan memaksakan idenya sendiri.",
        isCorrect: false,
        explanation: "Papan Jembatan Retak! 💔 Memaksakan kehendak sendiri menunjukkan ketidakmampuan menghargai pendapat orang lain."
      }
    ]
  }
];

export default function GameJembatanKeberanian({ onComplete }) {
  const [currentPlank, setCurrentPlank] = useState(0); // 0 to 4 (representing scenarios)
  const [plankStates, setPlankStates] = useState(Array(5).fill('empty')); // 'empty', 'built', 'cracked'
  const [selectedChoiceIdx, setSelectedChoiceIdx] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [raniPosition, setRaniPosition] = useState(0); // 0 to 5 (0 = left cliff, 5 = right cliff)
  const [gameScore, setGameScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleChoice = (choiceIdx) => {
    if (feedback) return; // wait for next

    setSelectedChoiceIdx(choiceIdx);
    const scenario = bridgeScenarios[currentPlank];
    const choice = scenario.choices[choiceIdx];

    const newStates = [...plankStates];
    if (choice.isCorrect) {
      newStates[currentPlank] = 'built';
      setPlankStates(newStates);
      setGameScore(prev => prev + 10);
      setRaniPosition(currentPlank + 1);
      setFeedback({
        isCorrect: true,
        text: choice.explanation
      });
    } else {
      newStates[currentPlank] = 'cracked';
      setPlankStates(newStates);
      // Rani doesn't move forward on cracked planks immediately, or moves but it is cracked
      setRaniPosition(currentPlank + 1); // Rani walks across anyway but with caution!
      setFeedback({
        isCorrect: false,
        text: choice.explanation
      });
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setSelectedChoiceIdx(null);
    if (currentPlank < bridgeScenarios.length - 1) {
      setCurrentPlank(prev => prev + 1);
    } else {
      setIsFinished(true);
      onComplete();
    }
  };

  if (isFinished) {
    return (
      <div className="comic-card text-center" style={{ animation: 'popIn 0.3s ease-out', maxWidth: '600px', margin: '0 auto' }}>
        <Award size={48} color="#FF6F3C" style={{ margin: '0 auto 10px auto' }} />
        <h3>Jembatan Terlewati! 🌉</h3>
        <p style={{ margin: '10px 0' }}>Rani berhasil menyeberangi jembatan pilihan dan mencapai <strong>Bintang Kemandirian!</strong></p>
        <p>Skor Jembatan Keberanian: <strong>{gameScore} / 50</strong> poin.</p>
        <div style={{ color: '#388E3C', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '10px' }}>
          🎉 Berani Berpendapat, Santun Berkata! 🎉
        </div>
      </div>
    );
  }

  const scenario = bridgeScenarios[currentPlank];

  // Calculate left percentage for Rani's token based on current plank position
  // Left cliff: ~8%, Plank 1: ~25%, Plank 2: ~42%, Plank 3: ~59%, Plank 4: ~76%, Plank 5/Finish: ~92%
  const tokenLeftPercentage = 8 + (raniPosition * 16.8);

  return (
    <div className="game-jembatan-container" style={{ animation: 'fadeIn 0.4s ease-out', width: '100%' }}>
      <h3 className="text-center mb-2" style={{ fontSize: '1.25rem' }}>Game 3: Jembatan Keberanian 🌉</h3>
      
      <div className="game-instructions">
        Misi: Bantu Rani menyeberangi jurang dengan memilih sikap yang **berani, mandiri, dan santun**!
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '12px' }}>
        <span>Papan {currentPlank + 1} dari {bridgeScenarios.length}</span>
        <span>Skor Game: {gameScore}</span>
      </div>

      {/* Visual Bridge Widget */}
      <div className="bridge-visual-widget">
        <div className="cliff-left">Start</div>
        
        <div className="planks-wrapper">
          {plankStates.map((state, idx) => (
            <div 
              key={idx} 
              className={`bridge-board-plank ${state}`}
              style={{
                width: '18%',
                height: '24px',
                border: '3px solid #4A3728',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                position: 'relative'
              }}
            >
              {state === 'built' && '💚'}
              {state === 'cracked' && '⚡'}
              {state === 'empty' && `${idx + 1}`}
              
              {/* Jagged crack styling inside board */}
              {state === 'cracked' && (
                <div className="plank-crack-line" />
              )}
            </div>
          ))}

          {/* Rani Character Token */}
          <div 
            className="bridge-character-token"
            style={{
              left: `${tokenLeftPercentage}%`
            }}
          >
            👩‍🎓
          </div>
        </div>

        <div className="cliff-right">⭐</div>
      </div>

      {/* Scenario Question */}
      <div className="quiz-question-box" style={{ marginBottom: '15px' }}>
        <HelpCircle size={24} color="#FF6F3C" style={{ flexShrink: 0 }} />
        <div className="quiz-question-text" style={{ fontSize: '0.95rem' }}>{scenario.question}</div>
      </div>

      {/* Choices List */}
      <div className="quiz-choices">
        {scenario.choices.map((choice, idx) => {
          let btnClass = "";
          let icon = null;

          if (feedback) {
            if (idx === selectedChoiceIdx) {
              btnClass = choice.isCorrect ? "correct-glow" : "wrong-glow";
              icon = choice.isCorrect ? <CheckCircle size={20} color="#4A3728" fill="#FFF" /> : <XCircle size={20} color="#4A3728" fill="#FFF" />;
            } else if (choice.isCorrect) {
              btnClass = "correct-glow";
            }
          }

          return (
            <button
              key={idx}
              className={`quiz-choice-btn ${btnClass}`}
              onClick={() => handleChoice(idx)}
              disabled={feedback !== null}
              style={{ padding: '12px 15px', fontSize: '0.9rem', minHeight: '48px' }}
            >
              <span>{choice.text}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {/* Detailed Feedback */}
      {feedback && (
        <div className="explanation-card" style={{ marginTop: '10px' }}>
          <div className="explanation-title" style={{ color: feedback.isCorrect ? '#388E3C' : '#D32F2F' }}>
            {feedback.isCorrect ? <Sparkles size={18} /> : <ShieldAlert size={18} />}
            <span>{feedback.isCorrect ? "Maju Selangkah! 🎉" : "Papan Jembatan Retak! ⚠️"}</span>
          </div>
          <p className="explanation-desc">{feedback.text}</p>
          
          <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%', marginTop: '12px' }}>
            Lanjutkan ▶
          </button>
        </div>
      )}
    </div>
  );
}
