import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Lupus = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Lupus</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Lupus</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Lupus is a chronic, byzantine and a very widespread disease that can affect nearly all of the body parts at once.</li>
                            <li>• Despite being so prevalent, the common knowledge and awareness about lupus is lacking greatly</li>
                            <li>• More than 90% patients of lupus are women</li>
                            <li>• People of color are more likely to get lupus</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        When our body’s immune system backfires and instead of attacking the harmful viruses, ends up attacking our own healthy organs and tissues, it is called an autoimmune disease. And one of them is called Lupus. Lupus sets off inflammation in different tissues of our body and ends up affecting the body’s internal parts and organs.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        There are four different kinds of Lupus:
        
                        </p>
                        <h2 className="text-2xl font-bold mb-6">Drug-induced Lupus:</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        When the dose of certain medications is consumed in high amount this autoimmune disease is contracted. They can be treated immediately by stopping the usage of the drugs and medications.
                        </p>

                        <h2 className="text-2xl font-bold mb-6">Systematic Lupus:</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        This is the most common kind of lupus and attacks organs like heart, lungs, kidneys mad brain.
                        </p>
                        <h2 className="text-2xl font-bold mb-6">Cutaneous Lupus:</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        This form of Lupus is skin deep and visibly affects the skin of the patients.
                        </p>
                        <h2 className="text-2xl font-bold mb-6">Neonatal Lupus:</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        This form of Lupus is rare in which the fetus is affected by the mother’s antibodies and may end up with conditions like skin rash and liver problems.
                        </p>

                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Symptoms of the lupus can be felt at once due to inflammation but there are also various indirect symptoms that can indicate of a disease like Lupus. Such as:

                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Headaches</li>
                                <li>• Shortness Of Breath</li>
                                <li>• Chest Pains</li>
                                <li>• Fever, Seizures And Stroke</li>
                                <li>• Insomnia</li>
                                <li>• Blurred Vision And Dry Eyes</li>
                                <li>• Memory Loss And Confusion</li>
                                <li>• High Blood Pressure And Heart Diseases</li>
                                <li>• Kidney Damage</li>
                                <li>• Lung Damage</li>
                                <li>• Infections</li>
                                <li>• Anemia</li>
                                <li>• Joint Pain</li>
                                <li>• Muscle Aches</li>
                                <li>• Skin Rashes And Sunburns </li>
                            
                            </ul>
                            
                            {/*<ul className="text-gray-700 space-y-1">
                                <li>• Hot temper</li>
                                <li>• Poor planning</li>
                                <li>• Difficulty following through</li>
                                <li>• Difficulty completing tasks</li>
                                <li>• Short temper</li>
                                <li>• Difficulty coping with stress</li>
                            </ul>*/}

                        </div>


                        <p className="text-gray-700 leading-relaxed mb-4 pt-4" >
                        If the complications in lupus are too high then the risk of death is higher otherwise people live a healthy life even with Lupus with proper care and awareness.
                            </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage Lupus, it is not enough to keep you fit and healthy. Supplements are essential for managing Lupus and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Lupus. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Lupus:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Turmeric Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Turmeric is one of the nature’s best anti-inflammatory herbs. Turmeric Veggie cap has the effective ability to keep naturally occurring levels of cortisone at higher blood levels and consequently creating an anti-inflammatory effect. Because lupus causes inflammation in the body, turmeric fights takes it head on by keeping the inflammation down and it is done by regulation of the activities of inflammatory agents and the pathways triggered in immune cells.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Astragalus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    To maintain the immune system and keep it functioning at its very best, for centuries, people have been using Astragulus. This natural herb works non-stop to keep the immune system stimulated and fills the gap wherever the immune system is lacking. However caution and proper consultation from the doctor should be taken before using Astragulus.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Used abundantly in the ancient Indian medical practices of Ayurveda, Ashwagandha is one of the most excellent herbs to use in case of immune breakdown. It is used for rejuvenation purposes when a disease or sickness has caused weakness. It works exclusively to treat lupus as it encourages the immune system to self modulate.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">White Willow</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    White Willow has remained a prime herbal remedy for the people past. The brake tinctures of White Willow has strong anti-inflammatory properties and help curb down the negative effect of lupus and its inflammation, At the same time, this natural supplement also works as an herbal aspirin and analgesic that provides comfort in case of joint pain, lower back pain and other painful conditions caused in the early stages of lupus.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Green Tea</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Individuals and communities with a high intake of green tea are found with lower cases of lupus. It’s because the natural leafs are potently antioxidants with anti-inflammatory properties. The two properties combine together to keep the inflammation form lupus down. Applying it topically in skin also helps with rashes that appear because of lupus.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing lupus, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Lupus;