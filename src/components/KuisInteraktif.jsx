import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info } from 'lucide-react';

export const quizQuestions = [
  {
    id: 11,
    question: "Rani takut menyampaikan pendapat karena ...",
    choices: [
      "Tidak punya teman",
      "Takut dianggap salah",
      "Tidak suka belajar"
    ],
    correctAnswer: 1, // index 1
    explanation: "Rani merasa takut jika pendapatnya dianggap salah. Rasa takut ini wajar, tetapi kita harus belajar melawannya karena setiap pendapat berharga!"
  },
  {
    id: 12,
    question: "Siapa yang memberikan nasihat kepada Rani di rumah?",
    choices: [
      "Kakak",
      "Ayah",
      "Tetangga"
    ],
    correctAnswer: 1, // index 1
    explanation: "Ayah memberikan nasihat di ruang keluarga agar Rani berani berpendapat dengan sopan dan bertanggung jawab."
  },
  {
    id: 13,
    question: "Apa pesan Bu Fitri?",
    choices: [
      "Pendapat harus sama",
      "Pendapat orang lain tidak penting",
      "Semua orang berhak menyampaikan pendapat"
    ],
    correctAnswer: 2, // index 2
    explanation: "Bu Fitri mengingatkan bahwa kelas adalah tempat untuk saling belajar mendengarkan dan semua orang berhak menyuarakan pendapat."
  },
  {
    id: 14,
    question: "Pendapat diri yang baik adalah ...",
    choices: [
      "Memaksa orang lain setuju",
      "Menghina pendapat teman",
      "Menyampaikan pendapat dengan sopan"
    ],
    correctAnswer: 2, // index 2
    explanation: "Pendapat diri yang baik harus disampaikan secara santun, sopan, dan bertanggung jawab tanpa menyinggung perasaan orang lain."
  },
  {
    id: 15,
    question: "Mengapa kita perlu menghargai pendapat orang lain?",
    choices: [
      "Agar tidak bertengkar",
      "Karena setiap orang memiliki pandangan berbeda",
      "Semua jawaban benar"
    ],
    correctAnswer: 2, // index 2
    explanation: "Semua jawaban benar. Menghargai perbedaan pendapat menghindari perselisihan dan mengakui bahwa pengalaman setiap orang berbeda."
  }
];

export default function KuisInteraktif({ questionIndex, answeredState, onAnswerSelect }) {
  const q = quizQuestions[questionIndex];
  const answered = answeredState[questionIndex]; // { selectedIndex, isCorrect }

  const handleSelect = (idx) => {
    if (answered) return; // already answered
    const isCorrect = idx === q.correctAnswer;
    onAnswerSelect(questionIndex, idx, isCorrect);
  };

  return (
    <div className="quiz-container" style={{ animation: 'fadeIn 0.4s ease-out' }}>
      <h3 style={{ fontSize: '1rem', color: '#FF6F3C', textTransform: 'uppercase', marginBottom: '8px' }}>
        Kuis Interaktif - Pertanyaan {questionIndex + 1} dari 5
      </h3>

      {/* Question Card */}
      <div className="quiz-question-box">
        <div style={{ fontSize: '2rem' }}>👩‍🎓</div>
        <div className="quiz-question-text">{q.question}</div>
      </div>

      {/* Choices Grid */}
      <div className="quiz-choices">
        {q.choices.map((choice, idx) => {
          let btnClass = "";
          let icon = null;

          if (answered) {
            if (idx === q.correctAnswer) {
              btnClass = "correct-glow";
              icon = <CheckCircle2 size={20} color="#4A3728" fill="#FFF" />;
            } else if (idx === answered.selectedIndex) {
              btnClass = "wrong-glow";
              icon = <XCircle size={20} color="#4A3728" fill="#FFF" />;
            }
          }

          return (
            <button
              key={idx}
              className={`quiz-choice-btn ${btnClass}`}
              onClick={() => handleSelect(idx)}
              disabled={answered !== undefined}
            >
              <span>{choice}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {/* Brief Explanation */}
      {answered && (
        <div className="explanation-card">
          <div className="explanation-title" style={{ color: answered.isCorrect ? '#388E3C' : '#D32F2F' }}>
            <Info size={18} />
            <span>{answered.isCorrect ? "Jawabanmu Benar! 🎉" : "Kurang Tepat! 💡"}</span>
          </div>
          <p className="explanation-desc">{q.explanation}</p>
        </div>
      )}
    </div>
  );
}
