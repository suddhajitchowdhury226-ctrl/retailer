import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Hypertension = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Hypertension</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Hypertension</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• According to the CDC, around 75 million adults in America suffer from hypertension/high blood pressure.</li>
                            <li>• Only 54% of people with hypertension have the condition under control.</li>
                            <li>• Americans spend nearly $46 billion every year on healthcare and medication for hypertension.</li>
                            <li>• Women over the age of 65 are more prone to hypertension than men in the same age range.</li>
                            <li>• About one-fifth of people suffering from hypertension do not know they have the condition.</li>
                            <li>• Hypertension is the underlying cause for over 360,000 deaths in America, adding up to around 1,000 deaths every day.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hypertension, commonly known as high blood pressure, is a widespread medical condition characterized by a long-term high force of blood flow within the arteries, which may lead to serious health conditions like stroke and heart disease.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Blood pressure is determined by two measures: the amount of blood pumped by the heart and the resistance to blood flow in the arteries. Narrower arteries and higher blood volume pumped by the heart result in higher blood pressure.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hypertension develops gradually over years and may not show evident symptoms early on. It affects nearly everyone with increasing age, and if left uncontrolled, it increases the risk of heart attacks and other circulatory issues. Fortunately, it can be detected and managed with medication.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Symptoms of hypertension often do not appear until the condition becomes a significant health issue. Common symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Confusion and/or fatigue</li>
                                <li>• Severe headache</li>
                                <li>• Chest pain</li>
                                <li>• Problems in vision</li>
                                
                            </ul>
                            <ul className="text-gray-700 space-y-1">
                                <li>• Presence of blood in urine</li>
                                <li>• Irregular beating of the heart</li>
                                <li>• Problems breathing properly</li>
                                <li>• A pounding sensation in your ears, neck, or chest</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            You may have hypertension without noticing symptoms, yet it can still damage your heart and arteries. If you or someone you know experiences these symptoms continuously, seek medical help promptly.
                        </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While a healthy diet and regular exercise help manage hypertension, they are not enough to maintain optimal health. Supplements can aid in managing hypertension and reducing symptoms, but they should not replace prescribed treatments. Natural products are not always safe and may cause adverse reactions, so consult your doctor before starting any supplements.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with hypertension:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Sarsaparilla */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Sarsaparilla</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Long used by Native Americans for various conditions, sarsaparilla contains saponins, which have a diuretic effect, promoting healthy blood pressure regulation and reducing the risk of congestive heart failure.
                                    </p>
                                </div>

                                {/* Bilberry */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bilberry</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Bilberries provide anthocyanins and polyphenols, which reduce the impact of metabolic disorders and diet-induced high blood pressure, helping maintain healthy blood pressure levels.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Garlic */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Garlic</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Garlic supplies allicin, a compound that lowers high blood pressure. Studies show that 10mg of allicin daily can reduce diastolic pressure by 5.0mm Hg and systolic by 11mm Hg in 1 to 3 months.
                                    </p>
                                </div>

                                {/* Green Coffee Bean */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Green Coffee Bean</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Rich in chlorogenic acid, green coffee beans help lower both systolic and diastolic blood pressure levels, offering a safe and effective natural remedy for hypertension.
                                    </p>
                                </div>
                            </div>

                            {/* Hawthorn */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hawthorn</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Used for years in herbal medicine, hawthorn supports heart and blood vessel health, improving both high and low blood pressure levels for better cardiovascular function.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing hypertension, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Hypertension;