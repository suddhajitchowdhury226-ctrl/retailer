import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Osteoporosis = () => {
    // Scroll to top when component mounts
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
                            <h1 className="text-6xl font-bold text-white mb-2">Osteoporosis</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Osteoporosis</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Annually, there are almost 9 million fractures caused by osteoporosis worldwide.</li>
                            <li>• Almost 75 million people in Japan, Europe, and the USA combined are currently suffering from osteoporosis.</li>
                            <li>• On an average, osteoporosis affects around 200 million around the world.</li>
                            <li>• One tenth of these women are aged approximately 60 years old.</li>
                            <li>• One in every 3 women aged 50 or above around the world will suffer from osteoporotic fractures.</li>
                            <li>• For the same age group, the count will be one fifth for men.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Osteoporosis is a bone related disorder that causes the bones to become brittle and weak. The bones under this condition become so weak that they break even on the slightest of stress like bending or standing up. Osteoporosis causes fractures in the bones. These fractures most commonly occur in the wrists, hips, or the spine.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our bones are living tissues, which just like other issues in the body, break down only to be replaced. When osteoporosis occurs, there is no further bone tissue generated to remove and replace the old one.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Osteoporosis is a common condition in both men and women. The disease affects people of all races. However, its occurrence has been found to be more in Asian and Caucasian women; especially the ones that are going through or have gone through their menopause.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Normally, osteoporosis may not become evident unless a person suffers a fracture caused by it. However, there are still telltale signs that hint at the presence of this disorder. These signs may include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Backache</li>
                                <li>• Stooped posture</li>
                                <li>• Gradual height loss over a period of time</li>
                                <li>• Bone fractures that happen more easily than they should.</li>
                                <li>• Fractures of the wrist, hip, or spine</li>
                                <li>• Dental x-rays that reveal the loss of jaw bone.</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            It is important to note that bones don’t weaken overnight. This is a gradual process that may take months and sometimes years to develop into a serious condition. If you or any of your loved one has shown signs of possible osteoporosis, make sure you consult a doctor for it. Leaving the condition untreated may lead to serious spinal cord fractures that might be too difficult to overcome.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage Osteoporosis, it is not enough to keep you fit and healthy. Supplements are essential for managing Osteoporosis and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Osteoporosis. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Osteoporosis:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Nature's Sunshine Red Clover */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Nature's Sunshine Red Clover</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Red clover is a rich source of isoflavones. The herb provides the body with necessary estrogen required to slow down bone resorption. The herb is specifically beneficial for women facing symptoms of menopause (osteoporosis being one of them) providing them relief from them.
                                    </p>
                                </div>

                                {/* Horsetail */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Horsetail</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        For years this herb has been used for the natural care of hair and skin. The ancient Greeks used the herb as a wound healer. Rich in silicon, horsetail makes a potent remedy to heal conditions like fractures, broken bones, and sprains. It protects the bones from loss of calcium that makes them weak and brittle.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Black Cohosh */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Black Cohosh</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Similar to the red clover, the black cohosh also contains estrogen. It restores the estrogen levels in the body and slows down the bone loss triggered by that lack of this hormone. Initially used by the Native Americans to cure stomach cramps, studies have now established the black cohosh as a powerful support to bone health.
                                    </p>
                                </div>

                                {/* Dong Quai */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dong Quai</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Dong Quai is a strong herb that restores hormonal balance in the body. Recent research on the efficacy of this plant showed that using dong quai results in a proliferation of bone cells. Dong quai builds bone density and promotes joint comfort.
                                    </p>
                                </div>
                            </div>

                            {/* Nature's Sunshine Parsley */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Nature's Sunshine Parsley</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Parsley contains vitamin K, boron, and high levels of fluoride – all of which contribute to promoting healthier bones. Parsley has proved an efficient remedy for bone related diseases and disorders like osteoporosis and arthritis. It prevents the bones from thinning.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Osteoporosis, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Osteoporosis;