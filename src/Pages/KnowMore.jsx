import React from 'react';
import { Layout } from '../components/common/Layout/Layout';
import cardioImage from '../assets/knowMore/maximumcardio4u.jpg';

const KnowMore = () => {
  return (
    <Layout>
      <div style={{ width: '100%', minHeight: '100vh', marginTop: '30px' }}>
        <img
          src={cardioImage}
          alt="Maximum Cardio Info Background"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </Layout>
    
  );
};

export default KnowMore;