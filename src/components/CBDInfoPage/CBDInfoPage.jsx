import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../../assets/images/bg/irish-moss-banner.jpg';
import cbdImage from '../../assets/images/bg/med1-new.png';
import skinImage from '../../assets/images/bg/med2n.png';
import conditionImage from '../../assets/images/bg/d1.jpg';
import vidImage from '../../assets/images/bg/vid-img.png';
import brainImage from '../../assets/images/bg/med3n.png';
import heartImage from '../../assets/images/bg/med4n.png';
import med5Image from '../../assets/images/bg/med5n.png';
import med6Image from '../../assets/images/bg/med6n.png';
import med7Image from '../../assets/images/bg/med7n.png';
import med8Image from '../../assets/images/bg/med8n.png';

export default function CBDInfoPage() {
  const navigate = useNavigate();
  
  const conditions = [
    { name: 'ACNE ROSACEA', img: conditionImage },
    { name: 'DERMATITIS', img: conditionImage },
    { name: 'PSORIASIS', img: conditionImage },
    { name: 'ECZEMA', img: conditionImage },
    { name: 'VARICOSE ECZEMA', img: conditionImage },
    { name: 'LICHEN PLANUS', img: conditionImage }
  ];

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#fff'
    }}>
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
        }}>CBD</span>
      </div>

      {/* CBD Benefits Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '64px 16px',
        marginTop: '-80px'
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
            }}>Hemp oil benefits</h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7CB342',
              marginBottom: '16px'
            }}></div>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              CBD (Cannabidiol) is a naturally occurring compound found in the cannabis plant. Unlike THC, CBD is non-psychoactive, meaning it won't get you high.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              CBD oil is extracted from hemp plants and has gained popularity for its potential therapeutic benefits. Research suggests CBD may help with anxiety, pain management, and sleep disorders.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              CBD has been noted for its anti-inflammatory properties and potential to support overall wellness. Many users report improved sleep quality and reduced stress levels.
            </p>
          </div>
          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <img 
              src={cbdImage} 
              alt="CBD Products" 
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

      {/* Hemp Oil for Skin Diseases Section */}
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
              src={skinImage} 
              alt="Hemp Oil for Skin" 
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
            }}>Hemp Oil for Skin Diseases</h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7CB342',
              marginBottom: '16px'
            }}></div>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Hemp Oil is rich in fatty acids and vitamins that are ideal nourish skin and keep it healthy. Using this oil helps keep skin radiant by protecting it from oxidation that causes its aging. It is also extremely useful to prevent outbreaks on skin and treat inflammations.
            </p>
            <p style={{
              color: '#FFA500',
              lineHeight: '1.6',
              marginBottom: '25px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Hemp Oil can be used to treat a range of skin conditions like:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginTop: '20px'
            }}>
              {conditions.map((condition, index) => (
                <motion.div 
                  key={index} 
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2 + index * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <motion.div 
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      border: '3px solid #FFA500',
                      backgroundImage: `url(${condition.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      marginBottom: '10px',
                      cursor: 'pointer'
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 8px 20px rgba(255, 165, 0, 0.3)'
                    }}
                  />
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#333',
                    textAlign: 'center'
                  }}>
                    {condition.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hemp Oil & Brain Health Section */}
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
            }}>Hemp Oil & Brain Health</h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7CB342',
              marginBottom: '16px'
            }}></div>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Fatty acids present in Hemp Oil are known to be good for brain health. It is especially beneficial to those who have undergone brain operation by protecting the brain. Studies conducted have proved that Hemp Oil is effective in protecting the brain against inflammation.
            </p>
            <p style={{
              color: '#FFA500',
              lineHeight: '1.6',
              marginBottom: '20px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Everything you need to know about CBD oil
            </p>
            <div 
              onClick={() => navigate('/maximum-cardio-video')}
              style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              height: '300px',
              border: '4px solid #7CB342',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundImage: `url(${vidImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(124, 179, 66, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #7CB342'
              }}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderLeft: '15px solid white',
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  marginLeft: '5px'
                }}></div>
              </div>
            </div>
          </div>
          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <img 
              src={brainImage} 
              alt="Hemp Oil Brain Health" 
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

      {/* Hemp Oil & Heart Health Section */}
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
              src={heartImage} 
              alt="Hemp Oil Heart Health" 
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
            }}>Hemp Oil & Heart Health</h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7CB342',
              marginBottom: '16px'
            }}></div>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Hemp Oil contains omega-3 and omega-6 fatty acids in the ideal ratio for heart health. These essential fatty acids help reduce cholesterol levels and support cardiovascular function.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Regular consumption of Hemp Oil may help lower blood pressure, reduce inflammation in the cardiovascular system, and improve overall heart health.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              The anti-inflammatory properties of Hemp Oil can help prevent arterial blockage and support healthy blood circulation throughout the body.
            </p>
          </div>
        </div>
      </div>


      {/* Hemp Oil & CBD Section */}
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
            }}>Hemp Oil & CBD</h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7CB342',
              marginBottom: '16px'
            }}></div>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              The full spectrum of Hemp Oil that includes CBD is often richer in nutrient values. But when the concentration of the Hemp Seeds is high, it offers equivalent goodness that nourishes good health and protects body
            </p>
          </div>
          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <img 
              src={med5Image} 
              alt="Hemp Oil & CBD" 
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


      {/* Hemp Oil & Pain Relief Section */}
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
              src={med6Image} 
              alt="Hemp Oil Pain Relief" 
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
            }}>Hemp Oil & Pain Relief</h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7CB342',
              marginBottom: '16px'
            }}></div>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Hemp Oil is known to be a natural analgesic agent and is especially effective in cases of inflammation. Studies show that Hemp Oil is effective against a range of body aches and pains. Make sure that you buy only high quality and pure Hemp Oil for getting its true analgesic benefits.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Most studies on its analgesic effects have been carried out on mice and results on humans are still awaited.
            </p>
          </div>
        </div>
      </div>

      {/* Hemp Oil & Acne Treatment Section */}
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
            }}>Hemp Oil & Acne Treatment</h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7CB342',
              marginBottom: '16px'
            }}></div>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '20px',
              fontSize: '16px'
            }}>
              Fatty acids in Hemp Oil are effective in treating acne and other inflammatory conditions resulting in acne.
            </p>
            <div 
              onClick={() => navigate('/maximum-cardio-video')}
              style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              height: '300px',
              border: '4px solid #7CB342',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundImage: `url(${vidImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(124, 179, 66, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #7CB342'
              }}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderLeft: '15px solid white',
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  marginLeft: '5px'
                }}></div>
              </div>
            </div>
          </div>
          <div style={{
            flex: '1 1 500px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <img 
              src={med7Image} 
              alt="Hemp Oil Acne Treatment" 
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

      
      {/* Hemp Oil & Muscle Pain Section */}
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
              src={med8Image} 
              alt="Hemp Oil Muscle Pain" 
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
            }}>Hemp Oil & Muscle Pain</h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7CB342',
              marginBottom: '16px'
            }}></div>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Hemp Oil along with CBD is effective in relaxing tense muscles and alleviates stress in them. Its anti-inflammatory properties work on stressed muscles, ease tension in them and help them recover faster. Massaging Hemp Oil on painful and stressed muscles gives a sense of relaxation and brings a feeling of well-being almost instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
