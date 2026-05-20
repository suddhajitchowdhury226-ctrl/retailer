import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const NasalHealth = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Nasal Health</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Nasal Health</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Some people lose their sense of smell simply because of the viral coldn while others are born without it.</li>
                            <li>• The sneezing fit triggered by dust mites, cockroaches and animal dander is a condition called a Perennial allergic rhinitis</li>
                            <li>• Sinus diseases afflicts 31 million citizens of the USA</li>
                            <li>• The taste of food would have been hard to detect without the nasal cavity</li>
                            <li>• One of the rarest cancers are of nasal cavity which 2000 US citizens contract every year</li>
                            <li>• Men are more at risk of contracting this cancer than women.</li>

                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Nasal health conditions are one of the most widespread diseases all over the world and even though they are not always harmful or chronic, they are the reasons behind most of the visits to the doctor. The high risk factor of nasal health is to those who suffer from asthma, blockage, and weak or underdeveloped immune system. 
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Nasal health conditions include inflammation of the sinuses which is mostly caused by some infection from bacteria and germs. One of the most common reasons of nasal and issue is the deviated septum and one of the major reasons behind loud snoring. Another reason for nasal and sinus condition is the narrow passage of the sinus some people are born with. Those with super sensitive sinus and nasal cavity also suffer from allergies most often and are always seen with a red and swollen nose.
        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        While most of the time, the nasal conditions are harmless it is still necessary to visit the doctor to have it checked. Some chronic nasal diseases also include tumors and cancer in the nose.
                        
                        </p>


                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Nasal conditions are very closely related to sinusitis and the symptoms of the disease also match. In any case, even a regular flue or cold should not be ignored and must be checked by the doctor to ensure they it is nothing more than a passing cold.

                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Following are the symptoms of nasal infections and diseases:
                        </p>


                        <div className="grid grid-cols-1 md:grid gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• bad cold</li>
                                <li>• runny nose</li>
                                <li>• blocked nose</li>
                                <li>• headache</li>
                                <li>• Facial pain</li>
                                <li>• Nasal Congestion</li>
                                <li>• Trouble in passing it through nose</li>
                                <li>• Pain in the upper teeth</li>
                                <li>• Hay fever</li>
                                <li>• Catarrh</li>
                                <li>• Poor smell and a bitter aftertaste in the mouth</li>
                                <li>• When the blocked or runny nose is accompanied with wheezing bronchitis rashes and vomiting, it could be milk allergy</li>

                                <p className="text-gray-700 leading-relaxed mb-4 pt-4" >
                            Some allergies from food can also cause nasal condition.
                            </p>
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


                        
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage Nasal health, it is not enough to keep you fit and healthy. Supplements are essential for managing Nasal health and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Nasal health. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements have proven to benefit people with Nasal health:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Pleurisy</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Pleurisy Root is a lung friendly plant that creates various respiratory conditions from lungs to the nasal. This herbal supplement is name after the disease it was most effective in. Pleurisy roots provide a quick remedy against cold and helps secrete sputum to treat the dry and wet coughs effectively. This natural supplement is also costumed to soothe and unblock blocked nose.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cough Relief</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    In acute and chronic cough, a person suffers from nasal congestion and barking cough and discharge. Cough relief, provides a quick and effective remedy for various kinds of coughs as well as unblock the nasal cavity at the same time. From cold cough to smoker’s cough, cough relief provides therapeutic effect.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Sinus Blaster</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Sinus Blaster acts like a magic potion to those suffering from bad cold and sinus. Sinus Blaster is papered using formulas with overpowering smell and aromatic compounds. These compounds are vapors which reach the sinuses through nasal passage and open them to make it easier to breath. Sinus Blaster also helps when traveling to high altitude. This naturally prepared concoction is also used in case of nasal swelling, snoring and inflammation.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Yin Chiao Plus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    A formula prepared using four antiviral herbs like Isalis, lIex, Lonicera and Forsythia is best to nib the evil in the bud. Yin Chiao Plus is used at the first sight of blocked nasal passage or a runny one. Stuffy nose, sore throat, heavy head and aching joints are indication of a fever coming and at that stage it is most smart to consume Yin Chiao Plus to stop the fever from spreading.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea Angustifolia Root
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Echinacea is a plant with some very potent natural antibiotics. This plant root is antiviral, antiseptic and antifungal and these properties combine together to make it a very effective supplement to consume in case of viral infection that often victimize our noses first.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing Nasal health, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default NasalHealth;