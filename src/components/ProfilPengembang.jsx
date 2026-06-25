import React from 'react';
import { Home, ArrowLeft, Mail, Briefcase, User } from 'lucide-react';
import profilImg from '../assets/Profil.webp';

export default function ProfilPengembang({ onBack, onMainMenu }) {
  return (
    <div className="reflection-container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Top Header Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        borderBottom: '4px solid #4A3728',
        paddingBottom: '12px'
      }}>
        <h2 style={{ fontSize: '1.8rem', color: '#FF6F3C', margin: 0 }}>👤 Profil Pengembang</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            className="btn btn-secondary"
            onClick={onBack}
            style={{
              padding: '6px 12px',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} /> Kembali
          </button>
          <button
            className="btn btn-primary"
            onClick={onMainMenu}
            style={{
              padding: '6px 12px',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              backgroundColor: '#A8D8A8',
              color: '#4A3728'
            }}
          >
            <Home size={16} /> Menu Utama
          </button>
        </div>
      </div>

      {/* Main Profile Card */}
      <div
        className="comic-card"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '24px',
          padding: '24px',
          backgroundColor: '#FFF',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: '0 auto',
          maxWidth: '800px'
        }}
      >
        {/* Left Side: Photo */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={profilImg}
            alt="Foto Pengembang"
            style={{
              width: '180px',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '12px',
              border: '4px solid #4A3728',
              boxShadow: '6px 6px 0px #4A3728',
              backgroundColor: '#FFF'
            }}
          />
        </div>

        {/* Right Side: Details List */}
        <div style={{
          flex: '1',
          minWidth: '280px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%'
        }}>

          {/* Field: NAMA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}>
            <div style={{
              backgroundColor: '#A8D8A8',
              border: '2.5px solid #4A3728',
              boxShadow: '2px 2px 0px #4A3728',
              padding: '6px 12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              minWidth: '110px',
              textAlign: 'center',
              color: '#4A3728',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}>
              <User size={14} /> NAMA
            </div>
            <div style={{
              backgroundColor: '#FFF',
              border: '2.5px solid #4A3728',
              boxShadow: '2px 2px 0px #4A3728',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#4A3728',
              flex: '1'
            }}>
              WAHYUNI, S.Pd. M.Pd
            </div>
          </div>

          {/* Field: UNIT KERJA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}>
            <div style={{
              backgroundColor: '#A8D8A8',
              border: '2.5px solid #4A3728',
              boxShadow: '2px 2px 0px #4A3728',
              padding: '6px 12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              minWidth: '110px',
              textAlign: 'center',
              color: '#4A3728',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}>
              <Briefcase size={14} /> UNIT KERJA
            </div>
            <div style={{
              backgroundColor: '#FFF',
              border: '2.5px solid #4A3728',
              boxShadow: '2px 2px 0px #4A3728',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: '#4A3728',
              fontWeight: '600',
              flex: '1'
            }}>
              SPNF SKB KOTA BUKITTINGGI
            </div>
          </div>

          {/* Field: EMAIL */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}>
            <div style={{
              backgroundColor: '#A8D8A8',
              border: '2.5px solid #4A3728',
              boxShadow: '2px 2px 0px #4A3728',
              padding: '6px 12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              minWidth: '110px',
              textAlign: 'center',
              color: '#4A3728',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}>
              <Mail size={14} /> EMAIL
            </div>
            <div style={{
              backgroundColor: '#FFF',
              border: '2.5px solid #4A3728',
              boxShadow: '2px 2px 0px #4A3728',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              flex: '1',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              <a href="mailto:ridhawahyuni9173@gmail.com" style={{ color: '#FF6F3C', textDecoration: 'underline', fontWeight: '600' }}>
                ridhawahyuni9173@gmail.com
              </a>
            </div>
          </div>

          {/* Field: MEDIA SOSIAL */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', flexWrap: 'nowrap' }}>
            <div style={{
              backgroundColor: '#A8D8A8',
              border: '2.5px solid #4A3728',
              boxShadow: '2px 2px 0px #4A3728',
              padding: '6px 12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              minWidth: '110px',
              textAlign: 'center',
              color: '#4A3728',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}>
              📱 MEDSOS
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              flex: '1'
            }}>
              <div style={{
                backgroundColor: '#FFF',
                border: '2.5px solid #4A3728',
                boxShadow: '2px 2px 0px #4A3728',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#4A3728'
              }}>
                <span style={{ fontSize: '1rem' }}>📸</span>
                <span><strong>Instagram:</strong> wahyuni ridha</span>
              </div>
              <div style={{
                backgroundColor: '#FFF',
                border: '2.5px solid #4A3728',
                boxShadow: '2px 2px 0px #4A3728',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#4A3728'
              }}>
                <span style={{ fontSize: '1rem' }}>👥</span>
                <span><strong>Facebook:</strong> wahyuni ridha</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* AI Footnote */}
      <div style={{
        marginTop: '30px',
        fontSize: '0.75rem',
        color: '#7A624E',
        fontStyle: 'italic',
        textAlign: 'center'
      }}>

      </div>
    </div>
  );
}
