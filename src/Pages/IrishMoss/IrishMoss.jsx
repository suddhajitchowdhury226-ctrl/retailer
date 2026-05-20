import React from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import SeaMossSupplement from './SeaMossSupplement';
import TopBenefits from './TopBenefits';
import bannerImage from '../../assets/images/bg/irish-moss-banner.jpg';
import placeholderImage from '../../assets/images/bg/med1-new.png';

import moss1 from '../../assets/images/bg/moss1.png';

import moss2 from '../../assets/images/bg/moss2.png';
import moss3 from '../../assets/images/bg/moss3.png';

import moss4 from '../../assets/images/bg/moss4.png';

import moss5 from '../../assets/images/bg/moss5.png';

import moss6 from '../../assets/images/bg/moss6.png';

import moss7 from '../../assets/images/bg/moss7.png';
import moss8 from '../../assets/images/bg/moss8.png';

import moss9 from '../../assets/images/bg/moss9.png';









const IrishMoss = () => {
  return (
    <Layout>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Banner Section */}
      <div style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.4), transparent)'
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          width: '100%',
          position: 'relative',
          zIndex: 10
        }}>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(48px, 8vw, 72px)',
            fontWeight: 'bold',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
          }}>
            Irish Moss
          </h1>
        </div>
      </div>

      {/* Irish Moss Introduction Section */}
      <div style={{
        backgroundColor: 'white',
        position: 'relative',
        marginTop: '-128px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          position: 'relative',
          zIndex: 10,
          padding: '16px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: '1 1 400px',
            minWidth: '300px',
            paddingTop: '64px'
          }}>
            <h2 style={{
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '8px'
            }}>
              Irish Moss
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#22C55E',
              marginBottom: '16px'
            }}></div>
            <h3 style={{
              fontSize: '20px',
              color: '#F97316',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              Chondrus Crispus
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Irish Moss is known to improve Thyroid functions, aid metabolism and boost the overall immune system.
            </p>
          </div>
          
          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img 
              src={moss1} 
              alt="Irish Moss" 
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>

      {/* Irish Sea Moss Section */}
      <div style={{
        backgroundColor: '#F9FAFB',
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
              src={moss2} 
              alt="Irish Sea Moss" 
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
              Irish Sea Moss
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#22C55E',
              marginBottom: '16px'
            }}></div>
            <h3 style={{
              fontSize: '18px',
              color: '#F97316',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              Is a dried leaf-like form of a northern seaweed, that is, Chondrus Crispus also known as Pearl Moss and Carrageen.
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Grows naturally in abundance in Rocky places along the Atlantic coasts of North America and Europe.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              As a fresh plant it is soft and cartilaginous ranging from a greenish-yellow to purplish-brown color.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              When washed and dried, it takes on a translucent and horn-like form that is yellowish in color.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Irish Moss is a mucilaginous body by 55% parts, 10% albuminoids and 15% minerals rich in sulphur and iodine. Placed in water, it gives the odor of the sea and forms a heavy jelly when boiled. This jelly is used as a thickener and fining of beer.
            </p>
          </div>
        </div>
      </div>

      {/* Can Sea Moss be Eaten Raw Section */}
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
              Can Sea Moss be Eaten Raw?
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#22C55E',
              marginBottom: '16px'
            }}></div>
            <h3 style={{
              fontSize: '18px',
              color: '#F97316',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              Sea Moss is good to be consumed as health drink. It can also be used for gravies, cakes and ice-creams, in shakes and as a thickening agent.
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              As a natural and wholesome item, you can also eat it raw. The Moss is nature's gift to humankind as an excellent source of minerals.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              At Ray's we sell only naturally grown Sea Moss. The plants are spread over large areas for natural sun-drying without adding any fertilizers or chemicals. We use only natural sunlight to preserve the goodness of nature coming from the sea shore.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              We source all Sea Moss exclusively from the seashore where it is carefully cultivated in natural environments making it completely safe for you to consume it raw or any other form that you prefer.
            </p>
          </div>

          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <img 
              src={moss3} 
              alt="Can Sea Moss be Eaten Raw" 
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>

      {/* Food Additive Section */}
      <div style={{
        backgroundColor: '#F9FAFB',
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
              src={moss4} 
              alt="Food Additive" 
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
              Food Additive
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
              Raw Sea Moss can be used in food like pudding, smoothies, cream pie or whipped cream and salad dressing. In fact, it helps give any liquid a stable form. Whereas gelatin is an animal-based protein, our Irish Moss is totally a plant derivative.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              It's polysaccharide is a natural sugar form when blended in liquid gives the semi-liquid form. Irish Moss is rich in carrageen which is used by the food industry to make items like ice-cream, jelly and more.
            </p>
          </div>
        </div>
      </div>

      {/* Health Food Section */}
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
              Health Food
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
              Irish Moss or Sea Moss is a powerhouse nutrients yielding abundant goodness to health. It acts as a soothing aid to the stomach providing relief from heartburn, dyspepsia and gastritis. It works wonders for conditions like indigestion and constipation and helps heal peptic and duodenal ulcer.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Natural Irish Moss is also a repertoire of antiviral and antibacterial activities and helps sooth skin conditions like sun burns, chapped skin, dermatitis, eczema and psoriasis.
            </p>
          </div>

          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <img 
              src={moss5} 
              alt="Health Food" 
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>

      {/* Minerals & Vitamins Section */}
      <div style={{
        backgroundColor: '#F9FAFB',
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
              src={moss6} 
              alt="Minerals & Vitamins" 
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
              Minerals & Vitamins
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
              Tasteless when eaten raw, Irish Moss is a loaded with natural minerals essential for a healthy human body. It is a rare plant that has sulphur amino acids, compounds that are restricted to animal protein only. Other minerals present are iodine, calcium, magnesium, iron, phosphorous, potassium manganese, zinc and selenium.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              It also contains, beta-carotene, vitamins, B and C.
            </p>
          </div>
        </div>
      </div>

      {/* Healthy Natural Supplement Section */}
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
              Healthy Natural Supplement
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
              Sea Moss is thus a natural cold relief provider and a safe solution that people across the globe prefer to use over conventional over-the-counter cold and cough remedies. The weed is also known to be effective in other lungs conditions like pneumonia and tuberculosis acting as an anti-inflammatory and demulcent agent.
            </p>
          </div>

          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <img 
              src={moss7} 
              alt="Healthy Natural Supplement" 
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>

      {/* Fights Infections Section */}
      <div style={{
        backgroundColor: '#F9FAFB',
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
              src={moss8} 
              alt="Fights Infections" 
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
              Fights Infections
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
              Apart from boosting the body's natural immune system and acting as a remedy to cold, cough and flu, Irish Moss is also a strong antiviral and antimicrobial agent.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              It is extremely effective in fighting a wide range of infections that are known to plague the body. Sea Moss is known to alleviate conditions like bronchitis and pneumonia apart from sore throat arising out of bacterial and viral infections.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              One of the main uses of Irish Moss is as a potent treatment to heal thyroid related problems. The Moss contains a significant amount of Iodine which is extremely important for optimal functioning of the thyroid gland. Iodine in the Moss stimulates the thyroid gland to its optimal level thus helping the body fight against a host of diseases.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Germs tend to thrive on external surface areas with rich blood supply. As the blood circulates through the body, it passes through the thyroid gland where iodine and its antimicrobial properties cleanse it of the germs, killing weak ones and weakening the others.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Iodine present in Sea Moss also helps relieve stress and tension and promotes a general sense of well-being physically and mentally.
            </p>
          </div>
        </div>
      </div>

        <SeaMossSupplement />
        <TopBenefits />
      </div>
    </Layout>
  );
};

export default IrishMoss;