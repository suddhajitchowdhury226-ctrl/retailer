import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Hypoglycemia = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Hypoglycemia</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Hypoglycemia</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Diabetic adults aged 75 and above have a 3 times higher chance of suffering from hypoglycemia than those aged 45–64.</li>
                            <li>• In 2009, more than 7 out of every 1,000 diabetic patients were diagnosed with hypoglycemia.</li>
                            <li>• Statistics show that both men and women are equally susceptible to developing the condition.</li>
                            <li>• Around 6% of deaths in diabetic patients aged 40 years or less are caused by hypoglycemia.</li>
                            <li>• Deaths caused by the "dead in bed" syndrome account for 20–60% of deaths in diabetic patients.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hypoglycemia is a medical condition where blood sugar (glucose) levels drop to dangerously low levels. As the primary source of energy for the body, low glucose can lead to serious health issues.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hypoglycemia can result from various underlying health conditions, with the most common being diabetes treatment. Other rare conditions may also cause blood sugar to fall below normal thresholds. Long-term treatment focuses on identifying and addressing these underlying causes.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Each person with diabetes may experience different hypoglycemia symptoms, which can be subtle initially. Look for a combination of symptoms, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Dizziness</li>
                                <li>• Confusion</li>
                                <li>• Shakiness</li>
                                <li>• Headaches</li>
                                <li>• Hunger pangs</li>
                                <li>• Irritability</li>
                                
                            </ul>
                            <ul className="text-gray-700 space-y-1">
                                <li>• Pale skin</li>
                                <li>• Racing pulse</li>
                                <li>• Trembling</li>
                                <li>• Anxiety</li>
                                <li>• Sweating</li>
                                <li>• Weakness</li>
                            </ul>

                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4 mb-2">
                            If untreated, hypoglycemia symptoms can worsen, leading to severe symptoms such as:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Extreme lack of concentration</li>
                                <li>• Poor coordination</li>
                                <li>• Nightmares</li>
                                <li>• Numbness in the tongue and mouth</li>
                                <li>• Passing out</li>
                                <li>• Coma</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Seek medical attention immediately if you experience one or more of these symptoms.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While a healthy diet and regular exercise help manage hypoglycemia, they are not sufficient for overall health. Supplements can aid in managing symptoms, but they should not replace prescribed treatments. Natural products may cause adverse reactions, so consult your doctor before starting any supplements.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with hypoglycemia:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Licorice */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Licorice</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Licorice stabilizes blood sugar levels without triggering insulin production. It contains a sugar-like substance that maintains healthy blood sugar levels, making it a powerful remedy for hypoglycemia.
                                    </p>
                                </div>

                                {/* Bilberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Bilberry controls diabetes symptoms, regulates blood sugar at optimal levels, and reduces the body’s response time to glucose from high-sugar foods, making it an effective treatment for hypoglycemia.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Dandelion */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dandelion</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Dandelion root supports healthy pancreatic function, regulating insulin production and distribution to maintain ideal blood sugar and glucose levels, preventing them from dropping too low.
                                    </p>
                                </div>

                                {/* Milk Thistle */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Milk Thistle</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Milk thistle protects the liver, promotes cell regeneration, and supports detoxification, ensuring blood sugar levels remain stable when liver function is compromised.
                                    </p>
                                </div>
                            </div>

                            {/* Ginseng */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginseng</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Ginseng regulates blood sugar at healthy levels by triggering the pituitary gland to produce higher quantities of blood sugar, restoring energy levels and aiding in hypoglycemia management.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing hypoglycemia, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Hypoglycemia;