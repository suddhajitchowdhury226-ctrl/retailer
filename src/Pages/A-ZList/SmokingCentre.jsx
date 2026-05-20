import React from "react";
import { useEffect } from "react";
import { Layout } from "../../components/common/Layout/Layout";
import { Footer } from "../../components/common/Footer/Footer";
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const SmokingCentre = () => {
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
              <h1 className="text-6xl font-bold text-white mb-2">
                Smoking Centre
              </h1>
              {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
            </div>
          </div>
        </div>

        {/* Fast Facts Section */}
        <div className="bg-orange-500 text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Fast Facts about Smoking
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                • Smoking isn’t a health condition but an unhealthy behavior or
                practice in which a person’s intake of harmful drugs and
                chemicals increases. It becomes an addiction.
              </li>
              <li>
                • Smoking is the leading cause of death in America. It is the
                only disease preventable yet still leads millions to their
                deaths.
              </li>
              <li>
                • Annually, 480,000 people die from smoking cigarettes in the
                United States. The estimated number means that every 1 in 5
                deaths is caused by it.
              </li>
              <li>
                • Research shows that 10 times more people have died from
                smoking prematurely than those who died in all the wars fought
                by Americans altogether.
              </li>
              <li>
                • Smoking is the leading cause of lung cancer. 9 out of 10 cases
                of lung cancer are smoking-related with women being the more
                dominant demographic.
              </li>
              <li>
                • But that is not all; smoking can cause cancer anywhere in the
                body and not just in the lungs.
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className=" w-full px-4 py-8">
          {/* Introduction Paragraph */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Smoking can be defined as an unhealthy practice which often
              becomes an addiction. It is neither a heath condition nor a
              disease. It is a preventable behavior but is also the reason for
              the most premature death in the world. The term smoking refers to
              not just cigarettes but a number of different chemical
              consumptions such as smoking a pipe or being exposed to the smoke
              (passive smoking). There is no healthy or safe smoking and all of
              these have harmful effects on one’s organs. When the behavior is
              practiced for a long time, it increases one’s chances of
              developing many health conditions such as digestive disorders,
              ulcers, cancer and cardiovascular diseases.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite its prevalence, there are a number of factors that
              contribute to it. These factors may differ for everyone and are
              usually hard to understand. What causes one to smoke? Here are
              some good ones:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>• Peer pressure</li>
              <li>• Glamorous advertising</li>
              <li>• Seeing others in the household doing it</li>
              <li>• Thinking of it as an acceptable behavior</li>
              <li>• Aggression</li>
              <li>• Low self-esteem</li>
              <li>• Lack of proper education</li>
            </ul>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are number of different signs and symptoms one experiences
              or depicts when they have become addicted to smoking. These
              include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-1">
                <li>• Yellowing of teeth</li>
                <li>• Bad breath</li>
                <li>• Reoccurring lung infections</li>
                <li>• Hands and feet getting cold</li>
                <li>• Low oxygen</li>
                <li>• Fatigue</li>
                <li>• Smoker’s cough</li>
                <li>• Shortness of breath</li>
                <li>• Smoke smelling clothes</li>
              </ul>
              <ul className="text-gray-700 space-y-1">
                <li>• Low tolerance</li>
                <li>• Loss of smell</li>
                <li>• Lack of taste</li>
                <li>• Hypertension</li>
                <li>• Wrinkling of skin</li>
                <li>• Premature ageing</li>
                <li>• Hoarse voice</li>
                <li>• Nicotine-stained hands</li>
              </ul>
            </div>
          </div>

          {/* Recommended Supplements Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recommended Supplements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While eating a healthy diet and regular exercise helps to manage
              some of the problems caused by smoking, it is not enough to keep
              you fit and healthy. Supplements are essential for managing
              smoking and reducing its symptoms. But it should be kept in mind
              that supplements should not be used to replace the treatment for
              smoking related damage. It is not always true that natural
              products are safe for use. Many products can react with your body
              and produce an adverse reaction. Thus, it is better to be safe and
              consult your before starting to use any supplements for managing
              your condition.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The following supplements have proven to benefit people with
              smoking:
            </p>

            {/* Supplements Grid */}
            <div className="bg-green-600 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Arnica */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Cayenne
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Cayenne pepper desensitizes the respiratory tract from
                    tobacco. It also removes or soothes and chemical irritants
                    that may have been inhaled with the smoke. It also possesses
                    many antioxidant properties that help stabilize the lung
                    membranes thus preventing any damage. Cayenne can be used in
                    a number of different ways. It can be added into meals;
                    pinches of it can be added to lukewarm water or swollen in
                    the form of capsules containing its extract. Regular intake
                    will reduce the need to smoke
                  </p>
                </div>

                {/* Comfrey */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Ginger
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    One of the most potent herb with many anti-inflammatory,
                    antiviral and antibacterial properties, ginger helps treat
                    multiple health conditions. When taken to stop the urge to
                    smoke, it eases the withdrawal symptoms especially nausea.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Propolis */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Ginseng
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Ginseng works on the frequency or cravings. It reduces them
                    first, prolongs them and then completely gets rid of the
                    urge. Its tonic is beneficial in reestablishing the cortisol
                    levels in the blood and also treats a number of adrenal
                    gland issues.
                  </p>
                </div>

                {/* Moringa */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    St. John’s Wort
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    St. John’s Wort also reduces the urges to smoke, many
                    studies show how potent a remedy it is to help someone quit
                    smoking. Taking its capsules twice daily can help one get
                    rid of the unhealthy habit forever.
                  </p>
                </div>
              </div>

              {/* Arnica Oil - Full Width */}
              <div className="bg-white rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                  Valerian
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The root of valerian is yet another effective herb to ease the
                  withdrawal symptoms of smoking. These may include depression,
                  stress, restlessness, anxiety or insomnia. Its incorporation
                  also alleviates multiple symptoms one experiences when a
                  frequent smoker.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <p className="text-sm leading-relaxed">
              The above natural supplements are known to help in controlling and
              managing smoking, but you should exercise proper caution and ask
              your doctor before adding any such supplements for in your diet.
              Herbs have lasting and strong effects on the body and can also
              interact with other drugs and medications, causing dangerous and
              adverse reactions. If you use any medication for your disease,
              talk to your doctor before you decide to start any supplements or
              herbal products to manage your health condition.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default SmokingCentre;
