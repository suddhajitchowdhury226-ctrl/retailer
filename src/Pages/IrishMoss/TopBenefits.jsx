import React from 'react';
import UsingIrishMoss from './UsingIrishMoss';
import placeholderImage from '../../assets/images/bg/ProductImg1.jpg';
import ben1 from '../../assets/images/bg/ben1.jpg';
import ben2 from '../../assets/images/bg/ben2.jpg';

import ben3 from '../../assets/images/bg/ben3.jpg';

import ben5 from '../../assets/images/bg/ben5.jpg';

import ben6 from '../../assets/images/bg/ben6.jpg';

import ben7 from '../../assets/images/bg/ben7.jpg';
import ben8 from '../../assets/images/bg/ben8.jpg';

import ben9 from '../../assets/images/bg/ben9.jpg';

import ben10 from '../../assets/images/bg/ben10.jpg';




const TopBenefits = () => {
  return (
    <section style={{
      backgroundColor: 'white',
      padding: '64px 16px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 6vw, 48px)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
          color: '#F48B1F'
        }}>
          Top Benefits of Irish Sea Moss
        </h2>

        <div style={{
          width: '256px',
          height: '4px',
          margin: '0 auto 48px',
          backgroundColor: '#76A13D'
        }}></div>

        {/* Benefit 1: Image left, text right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben1}
              alt="Improves Thyroid Function"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>1. Improves Thyroid Function</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Studies have shown that Irish Moss is a potent Thyroid Function Stimulator. It
              enhances TSH or Thyroid Stimulating Hormone that is released from the Pituitary.
              TSH is extremely important as it acts on the Thyroid Gland directly and affects the
              synthesis and release of other thyroid hormones. Sea Moss can thus play an effective
              role in managing a range of thyroid related conditions.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              This weed is also rich in selenium and iodine, both of which play critical roles in
              synthesis of Thyroid Hormones. These elements are precursors that stimulate and
              release TSH.
            </p>
          </div>
        </div>
        
        {/* Benefit 2: Text left, image right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>2. Manages Joint Pain</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Sea Moss is a rich repertoire of anti-inflammatory agents and has antibacterial
              properties too. As such they are very effective in treating joint pains. The Moss
              contains natural potassium bromide and potassium iodide that calm the nerves in the
              joints and provide relief from pain.
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben2}
              alt="Manages Joint Pain"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Benefit 3: Image left, text right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben3}
              alt="Ups Metabolism"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>3. Ups Metabolism</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Thyroid-regulating hormones are the key metabolism regulators of the body. Irish Sea
              Moss is known to stimulate thyroid function and as a result boost body metabolism.
              The iodine content of the weed triggers thyroid hormone production and boosts
              thyroid gland functioning which in turn have a direct bearing on body metabolism.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Moreover, the purplish red algae have a high iron content which is important for
              oxygen transportation in the body. The iron helps meet the body's need of iron and
              effectively transports oxygen to the tissues and muscles through the body and
              naturally ups metabolism.
            </p>
          </div>
        </div>

        {/* Benefit 4: Text left, image right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>4. Boost Immune System</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Irish Moss is rich in Bioactive compounds having antimicrobial and antiviral effects.
              Sulfated Polysaccharides are among the most important of such compounds present in
              Irish Moss that positively trigger the immune system.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              The weed influences gene-related immune response, immunity that is cell mediated and
              humoral immunity. Being rich in Iron increases hemoglobin count in cells across the
              body and eases oxygen supply to cells and tissues.
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben1}
              alt="Boost Immune System"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Benefit 5: Image left, text right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben1}
              alt="Improves Heart Health"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>5. Improves Heart Health</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Heart-related issues mostly arise from poor blood flow in the cardiovascular system.
              The high iron content of Irish Moss improves body iron content and smoothens oxygen
              supply reducing chances of Angina. Antioxidants present in it reduces oxidative
              destruction of cells and tissues by free body radicals.
            </p>
          </div>
        </div>
        
        {/* Benefit 6: Text left, image right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>6. Helps in Weight Management</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Eating Sea Moss gives the body required nutrients and at the same time it helps reduce
              appetite. The result is reduced food intake without suffering any ill effects of low
              food intake. Sea Moss provides a nutrient-rich supplement that supports satiety and
              healthy weight management when paired with a balanced diet.
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben5}
              alt="Helps in Weight Management"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Benefit 7: Image left, text right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben6}
              alt="Healthy Diet"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>7. Healthy Diet</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              The human body needs many essential minerals and Irish Sea Weed contains a large
              portion of them. It is an excellent source of vitamins, minerals, proteins and
              fibres, making it a great food supplement. This nutrient-rich moss supports overall
              physical and mental health when included as part of a healthy diet.
            </p>
          </div>
        </div>

        {/* Benefit 8: Text left, image right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>8. Improves Overall Mental Health</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Given the dense quantity of potassium present in Irish Moss, it plays a significant
              role in providing the body with overall mental health support. Regular intake has
              been associated with improved mood and reduced symptoms of stress and anxiety in
              some studies.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Sea Moss's nutrient profile supports brain function and may help maintain cognitive
              wellbeing when included as part of a balanced diet.
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben7}
              alt="Improves Overall Mental Health"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Benefit 9: Image left, text right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben8}
              alt="Natural Decongestant"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>9. Natural Decongestant</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              A high percentage of potassium chloride in Irish Sea Moss makes it effective in
              treating conditions like cough and congestion. Potassium chloride helps break down
              mucus on membranes and can relieve irritation, supporting easier breathing during
              colds and sinus issues.
            </p>
          </div>
        </div>

        {/* Benefit 10: Text left, image right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px'
        }}>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>10. Strengthens Digestive System</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              marginBottom: '16px',
              fontSize: '16px'
            }}>
              Fiber-rich foods are ideal for the gut system and Irish Sea Moss is an excellent
              candidate. The seaweed works as a mild laxative and helps manage inflammatory
              disorders of the gut like gastritis, heartburn, nausea and indigestion.
            </p>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              It helps both stimulate and soothe the digestive system, supporting overall gut
              health when used as part of a balanced diet.
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben9}
              alt="Strengthens Digestive System"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Benefit 11: Image left, text right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src={ben10}
              alt="Improves Sexual Health"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '16px'
            }}>11. Improves Sexual Health</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              fontSize: '16px'
            }}>
              Minerals such as zinc are crucial for maintaining a healthy sexual life and a good
              reproductive system. Sea Moss red algae, with its high zinc content and a host of
              other minerals, can help reduce dryness in females and support a healthier libido.
            </p>
          </div>
        </div>
      </div>

      <UsingIrishMoss />
    </section>
  );
};

export default TopBenefits;