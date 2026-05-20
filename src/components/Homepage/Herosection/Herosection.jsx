




import React, { useEffect, useState } from "react";
import "./Herosection.scss";
import parse from "html-react-parser";
import { motion, AnimatePresence } from "framer-motion";

import HeroSliderImg1 from "../../../assets/images/bg/HeroSliderImg1.jpg";
import HeroSliderImg2 from "../../../assets/images/bg/HeroSliderImg2.jpg";
import HeroSliderImg3 from "../../../assets/images/bg/HeroSliderImg3.jpg";

import HeroSliderImg4 from "../../../assets/images/bg/Raygpt.jpeg";



const sliderData = [
  {
    image: HeroSliderImg4,
    title: `Create Your Own <span className="headingSpan1">Ray One</span> 
                  <span className="headingSpan2">System</span>`,
    smallInfo: `Build your personalized AI-powered store with Ray One. 
                  Streamline your business, enhance customer experience, 
                  and boost sales with intelligent automation. Start today!`,
    link: "https://rayonesystem.com",
    isExternal: true
  },
  {
    image: HeroSliderImg1,
    title: `Pure <span className="headingSpan1">Wellness</span> ,
                  <span className="headingSpan2">Naturally</span> Yours`,
    smallInfo: `Ray's Healthy Living offers organic supplements for your
                  family's health. Safe, natural, and affordable, our vitamins
                  boost vitality. Shop online or in-store today.`,
  },
  {
    image: HeroSliderImg2,
    title: `<span className="headingSpan1">Nature's </span> Best for Your
                  <span className="headingSpan2">Family</span>`,
    smallInfo: `Discover Ray's Healthy Living's organic supplements. Crafted
                  for safety and affordability, our natural vitamins enhance
                  family wellness. Shop online or at our stores now.`,
  },
  {
    image: HeroSliderImg3,
    title: `<span className="headingSpan1">Vitality </span> Starts with
                  <span className="headingSpan2">Nature</span>`,
    smallInfo: `Elevate health with Ray's Healthy Living's organic vitamins.
                  Safe, affordable, and natural, our supplements boost vitality.
                  Shop online or in-store today.`,
  },
];

const handleNext = (dataArray, setCurrentIndex) => {
  console.log("handleNext");
  setCurrentIndex((curr) => (curr === dataArray.length - 1 ? 0 : curr + 1));
};

export const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext(sliderData, setCurrentIndex);
    }, 8000);

    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <div className="Homepage__heroMainWrapper">
        <div className="Homepage__mainContainerWrapper">
          <div className="HP__heroSliderWrapper">
            {sliderData.map((cur, id) => (
              <motion.div
                animate={{
                  x: `-${currentIndex * 100}%`,
                  opacity: currentIndex === id ? [0, 1] : [1, 0],
                  scale: currentIndex === id ? [0.5, 1] : [1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  ease: "backInOut",
                  mass: 5,
                  type: "tween",
                  power: 5,
                }}
                key={id}
                className="mainSliderWrapper"
              >
                <div className="sliderImgWrapper">
                  <img src={cur.image} alt="wholesale-retailer.com" />
                </div>
                <div className="sliderContentWrapper">
                  <div className="contentWrapper">
                    <h2>{parse(cur.title)}</h2>
                    <p>{cur.smallInfo}</p>
                    {/* Regular View All button for non-Ray GPT slides */}
                    {id !== 0 && cur.link && (
                      <a
                        href={cur.link}
                        target={cur.isExternal ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="heroViewBTN"
                        aria-label="View all products in our store"
                      >
                        View All
                      </a>
                    )}
                  </div>

                  {/* Ray GPT Create Store Button - centered and prominent */}
                  <motion.div
                    className="createStore__centerWrapper"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{
                      opacity: currentIndex === id ? 1 : 0,
                      scale: currentIndex === id ? 1 : 0.5,
                      y: currentIndex === id ? 0 : 50
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.8,
                      ease: "backOut"
                    }}
                  >
                    <motion.a
                      href="https://rayonesystem.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="createStore__button"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 40px rgba(46, 196, 182, 0.6), 0 0 80px rgba(203, 243, 240, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="createStore__iconLarge"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19 7H22L20 19H4L2 7H5M7 7V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V7M7 7H17M7 7L8 12M17 7L16 12M10 11H14"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                          <circle cx="12" cy="12" r="1" fill="currentColor" />
                        </svg>
                      </motion.div>
                      <div className="createStore__textLarge">
                        <motion.span
                          className="createStore__mainTitle"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(46, 196, 182, 0.8)",
                              "0 0 20px rgba(46, 196, 182, 1)",
                              "0 0 10px rgba(46, 196, 182, 0.8)"
                            ]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >RayOneSystem — Create Your Own Successful Vitamin Store
                          {/* RayOneSystem — The Power Behind Every Successful Vitamin Store */}
                        </motion.span>
                        <span className="createStore__subTitle">RayOneSystem — The Power Behind Every Successful Vitamin Store</span>
                      </div>
                      <motion.div
                        className="createStore__glowLarge"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.3, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="createStore__pulseRing"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.8, 0, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    </motion.a>
                  </motion.div>

                  {/* Wholesaler Badge - only show for non-Ray GPT slides */}
                  {id !== 0 && (
                    <motion.div
                      className="wholesaler__badge my-[-2rem]"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{
                        opacity: currentIndex === id ? 1 : 0,
                        scale: currentIndex === id ? 1 : 0.8,
                        y: currentIndex === id ? 0 : 20
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "backOut"
                      }}
                    >
                      {/* ...existing badge content... */}
                      <motion.div
                        className="badge__icon"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3 7H21L19 19H5L3 7ZM3 7L2 3H1M16 11V13M8 11V13M7.5 3L9.5 7M16.5 3L14.5 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                      <div className="badge__content">
                        <motion.span
                          className="badge__title"
                          animate={{
                            x: [0, 2, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          Authorized
                        </motion.span>
                        <span className="badge__subtitle">Retail</span>
                      </div>
                      <motion.div
                        className="badge__glow"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="slider__indicatorWrapper" role="tablist" aria-label="Slide navigation">
          {sliderData.map((_, id) => (
            <motion.button
              type="button"
              role="tab"
              aria-label={`Go to slide ${id + 1}`}
              aria-selected={currentIndex === id}
              onClick={() => {
                setCurrentIndex(id);
              }}
              animate={{
                scale: currentIndex === id ? [0.8, 1.05] : [1.05, 0.8],
                opacity: currentIndex === id ? [0.8, 1] : [1, 0.8],
              }}
              transition={{
                duration: 1.5,
                ease: "backInOut",
                mass: 5,
                type: "tween",
                power: 5,
              }}
              key={`indicator-${id}`}
              className="sliderIndicator"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .Homepage__heroMainWrapper {
          height: 85vh;
          width: 100%;
          padding: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding-top:22px;
        }

        .Homepage__mainContainerWrapper {
          width: 97%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          scroll-behavior: smooth;
        }

        .HP__heroSliderWrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
        }

        .mainSliderWrapper {
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          position: relative;
        }

        .sliderImgWrapper {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          filter: brightness(0.5) grayscale(0.2);
        }

        .sliderImgWrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .sliderContentWrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .contentWrapper {
          width: 100%;
          height: 100%;
          padding: 40px 40px 120px 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 2rem;
        }

        .contentWrapper h2 {
          width: 90%;
          font-size: clamp(3rem, 8vw, 7rem);
          line-height: 1.1;
          font-family: var(--mainFont);
          color: var(--color-white);
          font-weight: 800;
        }

        .contentWrapper .headingSpan1 {
          color: var(--color-primary);
        }

        .contentWrapper .headingSpan2 {
          color: var(--color-seconday);
        }

        .contentWrapper p {
          width: 70%;
          font-size: clamp(1.1rem, 2.5vw, 2.2rem);
          line-height: 1.3;
          font-weight: 400;
          font-family: var(--paraFont);
          color: var(--color-white);
        }

        .heroViewBTN {
          position: absolute;
          bottom: 10%;
          right: 5%;
          height: 60px;
          width: 120px;
          padding: 12px;
          border: none;
          outline: none;
          border-radius: 50px;
          cursor: pointer;
          background: var(--color-primary);
          font-family: var(--mainFont);
          color: var(--color-white);
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }

        .heroViewBTN:hover {
          border: 1.5px solid var(--color-seconday);
          background: transparent;
          color: var(--color-seconday);
          transform: scale(1.1);
        }

        /* Create Store Button Styles - Left Bottom Position */
        .createStore__centerWrapper {
          position: absolute;
          bottom: 5%;
          left: 5%;
          z-index: 15;
        }

        .createStore__button {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #CBF3F0 0%, rgba(203, 243, 240, 0.95) 50%, #2EC4B6 100%);
          backdrop-filter: blur(15px);
          border: 2px solid #2EC4B6;
          border-radius: 50px;
          padding: 12px 20px;
          box-shadow: 
            0 0 20px rgba(46, 196, 182, 0.4),
            0 0 40px rgba(203, 243, 240, 0.3),
            0 8px 25px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .createStore__iconLarge {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #2EC4B6, #1a9b8e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 
            0 0 15px rgba(46, 196, 182, 0.5),
            inset 0 2px 8px rgba(255, 255, 255, 0.3);
        }

        .createStore__iconLarge svg {
          width: 18px;
          height: 18px;
        }

        .createStore__textLarge {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .createStore__mainTitle {
          font-size: 0.7rem;
          font-weight: 700;
          color: #333333;
          font-family: var(--mainFont);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }

        .createStore__subTitle {
          font-size: 0.7rem;
          font-weight: 500;
          color: #555555;
          font-family: var(--paraFont);
          text-transform: capitalize;
          letter-spacing: 0.3px;
        }

        .createStore__glowLarge {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: linear-gradient(135deg, #2EC4B6, #CBF3F0, #2EC4B6);
          border-radius: 50px;
          z-index: -1;
          filter: blur(10px);
        }

        .createStore__pulseRing {
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 2px solid #2EC4B6;
          border-radius: 50px;
          z-index: -2;
        }

        /* Wholesaler Badge Styles */
        .wholesaler__badge {
          position: absolute;
          bottom: 15%;
          right: 15%;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 12px 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        .badge__icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-seconday));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .badge__icon svg {
          width: 18px;
          height: 18px;
        }

        .badge__content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .badge__title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-primary);
          font-family: var(--mainFont);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .badge__subtitle {
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          font-family: var(--paraFont);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .badge__glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-seconday));
          border-radius: 50px;
          z-index: -1;
          filter: blur(8px);
        }

        .slider__indicatorWrapper {
          position: absolute;
          bottom: 2%;
          left: 0;
          width: 100%;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .sliderIndicator {
          width: 12px;
          height: 12px;
          background: var(--color-seconday);
          border-radius: 50%;
          cursor: pointer;
        }

 
       

        @media (max-width: 1024px) {
          .Homepage__heroMainWrapper {
            height: 70vh;
            padding: 10px;
          }

          .contentWrapper {
            width: 50%;
            padding: 30px;
            gap: 15px;
          }

          .contentWrapper h2 {
            font-size: 1rem !important;
          }

          .contentWrapper p {
            font-size: 0.7rem !important;
            line-height: 1rem !important;
            width: 140% !important;
            letter-spacing: 0.5px !important;
          }

          .heroViewBTN {
            height: 45px;
            width: 90px;
            font-size: 0.9rem;
            bottom: 8%;
            right: 4%;
          }

          .createStore__button {
            padding: 10px 16px;
            gap: 10px;
          }

          .createStore__iconLarge {
            width: 28px;
            height: 28px;
          }

          .createStore__iconLarge svg {
            width: 16px;
            height: 16px;
          }

          .createStore__mainTitle {
            font-size: 0.8rem;
          }

          .createStore__subTitle {
            font-size: 0.65rem;
          }

          .wholesaler__badge {
            bottom: 18%;
            right: 12%;
            padding: 10px 16px;
            gap: 10px;
          }

          .badge__icon {
            width: 28px;
            height: 28px;
          }

          .badge__icon svg {
            width: 16px;
            height: 16px;
          }

          .badge__title {
            font-size: 0.8rem;
          }

          .badge__subtitle {
            font-size: 0.65rem;
          }

          .slider__indicatorWrapper {
            gap: 8px;
          }

          .sliderIndicator {
            width: 10px;
            height: 10px;
          }
        }

        


        
      

        @media (max-width: 768px) {
          .Homepage__heroMainWrapper {
            height: 60vh;
            padding: 8px;
          }

          .Homepage__mainContainerWrapper {
            width: 100%;
            border-radius: 12px;
          }

          .contentWrapper {
            width: 90%;
            padding: 20px 20px 100px 20px;
            gap: 12px;
          }

          .contentWrapper h2 {
            font-size: 3.2rem;
            line-height: 1.3;
          }

          .contentWrapper p {
            font-size: 1.9rem !important;
            line-height: 1.4rem;
          }

          .heroViewBTN {
            height: 45px;
            width: 90px;
            font-size: 0.9rem;
            bottom: 8%;
            right: 4%;
          }

          .createStore__centerWrapper {
            bottom: 20%;
            left: 10%;
            transform: translateX(-50%);
          }

          .createStore__button {
            padding: 8px 14px;
            gap: 8px;
          }

          .createStore__iconLarge {
            width: 24px;
            height: 24px;
          }

          .createStore__iconLarge svg {
            width: 14px;
            height: 14px;
          }

          .createStore__mainTitle {
            font-size: 10px !important;
            font-weight: 400;
            white-space: nowrap;
            text-transform: none;
            font-family: var(--paraFont);
            letter-spacing: 0.2px;
            width: max-content;
          }

          .createStore__subTitle {
            display: none;
          }

          .wholesaler__badge {
            display: none;
          }

          .badge__icon {
            width: 24px;
            height: 24px;
          }

          .badge__icon svg {
            width: 14px;
            height: 14px;
          }

          .badge__title {
            font-size: 0.75rem;
          }

          .badge__subtitle {
            font-size: 0.6rem;
          }

          .sliderImgWrapper img {
            object-position: center 30%;
          }

          .slider__indicatorWrapper {
            bottom: 3%;
            gap: 6px;
          }

          .sliderIndicator {
            width: 8px;
            height: 8px;
          }
        }






             @media screen and (max-width: 768px) {
             
             .sliderContentWrapper .contentWrapper h2 {
             
             font-size: 1.5rem !important;
             }


              .sliderContentWrapper .contentWrapper p {
             
             font-size: 0.85rem !important;
             line-height: 1.4 !important;
              }
             }

             /* Tablet Portrait - 768x1366 (iPad) */
             @media screen and (min-width: 720px) and (max-width: 800px) and (min-height: 1200px) {
              .sliderContentWrapper {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
              }
              .sliderContentWrapper .contentWrapper {
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper h2 {
                font-size: 3.5rem !important;
                line-height: 1.15 !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper p {
                font-size: 1.3rem !important;
                line-height: 1.6 !important;
                text-align: center !important;
              }
              .createStore__centerWrapper {
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) !important;
                bottom: 8% !important;
              }
             }

             /* Tablet - 720x1280 */
             @media screen and (min-width: 700px) and (max-width: 750px) and (min-height: 1200px) {
              .sliderContentWrapper {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
              }
              .sliderContentWrapper .contentWrapper {
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper h2 {
                font-size: 3rem !important;
                line-height: 1.15 !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper p {
                font-size: 1.2rem !important;
                line-height: 1.6 !important;
                text-align: center !important;
              }
              .createStore__centerWrapper {
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) !important;
                bottom: 8% !important;
              }
             }

             /* iPad Mini - 768x1024 */
             @media screen and (min-width: 760px) and (max-width: 780px) and (min-height: 1000px) and (max-height: 1100px) {
              .sliderContentWrapper {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
              }
              .sliderContentWrapper .contentWrapper {
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper h2 {
                font-size: 3rem !important;
                line-height: 1.15 !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper p {
                font-size: 1.1rem !important;
                line-height: 1.5 !important;
                text-align: center !important;
              }
              .createStore__centerWrapper {
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) !important;
                bottom: 8% !important;
              }
             }

             /* iPad Air - 820x1180 */
             @media screen and (min-width: 810px) and (max-width: 840px) and (min-height: 1100px) and (max-height: 1250px) {
              .sliderContentWrapper {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
              }
              .sliderContentWrapper .contentWrapper {
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper h2 {
                font-size: 3.5rem !important;
                line-height: 1.15 !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper p {
                font-size: 1.2rem !important;
                line-height: 1.5 !important;
                text-align: center !important;
              }
              .createStore__centerWrapper {
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) !important;
                bottom: 8% !important;
              }
             }

             /* iPad Pro - 1024x1366 */
             @media screen and (min-width: 1000px) and (max-width: 1050px) and (min-height: 1300px) and (max-height: 1400px) {
              .sliderContentWrapper {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
              }
              .sliderContentWrapper .contentWrapper {
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper h2 {
                font-size: 4rem !important;
                line-height: 1.15 !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper p {
                font-size: 1.4rem !important;
                line-height: 1.6 !important;
                text-align: center !important;
              }
              .createStore__centerWrapper {
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) !important;
                bottom: 8% !important;
              }
             }

             /* Surface Pro 7 - 912x1368 */
             @media screen and (min-width: 900px) and (max-width: 930px) and (min-height: 1300px) and (max-height: 1400px) {
              .sliderContentWrapper {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
              }
              .sliderContentWrapper .contentWrapper {
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper h2 {
                font-size: 3.8rem !important;
                line-height: 1.15 !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper p {
                font-size: 1.3rem !important;
                line-height: 1.6 !important;
                text-align: center !important;
              }
              .createStore__centerWrapper {
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) !important;
                bottom: 8% !important;
              }
             }

             /* 1080x1920 Resolution (Full HD Portrait) */
             @media screen and (min-width: 1050px) and (max-width: 1100px) and (min-height: 1850px) {
              .sliderContentWrapper {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
              }
              .sliderContentWrapper .contentWrapper {
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper h2 {
                font-size: 5.5rem !important;
                line-height: 1.1 !important;
                text-align: center !important;
              }
              .sliderContentWrapper .contentWrapper p {
                font-size: 2rem !important;
                line-height: 1.5 !important;
                text-align: center !important;
              }
              .createStore__centerWrapper {
                left: 50% !important;
                right: auto !important;
                transform: translateX(-50%) scale(1.3) !important;
                bottom: 10% !important;
              }
              .createStore__button {
                padding: 16px 28px !important;
                gap: 14px !important;
              }
              .createStore__iconLarge {
                width: 36px !important;
                height: 36px !important;
              }
              .createStore__mainTitle {
                font-size: 14px !important;
              }
             }













        @media (max-width: 480px) {
          .Homepage__heroMainWrapper {
            height: 50vh;
            padding: 5px;
          }

          .contentWrapper {
            width: 90%;
            padding: 15px;
            gap: 10px;
          }

          .contentWrapper h2 {
            font-size: 1rem;
            line-height: 1.2;
          }

          .contentWrapper p {
            font-size: 0.65rem;
            line-height: 1.2rem;
          }

          .heroViewBTN {
            height: 40px;
            width: 80px;
            font-size: 0.8rem;
            bottom: 6%;
            right: 3%;
          }

          .createStore__centerWrapper {
            bottom: 20%;
            left: 10%;
            transform: translateX(-50%);
          }

          .createStore__button {
            padding: 6px 12px;
            gap: 6px;
            border-radius: 30px;
          }

          .createStore__iconLarge {
            width: 20px;
            height: 20px;
          }

          .createStore__iconLarge svg {
            width: 12px;
            height: 12px;
          }

          .createStore__mainTitle {
            font-size: 10px !important;
            font-weight: 400;
            white-space: nowrap;
            text-transform: none;
            font-family: var(--paraFont);
            letter-spacing: 0.2px;
            width: max-content;
          }

          .createStore__subTitle {
            display: none;
          }

          .wholesaler__badge {
            bottom: 22%;
            right: 5%;
            padding: 6px 12px;
            gap: 6px;
          }

          .badge__icon {
            width: 20px;
            height: 20px;
          }

          .badge__icon svg {
            width: 12px;
            height: 12px;
          }

          .badge__title {
            font-size: 0.7rem;
          }

          .badge__subtitle {
            font-size: 0.55rem;
          }

          .sliderImgWrapper img {
            object-position: center 20%;
          }

          .slider__indicatorWrapper {
            bottom: 4%;
            gap: 5px;
          }

          .sliderIndicator {
            width: 7px;
            height: 7px;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};