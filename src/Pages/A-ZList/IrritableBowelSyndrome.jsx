import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const IrritableBowelSyndrome = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Irritable Bowel Syndrome</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Irritable Bowel Syndrome</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Each year, 25 to 45 million people in the US are affected by irritable bowel syndrome.</li>
                            <li>• Out of these, 40% of the population suffers from a mild case of IBS, 35% from moderate IBS and 25% from a severe case of IBS.</li>
                            <li>• The symptoms of IBS are experienced by almost 20% of US population.</li>
                            <li>• Women are more likely to suffer from IBS as compared to men. The prevalence ratio is 1.5 to 3 times higher and the majority of females with IBS are working women.</li>
                            <li>• Anyone can be affected by IBs however; individuals at the highest risk of suffering from one are aged somewhere in between 25-50.</li>
                            <li>• Each year, nearly 3.5 million people seek medical assistance complaining of an irritable bowel.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Irritable Bowel Syndrome (IBS) is a disorder that distresses the large intestine. IBS is known to cause bloating abdominal cramps and an irregular change in bowel habits. Some experience constipation, others diarrhea, and a few unlucky go forth between both. Notwithstanding, irritable bowel syndrome isn’t life-threatening and doesn’t cause harm to the intestines.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Although, the actual cause of IBS is still unknown, many medical experts believe that the syndrome is linked to an increased sensitivity of the gut and trouble digesting food. IBS can happen to anyone, however, the people almost risk include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Men and women under the ages of 40</li>
                            <li>• Females</li>
                            <li>• Men and women with a family history of the condition</li>
                            <li>• Men and women who suffer from some mental disorder like depression or have had a history of some traumatic incident like child sexual abuse.</li>
                            
                        </ul>
                            
                        </div>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Although the symptoms if an irritable bowel syndrome may vary from individual to individual there are some common symptoms experienced by many. The need for correct diagnoses is important as many a times an irritable bowel is an indication of some underlying medical condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Most common signs include:
                            </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Change in bowel habits</li>
                            <li>• Excess gas</li>
                            <li>• Abdominal pain and cramps</li>
                            <li>• Bowel isn’t emptied after a visit to the toilet</li>
                            <li>• Mucus passing from the rectum</li>
                            <li>• Urgent need to use the restroom</li>
                            <li>• Abdominal bloating and swelling</li>
                        </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                                While the above listed symptoms could possibly be the telltale signs of cancer, it doesn’t always have o be so. However, it is still recommended to consult a doctor at the first signs of appearance. If these conditions are persistent, make sure you get yourself screened for cancer.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage irritable bowel syndrome, it is not enough to keep you fit and healthy. Supplements are essential for managing irritable bowel syndrome and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for irritable bowel syndrome. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with irritable bowel syndrome:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bacopa</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Sometimes, referred to as the water pill, bacopa has been used as a traditional herbal remedy to treat a number of health conditions including irritable bowel syndrome. Its regular intake also boosts memory, relives anxiety and fights multiple allergic reactions. It especially works wonders when taken to treat an irritable bowel.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cat's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Also known as Una De Gato, cat’s claw is a vine used in traditional Peruvian medicine to treat digestive disorders, especially an irritable bowel syndrome. Its consumption provides instant relief against discomfort and pain experienced during an irritable bowel syndrome.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hops</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The extract from the plant is an effective all-natural way to treat multiple digestive problems including an irritable bowel. It has been extensively used in TCM to cure bowel problems. Its frequent intake also helps in treating sleeping disorders, hyperactivity, crural ulcers, toothaches, earaches, hysteria and fits etc.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Artichoke</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        the roots, leaves and stem of the plant is used to make extracts that are alter infused into a number of medicines to treat many heath disorders including an irritable bowel syndrome. Artichoke is also beneficial when one suffers from kidney problems, water retention, anemia, and bladder infections
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Skullcap</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    People use skullcaps to get instant relief from pain and discomfort. Skullcap allows the nerves to calm nerves, relieve pain, irritation or discomfort caused during menstrual cramps, irritable bowel syndrome and muscle spasms etc.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing irritable bowel syndrome, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default IrritableBowelSyndrome;