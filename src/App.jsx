import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Award, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

// Assets
import coverImg from './assets/cover.png';
import pemantikImg from './assets/pemantik.png';
import story1Img from './assets/story1.png';
import story2Img from './assets/story2.png';
import story3Img from './assets/story3.png';
import story4Img from './assets/story4.png';
import story5Img from './assets/story5.png';
import story6Img from './assets/story6.png';

// Components
import StoryPage from './components/StoryPage';
import Refleksi from './components/Refleksi';
import MateriInti from './components/MateriInti';
import KuisInteraktif, { quizQuestions } from './components/KuisInteraktif';
import GamePasarPendapat from './components/GamePasarPendapat';
import GamePilihPendapatAsli from './components/GamePilihPendapatAsli';
import GameTanggaKeberanian from './components/GameTanggaKeberanian';
import Penutup from './components/Penutup';
import ProfilPengembang from './components/ProfilPengembang';
import SapaanTujuan from './components/SapaanTujuan';

// Story configurations
const storyPagesData = [
  {
    id: 3,
    title: "Halaman 3: Cerita Awal",
    image: story1Img,
    narration: "Bu Fitri meminta setiap peserta didik menyampaikan pendapat tentang penggunaan media sosial.\n\nSemua teman Rani memiliki pendapat yang sama. Rani sebenarnya memiliki pandangan berbeda. Namun ia memilih diam.",
    dialogues: [
      { speaker: "Bu Fitri", text: "Bagaimana pendapat kalian tentang penggunaan media sosial?", align: "left" }
    ]
  },
  {
    id: 4,
    title: "Halaman 4: Konflik",
    image: story2Img,
    narration: "Rani merasa takut jika pendapatnya dianggap salah.\n\nIa berpikir:\n❌ Pendapatku tidak penting.\n❌ Lebih baik ikut teman saja.\n❌ Aku takut ditertawakan.",
    dialogues: [
      { speaker: "Rani", text: "Mengapa aku merasa takut? Apakah pendapatku tidak penting?", align: "right" }
    ]
  },
  {
    id: 5,
    title: "Halaman 5: Nasehat Ayah",
    image: story3Img,
    narration: "Nasihat Ayah membuat Rani menyadari bahwa perbedaan pendapat adalah hal yang wajar.",
    dialogues: [
      { speaker: "Ayah", text: "Rani, setiap orang memiliki pikiran dan pengalaman yang berbeda.", align: "left" },
      { speaker: "Ayah", text: "Pendapat yang baik tidak harus sama dengan orang lain. Yang penting disampaikan dengan sopan dan bertanggung jawab.", align: "left" }
    ]
  },
  {
    id: 6,
    title: "Halaman 6: Motivasi Bu Fitri",
    image: story4Img,
    narration: "Kata-kata Bu Fitri memberi kekuatan baru bagi Rani. Rani mulai tersenyum.",
    dialogues: [
      { speaker: "Bu Fitri", text: "Rani, kelas bukan tempat mencari siapa yang paling benar.", align: "left" },
      { speaker: "Bu Fitri", text: "Kelas adalah tempat belajar mendengarkan dan menghargai pendapat. Suaramu penting dan layak didengar.", align: "left" }
    ]
  },
  {
    id: 7,
    title: "Halaman 7: Solusi",
    image: story5Img,
    narration: "Rani mulai berani menyampaikan pandangannya. Ia belajar:\n✓ Berbicara sopan\n✓ Mendengarkan teman\n✓ Menghargai perbedaan\n✓ Tetap percaya pada pendapatnya",
    dialogues: [
      { speaker: "Rani", text: "Saya rasa media sosial sangat membantu jika kita batasi penggunaannya secara bijak.", align: "right" }
    ]
  },
  {
    id: 8,
    title: "Halaman 8: Cerita Akhir",
    image: story6Img,
    narration: "Pendapat Rani ternyata mendapat apresiasi. Teman-temannya mendengarkan dengan baik.\n\nRani menyadari bahwa menyampaikan pendapat tidak perlu takut selama dilakukan dengan santun.",
    dialogues: [
      { speaker: "Teman Rani", text: "Wah, pendapat Rani menarik sekali! Aku setuju dengan sudut pandangmu.", align: "left" }
    ]
  }
];

export default function App() {
  const [pageIndex, setPageIndex] = useState(0); // 0 to 19

  // Game states and scores
  const [totalScore, setTotalScore] = useState(0);
  const [pollAnswer, setPollAnswer] = useState(null);
  const [reflectionAnswers, setReflectionAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [storyReflections, setStoryReflections] = useState({});
  const [materiReflection, setMateriReflection] = useState('');
  const [quizAnswers, setQuizAnswers] = useState({}); // { 0: { selectedIndex, isCorrect }, ... }
  const [challengeAnswer, setChallengeAnswer] = useState('');

  // Games progression
  const [game1Done, setGame1Done] = useState(false);
  const [game2Done, setGame2Done] = useState(false);
  const [game3Done, setGame3Done] = useState(false);

  // Confetti celebration
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Navigations
  const handleNext = () => {
    if (pageIndex === 15) {
      // Completed quiz
      triggerConfetti();
    }
    if (pageIndex < 19) {
      setPageIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (pageIndex > 0) {
      setPageIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setPageIndex(0);
    setTotalScore(0);
    setPollAnswer(null);
    setReflectionAnswers({ q1: '', q2: '', q3: '' });
    setStoryReflections({});
    setMateriReflection('');
    setQuizAnswers({});
    setChallengeAnswer('');
    setGame1Done(false);
    setGame2Done(false);
    setGame3Done(false);
  };

  // Poll handler
  const selectPoll = (option) => {
    if (pollAnswer) return;
    setPollAnswer(option);
  };

  // Quiz answer handler
  const handleQuizAnswer = (qIdx, selectedIdx, isCorrect) => {
    setQuizAnswers(prev => ({
      ...prev,
      [qIdx]: { selectedIndex: selectedIdx, isCorrect }
    }));
    if (isCorrect) {
      setTotalScore(prev => prev + 10);
    }
  };

  // Scoring in games
  const addScore = (points) => {
    setTotalScore(prev => prev + points);
  };

  // Progress calculator (percentage of main flow: 16 pages)
  const mainFlowPages = 16;
  const isMainFlow = pageIndex < mainFlowPages;
  const progressPercent = isMainFlow ? Math.round((pageIndex / (mainFlowPages - 1)) * 100) : 100;

  // Render active page content
  const renderPageContent = () => {
    switch (pageIndex) {
      case 0: // Cover
        return (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div className="cover-screen">
              <div className="text-center">
                <span className="cover-meta">Pendidikan Kesetaraan Paket B</span>
                <h1 className="cover-title">Suara Hati Rani</h1>
                <p className="cover-subtitle">"Pendapatku berharga, pendapatmu juga berharga."</p>

                {/* Mata Pelajaran & Unit Metadata Card */}
                <div style={{ 
                  marginTop: '15px', 
                  marginBottom: '20px', 
                  backgroundColor: '#FFF', 
                  border: '2.5px solid #4A3728', 
                  borderRadius: '12px', 
                  padding: '12px 16px', 
                  boxShadow: '3px 3px 0px #4A3728',
                  textAlign: 'left',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#7A624E', textTransform: 'uppercase', fontWeight: 'bold', borderBottom: '1px dashed #4A3728', paddingBottom: '4px' }}>
                    📚 Modul Pembelajaran
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: '#4A3728' }}>
                    <div><strong>Mata Pelajaran:</strong> Pemberdayaan (Paket B)</div>
                    <div><strong>Unit:</strong> Elemen Kesadaran Diri</div>
                    <div><strong>Sub Unit:</strong> Pendapat Diri</div>
                  </div>
                </div>

                <div style={{ width: '100%', marginTop: '15px' }}>
                  <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%' }}>
                    ▶ Mulai Belajar
                  </button>
                </div>
              </div>

              <div className="cover-image-column">
                <div className="cover-illustration-container">
                  <img
                    src={coverImg}
                    alt="Rani membawa buku"
                    className="cover-image"
                  />
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  color: '#7A624E',
                  fontStyle: 'italic',
                  textAlign: 'center',
                  marginTop: '4px'
                }}>
                  🤖 *Setiap gambar dan ilustrasi dalam aplikasi ini dibuat menggunakan teknologi Kecerdasan Buatan (Generative AI).
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '40px',
              fontSize: '0.75rem',
              color: '#7A624E',
              fontStyle: 'italic',
              textAlign: 'center',
              width: '100%',
              borderTop: '1px dashed #4A3728',
              paddingTop: '12px'
            }}>

            </div>
          </div>
        );

      case 1: // Sapaan dan Tujuan Pembelajaran (NEW)
        return <SapaanTujuan />;

      case 2: // Pemantik (Warm-Up Poll)
        return (
          <div className="poll-screen" style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <h2 className="text-center mb-3" style={{ fontSize: '1.4rem' }}>Yuk, Berikan Pendapatmu!</h2>
            <div className="poll-image-column" style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
              <div className="cover-illustration-container mb-3" style={{ height: '180px', width: '100%', maxWidth: '100%' }}>
                <img src={pemantikImg} alt="Remaja dengan gawai" className="cover-image" />
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: '#7A624E',
                fontStyle: 'italic',
                textAlign: 'center',
                marginTop: '-4px',
                marginBottom: '10px'
              }}>

              </div>
            </div>

            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '15px', color: '#4A3728' }}>
              "Menurutmu, gawai (smartphone/tablet) itu lebih banyak membantu belajar atau hanya sekadar hiburan saja?"
            </p>

            <div className="poll-options">
              {['Membantu Belajar', 'Hiburan', 'Keduanya'].map((opt) => (
                <button
                  key={opt}
                  className={`poll-option-btn ${pollAnswer === opt ? 'selected' : ''}`}
                  onClick={() => selectPoll(opt)}
                  disabled={pollAnswer !== null}
                >
                  <span>{opt}</span>
                  <span>{pollAnswer === opt ? '✅' : '○'}</span>
                </button>
              ))}
            </div>

            {pollAnswer && (
              <div className="chart-container" style={{ animation: 'slideUp 0.3s ease-out' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#4A3728' }}>Hasil Polling Siswa Paket B:</p>

                <div className="chart-bar-row">
                  <div className="chart-bar-labels">
                    <span>Membantu Belajar</span>
                    <span>35%</span>
                  </div>
                  <div className="chart-bar-bg">
                    <div className="chart-bar-fill" style={{ width: '35%' }} />
                  </div>
                </div>

                <div className="chart-bar-row">
                  <div className="chart-bar-labels">
                    <span>Hiburan</span>
                    <span>15%</span>
                  </div>
                  <div className="chart-bar-bg">
                    <div className="chart-bar-fill" style={{ width: '15%' }} />
                  </div>
                </div>

                <div className="chart-bar-row">
                  <div className="chart-bar-labels">
                    <span>Keduanya</span>
                    <span>50%</span>
                  </div>
                  <div className="chart-bar-bg">
                    <div className="chart-bar-fill selected-fill" style={{ width: '50%' }} />
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#7A624E', marginTop: '6px' }}>
                  Hebat! Pendapatmu telah dicatat. Perbedaan pendapat adalah hal wajar. Mari lihat kisah Rani selanjutnya!
                </p>
              </div>
            )}
          </div>
        );

      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8: // Story pages 3-8 (indexes 3 to 8)
        const storyData = storyPagesData[pageIndex - 3];
        return (
          <StoryPage
            pageData={storyData}
            reflectionValue={storyReflections[storyData.id]}
            onReflectionChange={(id, val) => setStoryReflections(prev => ({ ...prev, [id]: val }))}
          />
        );

      case 9: // Refleksi (Halaman 9)
        return (
          <Refleksi
            answers={reflectionAnswers}
            onChange={(qId, val) => setReflectionAnswers(prev => ({ ...prev, [qId]: val }))}
          />
        );

      case 10: // Materi Inti (Halaman 10)
        return (
          <MateriInti
            answer={materiReflection}
            onChange={(val) => setMateriReflection(val)}
          />
        );

      case 11:
      case 12:
      case 13:
      case 14:
      case 15: // Quiz pages 11-15 (indexes 11 to 15)
        return (
          <KuisInteraktif
            questionIndex={pageIndex - 11}
            answeredState={quizAnswers}
            onAnswerSelect={handleQuizAnswer}
          />
        );

      case 16: // Game 1: Pasar Pendapat
        return (
          <GamePasarPendapat
            onScoreChange={addScore}
            onComplete={() => setGame1Done(true)}
          />
        );

      case 17: // Game 2: Pilih Pendapat Asli
        return (
          <GamePilihPendapatAsli
            onScoreChange={addScore}
            onComplete={() => setGame2Done(true)}
          />
        );

      case 18: // Game 3: Tangga Keberanian
        return (
          <GameTanggaKeberanian
            onComplete={() => setGame3Done(true)}
          />
        );

      case 19: // Penutup (Halaman 15/Penutup)
        return (
          <Penutup
            challengeValue={challengeAnswer}
            onChallengeChange={setChallengeAnswer}
            reflectionAnswers={reflectionAnswers}
            materiReflection={materiReflection}
            onRestart={handleRestart}
            onShowDeveloper={() => setPageIndex(20)}
          />
        );

      case 20: // Profil Pengembang
        return (
          <ProfilPengembang
            onBack={() => setPageIndex(19)}
            onMainMenu={handleRestart}
          />
        );

      default:
        return <div>Halaman tidak ditemukan</div>;
    }
  };

  // Determine if Next button should be enabled
  const isNextDisabled = () => {
    if (pageIndex === 2) {
      return pollAnswer === null; // must poll first
    }
    if (pageIndex >= 11 && pageIndex <= 15) {
      return quizAnswers[pageIndex - 11] === undefined; // must answer quiz first
    }
    if (pageIndex === 16) {
      return !game1Done; // must complete game 1
    }
    if (pageIndex === 17) {
      return !game2Done; // must complete game 2
    }
    if (pageIndex === 18) {
      return !game3Done; // must complete game 3
    }
    if (pageIndex === 19) {
      return true; // no next page from closing screen
    }
    return false;
  };

  return (
    <div className="app-container">
      {/* Header with Title and Progress */}
      <header className="app-header">
        <div className="header-top">
          <span className="app-title">Suara Hati Rani</span>
          <div className="score-badge">
            <Award size={14} color="#FF6F3C" fill="#FF6F3C" />
            <span>Skor: {totalScore}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-track">
            <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
          </div>
          <span style={{ minWidth: '40px', textAlign: 'right' }}>
            {pageIndex === 20 ? "Profil" : isMainFlow ? `${pageIndex + 1}/${mainFlowPages}` : "Game Hub"}
          </span>
        </div>
      </header>

      {/* Main Screen Content */}
      <main className="app-content">
        {renderPageContent()}
      </main>

      {/* Footer Navigation Bar */}
      {pageIndex > 0 && pageIndex !== 19 && pageIndex !== 20 && (
        <footer className="app-footer">
          <button className="btn btn-secondary" onClick={handleBack} disabled={pageIndex === 0}>
            <ArrowLeft size={16} /> Sebelumnya
          </button>

          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={isNextDisabled()}
          >
            Selanjutnya <ArrowRight size={16} />
          </button>
        </footer>
      )}
    </div>
  );
}
