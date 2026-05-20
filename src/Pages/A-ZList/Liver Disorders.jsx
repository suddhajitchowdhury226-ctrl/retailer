import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const LiverDisorders = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Liver Disorders</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Liver Disorders</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• There are more than 100 types of liver diseases affecting people across the globe.</li>
                            <li>• The most common types of liver diseases include cirrhosis, hepatitis A, B, & C, and liver cancer.</li>
                            <li>• There are about 30 million people in America currently suffering from some sort of live disease. That makes around 1 in every 10 people living in the country.</li>
                            <li>• Liver diseases can affect people of all ages.</li>
                            <li>• Almost 15,000 American children are hospitalized annually for pediatric liver disorders and diseases.</li>
                            <li>• Chronic liver diseases and cirrhosis account for almost 40,000 deaths in the country every year.</li>

                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        The largest organ in the human body is the liver. It functions to help the body absorb nutrients, digest food, and store energy. Another important function of the liver is to get rid of the toxins in the body that might cause a variety of health issues.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Your liver can be attacked and damaged by a series of different miscreants that may lead to different liver diseases depending on the cause. Viruses like hepatitis A, B, and C are common forms of liver diseases. In addition to that overuse of drugs, alcohol, or poisons can also lead to liver damage. At times there is formation of scar tissues on the liver following an illness, it’s known as cirrhosis. Jaundice is also one of the most commonly occurring liver disease.
                        </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        With more than 100 different types of liver diseases, the possible symptoms for each vary extensively. However, there are certain common signs that point towards a possible case of liver disease. These may include:

                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Itchy skin</li>
                                <li>• Dark colored urine</li>
                                <li>• Yellowish eyes and skin (especially in case of jaundice)</li>
                                <li>• Abdominal swelling and pain</li>
                                <li>• Swelling in ankles and legs</li>
                                <li>• Continuous fatigue</li>
                                <li>• Vomiting or nausea</li>
                                <li>• Bloody, tar-colored, or pale stool</li>
                                <li>• Susceptibility to bruises</li>
                                <li>• Loss of appetite</li>
                            
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
                        Visit a doctor in case you are experiencing one or more of these symptoms. For those of you who suffer from abdominal pain, it is advised to get immediate medical attention.
                            </p>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage Liver Disease, it is not enough to keep you fit and healthy. Supplements are essential for managing Liver Disease and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Liver Disease. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Liver Disease:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Holy Basil Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Holy Basil or Tulsi as it is often known is a commonly used ingredient in the Indian Ayurveda remedies. The herb is specially known for its properties that provide protection to the liver against various forms of damages, especially those that can lead to Hepatitis.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Dandelion</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Dandelion is yet another wonder of nature that has been found great for maintaining optimal liver health. It wouldn’t be wrong to term dandelion as a potent detoxifying agent for the liver. The specific combination of nutrients and vitamins in dandelion cleanse the liver and protect it from damage.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Turmeric is a magic herb that contains powerful antioxidant and anti-inflammatory properties that work wonders in our bodies. A recent research showed that turmeric is actually healthy for the liver as well. Turmeric protects the liver against damage and actually heals damaged livers restoring them to optimal health and function.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Cascara Sagrada</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    For years, Cascara Sagrada has been used in herbal medicine to treat liver related ailments. This natural laxative improves the liver function, allowing it to get rid of the impurities more efficiently. However, this herb may have side-effects on some people as it is sometimes not well tolerated by the system.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Dandelion</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Dandelion is one of the most potent natural remedies for maintaining and improving liver health. The herb promotes the production of bile and allows the liver to absorb and digest fat better. Dandelion can also help the liver recover from damages done by Hepatitis C.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing Liver Disorders, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default LiverDisorders;