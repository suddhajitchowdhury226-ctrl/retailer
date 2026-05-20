import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const HuntingtonsDisease = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Huntington’s Disease</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Huntington’s Disease</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• As of 2012, around 30,000 people in the United States suffer from Huntington’s disease, while 150,000 to 200,000 others are at risk of inheriting it from their parents.</li>
                            <li>• The disease is most common among Europeans, affecting 3 to 7 out of every 100,000 people of European ancestry.</li>
                            <li>• The disease is less common among Japanese and African Americans.</li>
                            <li>• Every child born to a parent with Huntington’s disease has a 50% chance of inheriting the disease gene.</li>
                            <li>• Symptoms typically start appearing in a person’s 30s or 40s.</li>
                            <li>• The average lifespan of people with the disease is 15–20 years.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Huntington’s disease is a chronic genetic disorder that causes gradual damage and degeneration of nerve cells. It affects movement, cognition, thinking, and behavior, eventually making individuals dependent on others.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            As an autosomal dominant disease, Huntington’s is caused by a mutation in a single gene, HD or HTT, located on chromosome 4. This mutation leads to the production of an abnormal Huntington protein, which impairs nerve cell function.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            While the exact role of the Huntington protein remains unclear, it is critical for nerve cell development. As a genetic disorder, there is currently no cure for Huntington’s disease.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Huntington’s disease typically manifests in a person’s 30s or 40s, though it can appear earlier or later. In rare cases, it affects children, known as the juvenile form. The disease causes cognitive, movement, and psychiatric issues, with common symptoms including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Contraction or rigidity of muscles</li>
                                <li>• Writhing movements or involuntary jerking</li>
                                <li>• Difficulty in swallowing</li>
                                <li>• Problems in speech</li>
                                <li>• Impaired balance, posture, and walk</li>
                                <li>• Abnormal or slow eye movement</li>
                                <li>• Feeling irritated or down</li>
                                <li>• Insomnia</li>
                                 <li>• Feeling tired and exhausted</li>

                            </ul>
                            <ul className="text-gray-700 space-y-1">
                                                            
                                <li>• Suicidal thoughts</li>
                                <li>• Issues with focusing, prioritizing, or organizing tasks</li>
                                <li>• Slowed thought process</li>
                                <li>• Difficulty finding words while speaking</li>
                                <li>• Impaired ability to learn and memorize</li>
                                <li>• Mood swings, personality changes</li>
                                <li>• Impaired judgment</li>
                                <li>• Significant weight loss</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While a healthy diet and regular exercise help manage Huntington’s disease, they are not sufficient for overall health. Supplements are essential for managing symptoms, but they should not replace prescribed treatments. Natural products are not always safe and may cause adverse reactions, so consult your doctor before starting any supplements.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Huntington’s disease:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Acetyl L-Carnitine */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Acetyl L-Carnitine 500 mg Vegetable Capsules</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Acetyl L-Carnitine is an essential amino acid that supports energy production and is highly effective in addressing memory loss, mental disorders, stress, and depression, benefiting those with Huntington’s disease.
                                    </p>
                                </div>

                                {/* B-Complex 100 Vegetable Capsules */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">B-Complex 100 Vegetable Capsules</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        A rich source of B vitamins, these capsules, particularly vitamin B3, help control the brain areas affected by Huntington’s disease and improve cognitive functions.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Vitamin E */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Vitamin E</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Vitamin E supplements stimulate neurological patterns and connections, slowing the degeneration of nerve cells in patients with Huntington’s disease.
                                    </p>
                                </div>

                                {/* Green Tea */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Green Tea</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Green tea is highly effective in managing psychological effects like anxiety and stress caused by Huntington’s disease and helps prevent disease progression.
                                    </p>
                                </div>
                            </div>

                            {/* CoQ10 */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">CoQ10</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Coenzyme Q10 improves brain, kidney, liver, and heart function and is effective in both preventing and managing Huntington’s disease. Natural sources include olive oil, soybean oil, and various meats.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Huntington’s disease, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default HuntingtonsDisease;