import React from "react";
import { useEffect } from "react";
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
              <h1 className="text-6xl font-bold text-white mb-2">Stress</h1>
              {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
            </div>
          </div>
        </div>

        {/* Fast Facts Section */}
        <div className="bg-orange-500 text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Fast Facts about Substance Stress
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                • Although anyone can develop stress, it is most prevalent in
                teenagers in 9th to 12th grade in the US, making it the
                country’s top health concern.
              </li>
              <li>
                • 80%of the working class in the US suffers from mild to severe
                stress and a majority of them wish to be trained on how to
                manage it.
              </li>
              <li>
                • 48% of those suffering from stress say that it has put a
                negative impact on their professional and personal life.
              </li>
              <li>
                • 26% of people who reported being stressed said that it
                alienated them from their family and friends.
              </li>
              <li>
                • Each year, 3 out of 4 visits to the physicians are
                stress-related.
              </li>
              <li>
                • Stress costs the employers nearly $300 billion annually due to
                missed work and health
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className=" w-full px-4 py-8">
          {/* Introduction Paragraph */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              We all deal with stress every now and then. Right before a big
              presentation, trying to discipline your kids, before trying
              something new, when going for a job interview, waiting for the
              reports in a hospital, all can cause one to feel a little out of
              the place. Many medical experts suggest that a little stress sis
              actually good for the body. It can help us focus; motivate us to
              step outside out of our limits and save us from threatening
              situations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Medically, stress can be defined as the body’s way of responding
              to some external threat or demand. When one senses danger, be it
              imaged or real, the body commences its defense process and readies
              one to either fight or flight, also known as the stress response.
              When one experiences stress response, their heart rate increases,
              muscles tighten, blood pressure rises and the breathing quickens.
              <br />
              Stress isn’t age-restricted. Anyone from the ages of 5 above can
              feel pressure or threatened by some external stimuli.
            </p>
            {/* <ul className="text-gray-700 space-y-2 ml-6">
              <li>• Peer pressure</li>
              <li>• Genetics</li>
              <li>• Mental illness</li>
              <li>• Lack of social interaction</li>
              <li>• Family behavior</li>
            </ul> */}
          </div>

          {/* Symptoms Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The symptoms of stress can’t be counted on fingers. Although,
              people suffering from stress experience different symptoms, there
              are some that are most common in many. These include:
            </p>

            <h3 className="font-semibold">Physical symptoms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <ul className="text-gray-700 space-y-1">
                <li>• pains and aches</li>
                <li>• Constipation or diarrhea</li>
                <li>• dizziness</li>
                <li>• Nausea</li>
                <li>• Chest pain</li>
                <li>• weak immune system</li>
              </ul>
            </div>

            <h3 className="font-semibold">Cognitive symptoms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <ul className="text-gray-700 space-y-1">
                <li>• Memory issues</li>
                <li>• Lack of concentration</li>
                <li>• Poor judgment</li>
                <li>• Anxious opinions</li>
                <li>• Constant worrying</li>
              </ul>
            </div>

            <h3 className="font-semibold">Emotional symptoms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <ul className="text-gray-700 space-y-1">
                <li>• Depression</li>
                <li>• Anxiety</li>
                <li>• Moodiness</li>
                <li>• Anger</li>
                <li>• Lowered self-esteem</li>
              </ul>
            </div>

            <h3 className="font-semibold">Behavioral symptoms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <ul className="text-gray-700 space-y-1">
                <li>• Loss of appetite or an increased urge to consume more</li>
                <li>• Disturbed sleeping patterns</li>
                <li>• Decline in the need of being social</li>
                <li>• Procrastination</li>
                <li>• Reliance on alcohol or drugs</li>
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
              stress, it is not enough to keep you fit and healthy. Supplements
              are essential for managing stress and reducing its symptoms. But
              it should be kept in mind that supplements should not be used to
              replace the treatment for stress. It is not always true that
              natural products are safe for use. Many products can react with
              your body and produce an adverse reaction. Thus, it is better to
              be safe and consult your before starting to use any supplements
              for managing your condition.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The following supplements have proven to benefit people with
              stress:
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
                    Kava Veggie Caps
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Kava has long been used to treat symptoms of stress and
                    anxiety. Many even call it an alternative therapy; however,
                    it must never be used in conjunction with other drugs. Kava
                    veggie caps are also known to reduce muscle scraps, strains
                    and aches that one often experiences when suffering from
                    stress.
                  </p>
                </div>

                {/* Comfrey */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Ashwagandha
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    It wouldn’t be wrong to call it one of the most effective
                    herbal treatment sot cure anxiety and stress. Ashwagandha is
                    mainly for those who are prone to breakdowns and can’t
                    handle pressure situations well. It is also beneficial for
                    those who suffer from a weakened immune system and wish to
                    avoid burn out or panic attacks. It does so by reducing
                    one’s blood pressure and relaxing the muscles which are key
                    symptoms of stress. Ashwagandha gives supplementary life
                    force to help adjust to the stress. Lastly, it can also help
                    those who have already broken down in a restorative way.
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
                    Bacopa
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    For centuries, Indians have been using bacopa as ayurvedic
                    medicine to improve memory, fight stress and a number of
                    other digestive disorders such as an irritable bowel
                    syndrome, cramps and joint pains. When taken for stress, its
                    helps relax the body and return to its regional stress-free
                    state.
                  </p>
                </div>

                {/* Moringa */}
                <div className="bg-white rounded-lg p-6 relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                    Holy Basil
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    One of the most common herbal remedy to cure viral
                    infections such as cold and flu, holy basil also work
                    wonders for those suffering stress. Its incorporation helps
                    eliminate headaches, fever, stress and diabetes. It is also
                    known to promote longevity and therefore is a great the
                    alternative medicine for many health conditions.
                  </p>
                </div>
              </div>

              {/* Arnica Oil - Full Width */}
              <div className="bg-white rounded-lg p-6 relative">
                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                  Immuno Well RX
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Immuno Well Rx promotes body’s own immune defense, at the same
                  time enhancing resistance. It also prepares the body to handle
                  stress without breaking down and how to avoid having one in
                  the future.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <p className="text-sm leading-relaxed">
              The above natural supplements are known to help in controlling and
              managing stress, but you should exercise proper caution and ask
              your doctor before adding any such supplements for in your diet.
              Herbs have lasting and strong effects on the body and can also
              interact with other drugs and medications, causing dangerous and
              adverse reactions. If you use any medication for your disease,
              talk to your doctor before you decide to start any supplements or
              herbal products to manage your health condition
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default SubstanceAbuseAddiction;