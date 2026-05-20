import React from 'react';
import placeholderImage from '../../assets/images/bg/med2n.png';
import moss9 from '../../assets/images/bg/moss9.png';

import ben1 from '../../assets/images/bg/ben1.jpg';



const SeaMossSupplement = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '64px 16px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flex: '1 1 400px',
          minWidth: '300px',
          paddingTop: '32px'
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '8px'
          }}>
            Natural Supplement
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#22C55E',
            marginBottom: '16px'
          }}></div>
          <p style={{
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '16px',
            fontSize: '16px'
          }}>
            Irish Sea Moss has long been used as a supplement that abates and fights symptoms of flu and cold. Being rich in a host of essential minerals like zinc, potassium, magnesium, manganese and iron, apart from Vitamins B and C, it boosts body immunity.
          </p>
          <p style={{
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '16px',
            fontSize: '16px'
          }}>
            The seaweed is invaluable with its natural chemical composition that contains potassium chloride. This compound is a vital element that augments dissolving catarrhs responsible for chest congestions.
          </p>
          <p style={{
            color: '#666',
            lineHeight: '1.6',
            fontSize: '16px'
          }}>
            Sea Moss is thus a natural cold relief provider and a safe solution that people across the globe prefer to use over conventional over-the-counter cold and cough remedies.
          </p>
        </div>

        <div style={{
          flex: '1 1 500px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <img
            src={moss9}
            alt="Supplement Product"
            style={{
              width: '100%',
              maxWidth: '680px',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SeaMossSupplement;