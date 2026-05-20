import React, { useEffect, useRef } from 'react';
import aboutImage from '../../../assets/images/bg/imgg.jpg';

export const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              entry.target.classList.add('animate-fadeInLeft');
            } else if (entry.target === rightRef.current) {
              entry.target.classList.add('animate-fadeInRight');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white mb-20 pt-16 pb-10">
      <div className="flex justify-center">
      <div className="w-[85%] flex flex-col lg:flex-row justify-between items-center mt-12rem mb-12rem">
          <div
            ref={leftRef}
            className="fade-element w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          >
            <div className="relative w-[650px] max-w-full">
              <img
                src={aboutImage}
                alt="Natural health supplements and products"
                loading="lazy"
                className="w-full aspect-[782/599] object-cover rounded"
              />
            </div>
          </div>

          <div
            ref={rightRef}
            className="fade-element w-full lg:w-1/2 flex justify-center"
          >
            <div className="text-left max-w-[600px]">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  About Our Firm
                </h2>
                <div className="h-[3px] w-[50px] bg-gradient-to-r from-orange-500 to-orange-600 mt-2" />
              </div>

              <div className="text-gray-600 text-base leading-relaxed space-y-5">
                <p>
                  Ray's Healthy Living is a family-centric business which provides the best quality
                  beauty and health supplements to you and your family, with products based on
                  natural and organic ingredients at affordable prices.
                </p>
                <p>
                  Our company believes natural and organic herbal supplements and vitamins provide
                  the most benefit in enhancing your general health and vitality while being safer
                  than their artificial equivalents.
                </p>
                <p>
                  We do business through a network of traditional brick-and-mortar stores and our
                  own brand website online.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="https://rayshealthyliving.com/about-us/"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm md:text-base uppercase tracking-wide px-6 py-3 rounded shadow transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
