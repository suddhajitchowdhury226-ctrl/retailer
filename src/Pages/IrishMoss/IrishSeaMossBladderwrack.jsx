import React from 'react';
import placeholderImage from '../../assets/images/bg/med4n.png';
import moss11 from '../../assets/images/bg/moss12.png';
import moss13 from '../../assets/images/bg/moss13.png';

const IrishSeaMossBladderwrack = () => {
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
          flex: '1 1 500px',
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
          <img
            src={moss11}
            alt="Irish Sea Moss & Bladderwrack"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

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
            Irish Sea Moss & Bladderwrack Give Best Effects
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
            Bladderwrack, like Irish Sea Moss is another seaweed and is known for its immense
            benefits on human health. One of the prominent benefits of this seaweed is its role
            in managing thyroid-related disorders arising due to iodine deficiency.
          </p>
          <p style={{
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '24px',
            fontSize: '16px'
          }}>
            A combination of Irish Sea Moss and Bladderwrack proves to be most beneficial as
            they work in synergy. It has been observed that the effect of the two weeds when
            taken together is far greater than when they are taken separately.
          </p>
          <p style={{
            color: '#666',
            lineHeight: '1.6',
            fontSize: '16px'
          }}>
            The combination is ideal for treating gastrointestinal problems such as bloating,
            acidity and gastritis. Together, they also cleanse blood and help counter
            cardiovascular disorders with much efficacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IrishSeaMossBladderwrack;