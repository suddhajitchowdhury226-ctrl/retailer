import React, { useEffect } from "react";
import { Layout } from "../../components/common/Layout/Layout";
import { Footer } from "../../components/common/Footer/Footer";
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const SubstanceAbuseAddiction = () => {
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
                Substance Abuse / Addiction
              </h1>
              {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
            </div>
          </div>
        </div>

        {/* Fast Facts Section */}
        <div className="bg-orange-500 text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Fast Facts about Substance Abuse /Addiction
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                • Substance abuse can be defined as the repeated consumption of
                psychoactive substances.
              </li>
              <li>
                • Alcohol, followed by drugs intake, is the most common method
                of substance abuse.
              </li>
              <li>
                • Most common symptoms include intense urges to have the drug,
                lack of socialization, trouble having mental clarity, trouble
                concentrating, and the inability to perform efficiently.
              </li>
              <li>
                • In America, the use of alcohol, tobacco, illicit drugs and
                prescriptions all costs nearly $137 billion in healthcare
                expenses annually.
              </li>
              <li>
                • The age cohort most severely affected by substance abuse
                includes people in the ages 25-29. Almost 19.8% of this
                population is battling with some form of addiction or substance
                abuse.
              </li>
              <li>
                • The prevalence of substance abuse is most common in Caucasian
                men and women followed by Hispanic men and women.
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className=" w-full px-4 py-8">
          {/* Introduction Paragraph */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {/* <p className="text-gray-700 leading-relaxed mb-4">
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
            </p> */}
            <p className="text-gray-700 leading-relaxed mb-4">
              Substance abuse refers to the hazardous or harmful consumption of
              psychoactive substances such as illicit drugs or alcohol. Many
              studies reveal that the abuse of these substances can cause severe
              harm to the individual’s liver overtime. Additionally, it also
              leads to dependence syndrome – a group of cognitive, behavioral,
              and psychological occurrence, which forms after repeated
              consumption of the drug. When one suffers from dependence
              syndrome, it becomes almost impossible to stop them from taking
              the drug or controlling what amounts it should be taken in. This
              ultimately results in addiction, which is difficult to overcome
              from. There can be a number of causes that increases one’s chances
              of taking the drug. Since it is neither a disease nor a condition,
              anyone can the take up the habit of drugs or alcohol and find it
              difficult to let go. Some factors that increase one’s likelihood
              of substance abuse include:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6">
              <li>• Peer pressure</li>
              <li>• Genetics</li>
              <li>• Mental illness</li>
              <li>• Lack of social interaction</li>
              <li>• Family behavior</li>
            </ul>
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The symptoms or behaviors generally associated with substance
              abuse include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-gray-700 space-y-1">
                <li>• Intense urges to have the drug</li>
                <li>
                  • Needing more of the drug to get the same feeling overtime
                </li>
                <li>
                  • Ensuring that one always has sufficient amount of drugs
                </li>
                <li>
                  • Spending money on it even when one doesn’t have enough
                </li>
                <li>
                  • Opting for crimes like theft when you don’t have the money
                  to by the drug
                </li>
              </ul>
              <ul className="text-gray-700 space-y-1">
                <li>
                  • Cutting back on social interactions and recreational
                  activities
                </li>
                <li>• Failing to meet work responsibilities and obligations</li>
                <li>• Taking risks under the influence of the drug</li>
                <li>• Experiencing withdrawal symptoms</li>
              </ul>
            </div>
          </div>

          {/* Recommended Supplements Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recommended Supplements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While eating a healthy diet and regular exercise helps manage
              substance abuse, it is not enough to keep you fit and healthy.
              Supplements are essential for managing substance abuse and
              reducing its symptoms. But it should be kept in mind that
              supplements should not be used to replace the treatment for
              substance abuse. It is not always true that natural products are
              safe for use. Many products can react with your body and produce
              an adverse reaction. Thus, it is better to be safe and consult
              your before starting to use any supplements for managing your
              condition.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The following supplements have proven to benefit people with
              substance abuse:
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
                    Turmeric Veggie Caps
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    One of the most harmful effects of substance abuse is on
                    one’s liver. Many chronic substance abuse patients can
                    suffer from conditions like cancer or cirrhosis. Turmeric,
                    which contains curcumin, can help protect the liver from
                    damage. It is an active ingredient present in turmeric.
                    Multiple studies suggest that it can treat a number of liver
                    conditions. Furthermore, it is also known to treat oxidative
                    stress, which is caused by substance abuse.
                  </p>
                </div>

                {/* Comfrey */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    BE CLEAN (A/F)
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The Be Clean tonic is an effective remedy to treat weight
                    loss, harm caused by spending too much time in a toxic
                    environment, or when recovering from substance abuse. It
                    helps the victims of substance abuse control their urges.
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
                    B-50 Capsules
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The B-50 capsules are also an effective medication to treat
                    substance abuse. They come packed with many active nutrients
                    including vitamin B6, B12, C, pantothenic acid, and folic
                    acid etc. When the body receives all these nutrients in the
                    form of one single supplement, it restores proper
                    functioning of adrenal function and maintains antioxidants
                    levels
                  </p>
                </div>

                {/* Moringa */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Skullcap
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Skullcap has been proven beneficial in alleviating drug
                    withdrawal symptoms. It does so by treating multiple nervous
                    system disorders, calming the nerves, strengthening the
                    nervous system, fighting headaches, and providing mental
                    clarity –all of which are symptoms of substance abuse.
                  </p>
                </div>
              </div>

              {/* Arnica Oil - Full Width */}
              <div className="bg-white rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                  NAC 1000 mg Tablets
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The tablets are a non-essential amino acid in an active form.
                  The tablets contain sulfur, which is known to stabilize
                  protein formation in the body. This stabilization results in
                  the production of Glutathione in sufficient amounts.
                  Glutathione is a potent free radical, which controls immune
                  system function by boosting overall nervous system health. The
                  result is mental clarity, which is one of the most common
                  problems one experiences when overdosed with drugs or alcohol.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <p className="text-sm leading-relaxed">
              The above natural supplements are known to help in controlling and
              managing substance abuse, but you should exercise proper caution
              and ask your doctor before adding any such supplements to your
              diet. Herbs have lasting and strong effects on the body and can
              also interact with other drugs and medications, causing dangerous
              and adverse reactions. If you use any medication for your disease,
              talk to your doctor before you decide to start any supplements or
              herbal products to manage your health.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default SubstanceAbuseAddiction;
