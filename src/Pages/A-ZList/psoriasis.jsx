import React from "react";
import { useEffect } from "react";
import { Layout } from "../../components/common/Layout/Layout";
import { Footer } from "../../components/common/Footer/Footer";
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Psoriasis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="relative z-10 h-full flex items-center px-8">
            <div className="container mx-auto">
              <h1 className="text-6xl font-bold text-white mb-2">Psoriasis</h1>
            </div>
          </div>
        </div>

        {/* Fast Facts Section */}
        <div className="bg-orange-500 text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Fast Facts about Psoriasis
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                • Although psoriasis can develop at any age, people are most likely to be affected by it between the ages of 15 to 25.
              </li>
              <li>
                • It is one of the most commonly prevailing autoimmune diseases in the US.
              </li>
              <li>
                • Recent research shows that more than 7.5 million Americans are living with mild or severe psoriasis. This makes up about 2.2% of the overall population.
              </li>
              <li>
                • Globally, 125 million people are affected by psoriasis, which makes up 2 to 3% of the population worldwide as reported by the World Psoriasis Day consortium.
              </li>
              <li>
                • Did you know 60% of the population suffering from psoriasis misses 26 days of work on average?
              </li>
              <li>
                • The likelihood of a child developing psoriasis increases by 10% when one parent has it. The likelihood of the same child developing it increases by 50% when both parents have it.
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full px-4 py-8">
          {/* Introduction Paragraph */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Psoriasis is an autoimmune-related skin condition during which the lifecycle of cells changes. When one has psoriasis, the cells go through a rapid buildup on the skin’s surface. These additional cells then form a thick layer of patchy, silvery-white flaky skin that occasionally itches. The skin also becomes severely dry and bleeds upon intense scratching. Psoriasis is persistent and can last between several weeks to months when not treated.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What really causes psoriasis in the first place? Medical experts still aren’t sure. However, some insightful hypotheses and studies have suggested that it has a direct link with one’s immune system and genetics. Psoriasis attacks a weaker immune system since it is an infectious skin disease. It can also be passed through genes and increases the likelihood of an offspring being born with it. Psoriasis can be of multiple types, the most common of which include:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>• Plaque</li>
              <li>• Inverse</li>
              <li>• Guttate</li>
              <li>• Erythrodermic</li>
              <li>• Pustular</li>
            </ul>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The symptoms vary from person to person. Many may experience a flaky scalp or a few patches, while others may have a major portion of their body covered with it. Some general symptoms include:
            </p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Red, inflamed, or raised patches on the skin</li>
              <li>• Plaque or silver-white scales on those patches</li>
              <li>• Cracked or dry skin that bleeds</li>
              <li>• Itchiness and burning sensation</li>
              <li>• Soreness</li>
              <li>• Pitted or thick nails</li>
              <li>• Swollen joints that often ache</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Since psoriasis can be of multiple types, it is possible that people experience completely different symptoms than those mentioned above. A consultation with a physician will surely help one identify the type and take medication accordingly.
            </p>
          </div>

          {/* Recommended Supplements Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recommended Supplements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While eating a healthy diet and regular exercise helps to manage psoriasis, it is not enough to keep you fit and healthy. Supplements are essential for managing psoriasis and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for psoriasis. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The following supplements have proven to benefit people with psoriasis:
            </p>

            {/* Supplements Grid */}
            <div className="bg-green-600 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Turmeric Veggie Caps */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Turmeric Veggie Caps
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    An efficient anti-inflammatory herb, Turmeric Veggie Caps ensure that the naturally occurring cortisol levels in the body remain constant, thus producing an anti-inflammatory system. This boosts the body’s resistance towards many autoimmune diseases, including psoriasis.
                  </p>
                </div>

                {/* Echinacea Angustifolia Root */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Echinacea Angustifolia Root
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Being a popular alternative natural remedy, Echinacea possesses anti-inflammatory, antifungal, and antiviral properties. When taken, these add an invisible resistance layer around the body from all bacterial and viral infections that prey on weaker immune systems. The roots of the herb are used as an extract in many lotions and salves, and regular application soothes the discomfort and ache one experiences when suffering from skin conditions like psoriasis. The herb can also be used to diminish the severity of the symptoms.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Burdock */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Burdock
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Burdock is an effective all-natural remedy to treat a number of skin conditions like acne, psoriasis, eczema, and dark skin. It does so by reducing the levels of toxemia in our skin. Excess toxemia is responsible for making the skin prone to such conditions and infections.
                  </p>
                </div>

                {/* Cayenne */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Cayenne
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Sometimes referred to as paprika, Cayenne pepper has been used to treat a number of viral and bacterial infections for centuries. Due to its anti-inflammatory properties, it works great as a pain and inflammation calmer. When one suffers from psoriasis, the pain, bleeding, and dryness are some of the most common symptoms. Incorporating Cayenne pepper in one’s diet can help relieve some of their discomfort and pain.
                  </p>
                </div>
              </div>

              {/* Oregon Grape Root */}
              <div className="bg-white rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                  Oregon Grape Root
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A valuable herb, Oregon Grape Root is extensively used as an herbal remedy to treat a number of digestive disorders and skin-related problems. Its antifungal, anti-inflammatory, and antibacterial properties make it the perfect solution one needs to treat conditions like acne, eczema, and psoriasis.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <p className="text-sm leading-relaxed">
              The above natural supplements are known to help in controlling and managing psoriasis, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Psoriasis;