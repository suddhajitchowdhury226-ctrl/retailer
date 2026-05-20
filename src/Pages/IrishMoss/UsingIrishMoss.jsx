import React from 'react';
import IrishSeaMossBladderwrack from './IrishSeaMossBladderwrack';
import BuyOriginalIrishSeaMoss from './BuyOriginalIrishSeaMoss';
import placeholderImage from '../../assets/images/bg/med3n.png';
import med4nn from '../../assets/images/bg/moss10.png';
import moss11 from '../../assets/images/bg/moss12.png';


const UsingIrishMoss = () => {
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
            Using Irish Moss as Supplement
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
            marginBottom: '24px',
            fontSize: '16px'
          }}>
            A lot of people do enjoy the goodness of Irish Sea Moss by just adding it to their
            salads or smoothies, but there are others that don't like its sea-like smell. Most
            people prefer to take in the goodness of Sea Moss in the form of supplements.
          </p>
          <p style={{
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '24px',
            fontSize: '16px'
          }}>
            The powdered form of dried Sea Moss is available as capsules or as tinctures. Organic
            Irish Moss tincture is one such that is easy to take in any way you prefer.
          </p>
          <p style={{
            color: '#666',
            lineHeight: '1.6',
            fontSize: '16px'
          }}>
            It's advisable to read manufacturer's instructions carefully before using any form of
            Irish Sea Moss supplement.
          </p>
        </div>

        <div style={{
          flex: '1 1 500px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <img
            src={med4nn}
            alt="Using Irish Moss as Supplement"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      <IrishSeaMossBladderwrack />
      <BuyOriginalIrishSeaMoss />
    </div>
  );
};

export default UsingIrishMoss;