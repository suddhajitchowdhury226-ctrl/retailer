import React from 'react';
import placeholderImage from '../../assets/images/bg/med5n.png';
import moss13 from '../../assets/images/bg/moss13.png';

const BuyOriginalIrishSeaMoss = () => {
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
            marginBottom: '24px'
          }}>
            Buy only Original Irish Sea Moss
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
            Studies have shown that the benefits that naturally grown Irish Sea Moss give are widely absent from those that are grown in artificial brine land. The composition of the weed is seen to have changed thus robbing the artificially grown seaweed of the goodness that the natural algae have.
          </p>
        </div>

        <div style={{
          flex: '1 1 500px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <img
            src={moss13}
            alt="Buy only Original Irish Sea Moss"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '48px auto 0',
        padding: '0 24px'
      }}>
        <p style={{
          textAlign: 'center',
          fontSize: '14px',
          color: '#666',
          lineHeight: '1.6'
        }}>In addition to the full complement of trace minerals found in all seaweeds, Irish Moss contains unique anti-viral properties. It has been used internally to treat coughs and chest infections, and topically to relieve shingles and other skin conditions.</p>
        <p style={{
          textAlign: 'center',
          fontWeight: '600',
          textTransform: 'uppercase',
          fontSize: '14px',
          marginTop: '24px',
          color: '#333'
        }}>
          MAY CONTAIN TRACE AMOUNTS OF SHELLFISH. THIS PRODUCT IS NOT RECOMMENDED FOR INDIVIDUALS WHO ARE HIGHLY SENSITIVE/ALLERGIC TO SHELLFISH.
        </p>
      </div>
    </div>
  );
};

export default BuyOriginalIrishSeaMoss;