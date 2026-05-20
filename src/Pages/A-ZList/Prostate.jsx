import React from "react";
import { useEffect } from "react";
import { Layout } from "../../components/common/Layout/Layout";
import { Footer } from "../../components/common/Footer/Footer";
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Prostate = () => {
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
              <h1 className="text-6xl font-bold text-white mb-2">Prostate</h1>
            </div>
          </div>
        </div>

        {/* Fast Facts Section */}
        <div className="bg-orange-500 text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Fast Facts about Prostate
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                • The most common forms of prostate diseases include prostatitis, benign prostatic hyperplasia (BPH), also known as enlarged prostate, and prostate cancer.
              </li>
              <li>
                • On average, prostatitis is a condition that normally affects between 5 to 10% of men during their lifetime.
              </li>
              <li>
                • The occurrence of prostate cancer in America is in around 1 in every six men.
              </li>
              <li>
                • Prostate cancer is a slow-growing cancer which may lead to around 1 death in every 35 men with the condition.
              </li>
              <li>
                • Men become more prone to developing BPH after crossing the age of 51, where the condition may develop in half the male population of that age group.
              </li>
              <li>
                • About 8 in every 10 men above the age of 80 may develop BPH.
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full px-4 py-8">
          {/* Introduction Paragraph */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              The prostate is a gland found in male bodies. This walnut-sized gland sits immediately below a man’s bladder and encompasses the urethra. The prostate gland’s function is to make the fluid for semen. With age, the prostate gland naturally grows, and it usually grows without any problems. However, this may not always be the case. There are normally three different types of prostate diseases affecting men. These include:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>
                • <strong>Benign Prostatic Hyperplasia (BPH):</strong> This is a condition where the prostate grows abnormally to a size where it starts compressing the urethra. This condition makes it difficult for men to urinate.
              </li>
              <li>
                • <strong>Prostatitis:</strong> This condition is characterized by inflammation of the prostate. This inflammation is often caused by the presence of bacteria in the tract. Prostatitis is very much like a urinary tract infection in men.
              </li>
              <li>
                • <strong>Prostate cancer</strong>
              </li>
            </ul>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Different prostate diseases bring a series of their own symptoms. Prostatitis development in a man, for example, will lead to symptoms like:
            </p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Painful ejaculation and/or urination</li>
              <li>• Pelvic pain</li>
              <li>• Chills and fever</li>
              <li>• The need to urinate frequently</li>
              <li>• Cloudy urine</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              On the other hand, someone with BPH may experience symptoms that include:
            </p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Problems in discharging a urine stream</li>
              <li>• Frequent urination during the night</li>
              <li>• Feeling unable to pass out the urine</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              For the most part, in the case of slow-growing prostate cancer, many times there will be no apparent symptoms. However, it is a good idea to get yourself screened for prostate cancer if you experience an obstruction in the flow of urine.
            </p>
          </div>

          {/* Recommended Supplements Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recommended Supplements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While eating a healthy diet and regular exercise helps to manage prostate health, it is not enough to keep you fit and healthy. Supplements are essential for managing prostate conditions and reducing their symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for prostate conditions. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The following supplements have proven to benefit people with prostate conditions:
            </p>

            {/* Supplements Grid */}
            <div className="bg-green-600 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Saw Palmetto */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Saw Palmetto Veggie Caps
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Saw Palmetto is an excellent herb for regulating prostate health. This herb, native to the southern United States, is usually used for treating medical conditions associated with urinary dysfunction caused by an enlarged prostate. The herb is also used for treating bladder disorders and chronic pelvic pain.
                  </p>
                </div>

                {/* Cranberry */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Cranberry
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    As effective as Cranberry is for treating urinary tract infections in women, these powerful berries are great for maintaining prostate health in men too. The active proanthocyanidins found in cranberries prevent infections in the urinary tract. Regularly taking cranberries can help alleviate symptoms of enlarged prostate and prostatitis in men.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Echinacea Angustifolia Root */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Echinacea Angustifolia Root
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Enlarged prostate can be a painful condition that makes it difficult for men to pass urine. Echinacea Angustifolia Root is one of the most potent natural remedies to overcome the condition. The herb has shown remarkable efficacy in reducing swelling and bacterial infections in the prostate gland.
                  </p>
                </div>

                {/* Pau D'Arco */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Pau D'Arco
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Pau D’Arco is a South American tree that has been used for herbal remedies for centuries. This herb provides powerful extracts that can be used for treating a number of medical conditions. Pau D’Arco has strong anti-inflammatory properties that help reduce the inflammation and discomfort caused by prostatitis.
                  </p>
                </div>
              </div>

              {/* Quercetin Relief */}
              <div className="bg-white rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                  Quercetin Relief
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Quercetin is a naturally occurring phytonutrient, commonly found in berries, apples, grapes, and onions. This phytonutrient is packed with exceptional antioxidant and anti-inflammatory properties that help regulate optimal prostate health and help in managing conditions like prostatitis and enlarged prostate.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <p className="text-sm leading-relaxed">
              The above natural supplements are known to help in controlling and managing prostate conditions, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Prostate;