import React from 'react';
import { Layout } from '../components/common/Layout/Layout';
import bannerImage from '../assets/images/bg/irish-moss-banner.jpg';
import essentialOilsImage from '../assets/knowMore/maximumcardio4u_git-webver2.jpg';

function EssentialOilsInfo() {
  return (
    <Layout>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        {/* Banner Section */}
        <div style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'clamp(200px, 40vw, 300px)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 'clamp(20px, 5vw, 40px)',
          position: 'relative'
        }}>
          <span style={{
            color: 'white',
            fontSize: 'clamp(32px, 8vw, 48px)',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>Essential Oils</span>
        </div>

        {/* Content Section */}
        <div style={{ width: '100%' ,marginTop: '30px'}}>
          <img
            src={essentialOilsImage}
            alt="Essential Oils Info"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default EssentialOilsInfo;
