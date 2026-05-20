import React from "react";
import { useEffect } from "react";
import { Layout } from "../../components/common/Layout/Layout";
import { Footer } from "../../components/common/Footer/Footer";
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Pregnancy = () => {
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
              <h1 className="text-6xl font-bold text-white mb-2">Pregnancy</h1>
            </div>
          </div>
        </div>

        {/* Fast Facts Section */}
        <div className="bg-orange-500 text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Fast Facts about Pregnancy
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                • A new baby is born every three seconds in the world.
              </li>
              <li>
                • Each year, 211 million pregnancies are recorded worldwide excluding those that go unreported, aborted, or result in a miscarriage. This means that 220,000 babies are born each day.
              </li>
              <li>
                • Almost 50% of all occurring pregnancies in America are unplanned.
              </li>
              <li>
                • The most prominent section of pregnant women includes teenagers and people in their 20’s.
              </li>
              <li>
                • The most common symptoms of pregnancy include morning sickness, missed periods, fatigue, mood swings, and sugary cravings.
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full px-4 py-8">
          {/* Introduction Paragraph */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Pregnancy is the period during which a woman carries an embryo inside her. The embryo after several weeks turns into a fetus which grows in the woman’s uterus. It happens when a male’s sperm breaches a female’s egg and fertilizes it. It happens in the fallopian tubes, creating a zygote. When the egg fertilizes, the zygote starts to split into smaller cells until a cluster is formed. This cluster is called the embryo. The cluster continues to grow in size until it attaches itself to the uterus’s walls and branches out villi (root-like veins). These little villi make sure that the embryo stays attached to the uterus’s lining, ultimately turning into the placenta. The placenta becomes the channel for feeding and protecting the embryo which now turns into a fetus, providing it with a sufficient amount of oxygen and nutrients to survive. During the course of 40 weeks, the fetus grows and forms the shape of a human.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The symptoms of pregnancy include:
            </p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Missed period: When a woman in her childbearing years misses a period, it could be the first sign of pregnancy.</li>
              <li>• Tender breasts: Another early pregnancy sign, if a woman feels that her breasts have become sensitive or are swollen, she could be pregnant. This happens due to the hormonal changes in the body.</li>
              <li>• Morning sickness: A little misleading, morning sickness can happen any time of the day when one is pregnant. Most women experience nausea often accompanied by vomiting when they are pregnant.</li>
              <li>• Fatigue: One can also feel groggy, sleepy, and tired despite proper rest. It happens because the levels of progesterone increase in the body.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some other less common symptoms include:
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• Mood swings</li>
              <li>• Cramps bloating</li>
              <li>• Light spotting food aversions</li>
              <li>• Constipation</li>
            </ul>
          </div>

          {/* Recommended Supplements Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recommended Supplements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While eating a healthy diet and regular exercise helps to manage pregnancy, it is not enough to keep you fit and healthy. Supplements are essential for managing pregnancy and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for pregnancy. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The following supplements have proven to benefit people with pregnancy:
            </p>

            {/* Supplements Grid */}
            <div className="bg-green-600 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Black Cohosh */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Black Cohosh
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Black Cohosh is known as a distinctive woman’s remedy. It has been used by Native American midwives to aid in labor; these are highly effective when a woman’s delivery date passes and the onset of labor doesn’t begin. Its consumption drives the body into pre-labor mode by starting contractions. As these contractions get stronger, the woman becomes ready to deliver. However, it is strictly advised not to use Black Cohosh during the first two trimesters of pregnancy as it could result in a miscarriage.
                  </p>
                </div>

                {/* Blue Cohosh */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Blue Cohosh
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Similar to Black Cohosh, Blue Cohosh also performs a similar function. In the USA, it has remained a traditional herbal remedy to ease a woman in labor. Like Black Cohosh, its consumption is also advised after the woman is in her 37th week of pregnancy and not before. It has also proven beneficial to ease spastic cramping during pregnancy.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Red Raspberry */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Red Raspberry
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Red Raspberry comes packed with many health benefits. It has proven effective during pregnancy complications. What makes it even better is that it is safe to use and can help one feel better on the whole. Couples looking to get pregnant can take Red Raspberry as it increases the chances of fertility. It also relieves leg cramps, morning sickness, and vomiting in pregnant women.
                  </p>
                </div>

                {/* California Poppy */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    California Poppy
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    California Poppy is a safe, mild, and legal sedative that can be used to treat a number of different health conditions. When taken during pregnancy, it can relieve many symptoms such as mood swings, nausea, and vomiting. However, its most promising feature is fertility. Those who wish to get pregnant can incorporate California Poppy in their diets. Hopefully, it will result in pregnancy.
                  </p>
                </div>
              </div>

              {/* Ginger */}
              <div className="bg-white rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                  Ginger
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  An herb that not only adds flavor and aroma to our teas and food, it also offers great medicinal benefits. For centuries, people have been using Ginger as an ailment for morning sickness, nausea, fatigue, and cramps – all of which are common symptoms of pregnancy.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <p className="text-sm leading-relaxed">
              The above natural supplements are known to help in controlling and managing pregnancy, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Pregnancy;