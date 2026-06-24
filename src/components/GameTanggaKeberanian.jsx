import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, ArrowUp, ArrowDown, HelpCircle, Star } from 'lucide-react';

const stairScenarios = [
  {
    id: 1,
    question: "Teman-teman sekelas mengajak mengejek pendapat Fikri yang berbeda tentang media sosial. Apa yang Rani lakukan?",
    choices: [
      {
        text: "Ikut mengejek karena takut dianggap aneh oleh teman-teman.",
        isCorrect: false,
        behavior: "Ikut-ikutan mengejek teman",
        explanation: "Turun Tangga! 💔 Mengikuti hal buruk demi diterima kelompok adalah bentuk ikut-ikutan yang merugikan."
      },
      {
        text: "Menolak ajakan tersebut dan mendengarkan pendapat Fikri secara santun.",
        isCorrect: true,
        behavior: "Menolak ajakan merundung & mendengarkan secara santun",
        explanation: "Naik Tangga! 💚 Bagus! Kamu berani menolak tekanan teman dan menghargai perbedaan."
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
        behavior: "Memilih diam karena malu",
        explanation: "Turun Tangga! 💔 Memilih ikut diam menghambat belajarmu hanya demi terlihat sama dengan orang lain."
      },
      {
        text: "Mengangkat tangan secara mandiri dan bertanya secara sopan.",
        isCorrect: true,
        behavior: "Berani bertanya secara mandiri",
        explanation: "Naik Tangga! 💚 Keren! Berani menyampaikan ketidakpahaman secara mandiri adalah langkah menuju cerdas."
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
        behavior: "Menyanggah pendapat secara santun",
        explanation: "Naik Tangga! 💚 Sempurna! Menyampaikan ketidaksetujuan dengan bahasa sopan menjaga pertemanan tetap baik."
      },
      {
        text: "Langsung memotong: 'Pendapatmu itu salah besar dan tidak masuk akal!'",
        isCorrect: false,
        behavior: "Menyela secara kasar",
        explanation: "Turun Tangga! 💔 Menyela pembicaraan dan menuduh salah secara langsung adalah tindakan kurang santun."
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
        behavior: "Meniru tugas lain demi cari aman",
        explanation: "Turun Tangga! 💔 Menyerah begitu saja membuatmu kehilangan kesempatan menyampaikan ide orisinal."
      },
      {
        text: "Mengusulkan ide barunya secara percaya diri dan menjelaskan kelebihannya.",
        isCorrect: true,
        behavior: "Mengusulkan ide baru secara percaya diri",
        explanation: "Naik Tangga! 💚 Bagus sekali! Menyampaikan gagasan baru yang kreatif mengasah kemandirian berpikirmu."
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
        behavior: "Menerima keputusan kelompok & bekerjasama",
        explanation: "Naik Tangga! 💚 Hebat! Menghargai hasil musyawarah adalah cerminan kedewasaan dalam berpendapat."
      },
      {
        text: "Marah, mogok kerja kelompok, dan memaksakan idenya sendiri.",
        isCorrect: false,
        behavior: "Marah & memaksakan kehendak",
        explanation: "Turun Tangga! 💔 Mogok kerja kelompok dan memaksakan pendapat menunjukkan sikap egois."
      }
    ]
  }
];

export default function GameTanggaKeberanian({ onComplete }) {
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0); // 0 to 4
  const [activeStep, setActiveStep] = useState(0); // 0 to 5
  const [selectedChoiceIdx, setSelectedChoiceIdx] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  const handleChoice = (choiceIdx) => {
    if (feedback) return;

    setSelectedChoiceIdx(choiceIdx);
    const scenario = stairScenarios[currentScenarioIdx];
    const choice = scenario.choices[choiceIdx];

    if (choice.isCorrect) {
      setGameScore(prev => prev + 10);
      setActiveStep(prev => Math.min(prev + 1, 5));
      setFeedback({
        isCorrect: true,
        text: choice.explanation
      });
    } else {
      setActiveStep(prev => Math.max(prev - 1, 0));
      setFeedback({
        isCorrect: false,
        text: choice.explanation
      });
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setSelectedChoiceIdx(null);
    if (currentScenarioIdx < stairScenarios.length - 1) {
      setCurrentScenarioIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
      if (activeStep >= 4 || (activeStep === 3 && gameScore >= 30)) {
        onComplete();
      }
    }
  };

  const handleRetry = () => {
    setCurrentScenarioIdx(0);
    setActiveStep(0);
    setSelectedChoiceIdx(null);
    setFeedback(null);
    setGameScore(0);
    setIsFinished(false);
  };

  // Win condition: reached step 4 or 5 at the end
  const reachedTop = activeStep >= 4;

  if (isFinished) {
    return (
      <div className="comic-card text-center" style={{ animation: 'popIn 0.3s ease-out', maxWidth: '600px', margin: '0 auto' }}>
        <Award size={48} color="#FF6F3C" style={{ margin: '0 auto 10px auto' }} />
        {reachedTop ? (
          <>
            <h3>Puncak Keberanian Tercapai! ⭐🏆</h3>
            <p style={{ margin: '10px 0' }}>Rani berhasil menaiki tangga dan memperoleh **Bintang Kemandirian**!</p>
            <p>Skor Tangga Keberanian: <strong>{gameScore} / 50</strong> poin.</p>
            <div style={{ color: '#388E3C', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '10px' }}>
              🎉 Selamat! Kamu telah menguasai sikap mandiri & santun! 🎉
            </div>
          </>
        ) : (
          <>
            <h3>Belum Mencapai Puncak! 🪜</h3>
            <p style={{ margin: '10px 0' }}>Kamu berakhir di anak tangga ke-<strong>{activeStep}</strong> dari 5.</p>
            <p>Ayo ulangi dan pilih keputusan yang lebih bijak agar Rani berhasil naik ke puncak Bintang Kemandirian!</p>
            <button className="btn btn-primary" onClick={handleRetry} style={{ marginTop: '15px', width: '100%' }}>
              Coba Lagi 🔄
            </button>
          </>
        )}
      </div>
    );
  }

  const scenario = stairScenarios[currentScenarioIdx];

  // Coordinates for steps (bottom-left to top-right diagonal)
  // Step 0: bottom 8%, left 8%
  // Step 1: bottom 22%, left 24%
  // Step 2: bottom 36%, left 40%
  // Step 3: bottom 50%, left 56%
  // Step 4: bottom 64%, left 72%
  // Step 5: bottom 78%, left 88%
  const steps = [0, 1, 2, 3, 4, 5];
  const stepBottom = 8 + (activeStep * 14);
  const stepLeft = 8 + (activeStep * 16);

  return (
    <div className="game-tangga-container" style={{ animation: 'fadeIn 0.4s ease-out', width: '100%' }}>
      <h3 className="text-center mb-2" style={{ fontSize: '1.25rem' }}>Game 3: Tangga Keberanian 🪜</h3>
      
      <div className="game-instructions">
        Misi: Bantu Rani menaiki tangga dengan memilih sikap yang **berani, mandiri, dan santun**!
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '12px' }}>
        <span>Keputusan {currentScenarioIdx + 1} dari {stairScenarios.length}</span>
        <span>Anak Tangga: {activeStep} / 5</span>
      </div>

      {/* Visual Stairs Widget */}
      <div className="stairs-visual-widget">
        {/* Draw Stairs */}
        {steps.map((stepNum) => {
          const sBottom = 8 + (stepNum * 14);
          const sLeft = 8 + (stepNum * 16);
          return (
            <div
              key={stepNum}
              className={`stairs-step-plank ${activeStep === stepNum ? 'active' : ''}`}
              style={{
                position: 'absolute',
                bottom: `${sBottom}%`,
                left: `${sLeft}%`,
                width: stepNum === 5 ? '54px' : '44px',
                height: '14px',
                border: '2.5px solid #4A3728',
                backgroundColor: stepNum === 5 ? '#FFF59D' : '#F9E4B7',
                borderRadius: '4px',
                boxShadow: '2px 2px 0px #4A3728',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5
              }}
            >
              {stepNum === 5 && <Star size={10} color="#FF6F3C" fill="#FFC107" />}
              {stepNum !== 5 && <span style={{ fontSize: '0.55rem', fontWeight: 'bold' }}>{stepNum}</span>}
            </div>
          );
        })}

        {/* Start / Base platform */}
        <div
          style={{
            position: 'absolute',
            bottom: '2%',
            left: '2%',
            fontSize: '0.65rem',
            fontWeight: 'bold',
            color: '#7A624E'
          }}
        >
          Mulai
        </div>

        {/* Star Icon at Top */}
        <div
          style={{
            position: 'absolute',
            bottom: '88%',
            left: '88%',
            fontSize: '1.2rem',
            zIndex: 6
          }}
        >
          ⭐
        </div>

        {/* Rani Character Token climbing stairs */}
        <div 
          className="stairs-character-token"
          style={{
            bottom: `${stepBottom + 4}%`,
            left: `${stepLeft + 3}%`
          }}
        >
          👩‍🎓
        </div>
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
            {feedback.isCorrect ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
            <span>{feedback.isCorrect ? "Naik Tangga! 🎉" : "Turun Tangga! ⚠️"}</span>
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
