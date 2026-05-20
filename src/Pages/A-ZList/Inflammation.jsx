import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Inflammation = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Inflammation</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Inflammation</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Although many theories and studies have been devoted to these subject matters, scientists still don’t know what causes inflammation in the first place.</li>
                            <li>• In the simplest of terms, inflammation can be defined as the body’s attempt to self-protect and fight harmful stimuli.</li>
                            <li>• A major portion of the population worldwide suffers from inflammation but since it is derived from a number of different diseases, one’ can’t be sure of the statistics.</li>
                            <li>• The process of inflammation has four stages. The first stage is the irritation stage where the body alerts itself about hr harmful stimuli.</li>
                            <li>• The second stage is the inflammation stage where the body tries to heal itself.</li>
                            <li>• It is then followed by the suppuration stage where the body tries to get rid of the harmful bacteria by discharging it out in the form of pus.</li>
                            <li>• The last stage is the granulation stage where the body forms tiny round masses of tissues.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The word inflammation has been derived from the Latin word inflammo which means to ignite or alight. During the process of inflammation, the white cells in one’s body produce substances that protect foreign organisms and fight bacteria from entering the body or causing harm.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            However, it isn’t always a good sign. When a person suffers from diseases like arthritis, the body’s immune system triggers a response (inflammatory) even when the body hasn’t been infected by any foreign invaders. In such autoimmune disease, the body mistakes its own tissues for causing harm and as a result, tries to remove them.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            During this process, while blood cells get released into the blood, signaled by the immune system, and fights its own tissues, causing injury or an infection. The tissue, upon damage, becomes red, and at times, even swells up due to the leakage of blood into them. Once swollen, it can be the cause of severe pain in the nerves and limit one’s ability to perform daily activities.
                                </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The symptoms of inflammation may vary from person to person, depending on what disease causes it in the first place. If the inflammation has been caused by arthritis, it may depict these following symptoms:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Redness</li>
                            <li>• Joint pain</li>
                            <li>• Swollen joints</li>
                            <li>• Loss of joint function</li>
                            <li>• Joint stiffness</li>
                            
                        </ul>
                        
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Other more generalized symptoms include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Fever</li>
                            <li>• Muscle stiffness</li>
                            <li>• Chills</li>
                            <li>• Headaches</li>
                            <li>• Fatigue</li>
                            <li>• Loss of appetite</li>
                            
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
                            While eating a healthy diet and regular exercise helps to manage inflammation, it is not enough to keep you fit and healthy. Supplements are essential for managing inflammation and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for inflammation. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with inflammation:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cinnamon</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cinnamon –a spice that we all sprinkle on toasts and our lattes. Its scent is infused in perfumes and essential oils to rejuvenate the mind. But for those who don’t know it is also a potent all-natural remedy to treat cases of inflammation. Many lab studies praise its effectiveness in reducing inflammation and fighting off bacteria.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Feverfew</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        When inflamed, feverfew efficiently helps reduce the pain. Its anti0-inflammtory properties provide instant throughout the body. It even inhibits platelet clustering and thins blood as a result. Its extract is extensively used in medicines for joint pains and arthritis.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginger</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Ginger is one time-honored herbal remedy that has been used to treat nearly all health conditions. Its effectiveness is most potent in reducing inflammation whether consumed raw, infuse din herbal teas or blended with other spices in food, it helps remove harmful toxins from the body. When there aren’t any harmful bacteria, the immune system doesn’t get wrongly triggered.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Elderberry Plus (Sambucus)</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The fruit of elder tree, elderberry has medicinal properties that are known to reduce swelling, combat inflammation and boost one’s immune system.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Holy Basil</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Also known as Tulsi, Holy basil has been used for centuries in many Asian curries. Its plant has been regarded as possessing Ayurvedic benefits. It is most commonly used in countries like India to fight inflammation, asthma, arthritis, digestive disorders and a number of other skin-related diseases.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing inflammation, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Inflammation;