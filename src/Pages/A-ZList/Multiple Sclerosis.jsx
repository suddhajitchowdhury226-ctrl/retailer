import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const MultipleSclerosis = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Multiple Sclerosis</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Multiple Sclerosis</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Although Multiple sclerosis is more common among women between the ages of 20 to 40, it is not limited to them only. Anyone of any age group can get affected with the disease.</li>
                            <li>• Multiple Sclerosis is diagnosed in around 200 people, each week, according to the statistics of the National Multiple Sclerosis Society. The global figure of people suffering from this brain disease has crossed two million.</li>

                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Multiple Sclerosis is a disease that affects the central nervous system (CNS), brain and spinal cord, and has the potential to cause disabilities.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        It is an auto-immune disease during which the immune system of the affected person starts attacking the protective layer of nerve fibers, called the myelin sheath. It can also eventually lead to deterioration or permanent damaging of nerves.
        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Multiple Sclerosis causes problems in the process of communication between a person’s brain and the rest of the body. Due to the damage to myelin sheath, messages send by the brain through the nerves may get blocked or slowed.
                        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        While the exact cause of Multiple Sclerosis is unknown, scientists and researchers are of the view that both environmental factors and genetics can contribute to the disease development.
                        
                        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Patients suffering from Multiple Sclerosis may go through ‘remission’ phase. It is a period during which the patient does not experience any signs or symptoms. This may confuse him/her that the disease is no longer present and may terminate treatment. However, in real, even though there are no symptoms, the disease continues to progress during the remission period.
                        
                        
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Depending upon the damage to the myelin sheath and nerves, symptoms of multiple sclerosis vary from among patients. Also, the signs and symptoms also depend upon the stage of the disease and the location of the nerve fibers that are affected. According to healthcare professionals, no two people suffering from multiple sclerosis experience the same signs and symptoms.

                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Some common sign include:
                        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Chronic infections, as the immune system cannot fend off the infection-causing bacteria.
            Continuously occurring episodes of cold and flu during the year.
        Frequent development of genital herpes and/or cold sores
        Swollen or sore lymph glands.
                        
                        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Of course, these symptoms may vary from person to person, and may occur in combination with other symptoms at times. Good thing is, the immune system can be strengthened using the right supplements and medication where necessary. Make sure you visit a doctor at the signs of weak immunity to get medical help if required.
                        
                        
                        </p>





                        
                            
                            {/*<ul className="text-gray-700 space-y-1">
                                <li>• Hot temper</li>
                                <li>• Poor planning</li>
                                <li>• Difficulty following through</li>
                                <li>• Difficulty completing tasks</li>
                                <li>• Short temper</li>
                                <li>• Difficulty coping with stress</li>
                            </ul>*/}

                    
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage Weak Immune System, it is not enough to keep you fit and healthy. Supplements are essential for managing Weak Immune System and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Weak Immune System. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        
                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    
                                    Ashwagandha</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    The root of Withania Somnifera plant, commonly known as Indian ginseng, winter cherry or ashwagandha, is the source from which this powerful supplement of Ayurveda is derived. With its numerous amazing curative and healing properties, ashwagandha has been found to act as a stimulant of immune system. Also, it strengthens the nervous system. Ashwagandha acts as an anti-oxidant. It has stress reliving and anti-inflammatory properties as well.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    While it is a common knowledge that turmeric has anti-inflammatory properties, not many people know that the golden spice also has neuro-protective properties. Thus, it can help people suffering from multiple sclerosis.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Bee Pollen</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Bee pollen, also called venom of honeybees, has been researched and tested by scientists for its benefits against multiple sclerosis. Although the research is still underway, it is believed that bee pollen is full of anti-oxidants and also has anti-microbial, anti-fungal and anti-viral properties. Some researchers claim it to be useful in preparing the body to fight against various chronic diseases by strengthening the immune system. It has also been found that bee pollen is full of enzymes, vitamins, proteins, fatty acids and minerals. Also, it helps lowering bad cholesterol, strengthening of blood vessels and in reducing inflammation as well
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Astragalus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Astagalus is an amazing natural product that has a unique combination of highly useful compounds. It not only helps strengthening one’s immune system, but also protect the heart form the negative effects of free radicals in the body, is good for liver and overall body health.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Mind-Max</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Mind – Max are herbal supplements that are made with different herbs and botanicals, including bacopa leaf, aerial parts of gotu kola, magnesium, and many other ingredients. Although this herbal supplement is good for overall health, it specifically helps promoting brain health and gives a mental boost. This is why it is really useful in all brain related problems. Also, it helps maintaining blood circulation. The only condition with this supplement is that it cannot be used by people younger than 20 years.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing multiple sclerosis, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default MultipleSclerosis;