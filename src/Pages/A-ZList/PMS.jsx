import React from "react";
import { useEffect } from "react";
import { Layout } from "../../components/common/Layout/Layout";
import { Footer } from "../../components/common/Footer/Footer";
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const PMS = () => {
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
              <h1 className="text-6xl font-bold text-white mb-2">PMS</h1>
            </div>
          </div>
        </div>

        {/* Fast Facts Section */}
        <div className="bg-orange-500 text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Fast Facts about Premenstrual Syndrome
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                • Every 3 in 4 women are affected by premenstrual syndrome worldwide.
              </li>
              <li>
                • Medical experts believe the cause of the symptoms is linked to the hormonal changes in the body before the monthly cycle begins.
              </li>
              <li>
                • Women who are at most risk of suffering from premenstrual syndrome are between the ages of 20-40.
              </li>
              <li>
                • Approximately, 85% of American women in their childbearing years experience premenstrual syndrome.
              </li>
              <li>
                • Premenstrual syndromes disable 5% of women who suffer from severe symptoms.
              </li>
              <li>
                • Studies reveal that the suicidal rate in patients with depression is higher during premenstrual syndrome.
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full px-4 py-8">
          {/* Introduction Paragraph */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Premenstrual syndrome isn’t a disease, but a condition that affects the emotions, behaviors, and physical health of a woman as she nears her period dates (second half of the menstrual cycle). PMS is a very common condition as 85% of all adult women worldwide experience it. The symptoms of premenstrual syndrome begin a week or two before the monthly periods and usually fade away as soon as the cycle begins. Medical scientists still are not sure what causes it in the first place; however, many studies reveal that it has something to do with the changes in the serotonin levels and sex hormones before the menstrual cycle begins. According to medical experts, an increase in the levels of estrogen in the ovaries is responsible for causing most of its symptoms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A woman will have PMS if she has a family history of:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>• PMS</li>
              <li>• Mood disorders and depression</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Or has suffered:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>• Domestic violence</li>
              <li>• Physical trauma</li>
              <li>• Substance abuse</li>
              <li>• Emotional trauma</li>
            </ul>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Although there is a long list of symptoms of premenstrual syndrome, most women only experience a few of them. The most common symptoms include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-1">
                <li>• Depression</li>
                <li>• Anxiety or tension</li>
                <li>• Weight gain</li>
                <li>• Crying</li>
                <li>• Anger or irritation</li>
                <li>• Mood swings</li>
                <li>• Acne breakouts</li>
                <li>• Breast tenderness</li>
              </ul>
              <ul className="text-gray-700 space-y-1">
                <li>• Headaches</li>
                <li>• Food craving and appetite changes</li>
                <li>• Joint pains</li>
                <li>• Social withdrawal</li>
                <li>• Insomnia</li>
                <li>• Lack of concentration</li>
                <li>• Fatigue</li>
                <li>• Abdominal bloating</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Most of these symptoms directly or indirectly affect the quality of life; however, the symptoms don’t last for long. They usually subdue or disappear within the first four days of the periods.
            </p>
          </div>

          {/* Recommended Supplements Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recommended Supplements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While eating a healthy diet and regular exercise helps to manage PMS, it is not enough to keep you fit and healthy. Supplements are essential for managing PMS and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for PMS. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The following supplements have proven to benefit people with PMS:
            </p>

            {/* Supplements Grid */}
            <div className="bg-green-600 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* St. John's Wort */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    St. John's Wort
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Better than any other over-the-counter medicine to treat muscle cramps when suffering from PMS, St. John’s Wort has become a popular herbal supplement in the USA. It is most commonly used to help in combating mood swings, reduces pain by relaxing the muscles, and also works as a mild sedative for insomniacs.
                  </p>
                </div>

                {/* Cramp Bark */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Cramp Bark
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Primarily used to relieve muscle cramps, Cramp Bark does so by relaxing smooth muscle tissues which lowers the pain level and tightness one experiences when on periods. It is also very effective when one has a difficult period. The best time to incorporate Cramp Bark is right after the onset of the first symptoms of Premenstrual Syndrome, as it will keep one from experiencing mood swings and relax the muscles that cause cramps.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Red Clover */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Red Clover
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Red Clover is a water-soluble chemical enriched with isoflavones which act as estrogens upon entering the body. Most of the symptoms of PMS are due to a lack of estrogen in the body. The intake of Red Clover supplements is beneficial to treat hot flashes, breast tenderness, and relieve pain. It also improves the circulation of blood and lowers cholesterol.
                  </p>
                </div>

                {/* Chaste Tree */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Chaste Tree
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Also known as the traditional woman’s herb, Chasteberry is effective in treating a number of hormonal issues in the body, including PMS. It helps normalize the imbalance while easing the pain and discomfort one feels during PMS. Furthermore, it treats cases of hot flashes, insomnia, nervous tension, mood swings, and issues linked to hormone deficiency.
                  </p>
                </div>
              </div>

              {/* Black Cohosh */}
              <div className="bg-white rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                  Black Cohosh
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A distinctive woman’s remedy, Black Cohosh helps relieve muscle cramps by relaxing urinary area muscles. It is also beneficial to use when one experiences irregular periods and wishes to regulate the monthly cycle.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <p className="text-sm leading-relaxed">
              The above natural supplements are known to help in controlling and managing PMS, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default PMS;