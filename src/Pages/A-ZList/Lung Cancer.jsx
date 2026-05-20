import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const LungCancer = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Lung Cancer</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Lung Cancer</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• The greatest threat of developing lung cancer comes from smoking cigarettes.</li>
                            <li>• There are two main types of lung cancer i.e. small cell and non-small cell lung cancer.</li>
                            <li>• The disease is usually diagnosed at an advanced stage due to which the survival rate of patients, whose lung cancer is at a stage where it cannot be operated, is only about 4%.</li>
                        
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Lung Cancer is one of the most prevalent types of cancers all over the world. Although there are other types of cancers that are also highly common, lung cancer is the cause of majority of cancer deaths. This is mainly because it shows no signs and symptoms during the early stage of the disease and thus it remains undiagnosed until it reaches the advanced stage. According to a research, more people die of lung cancer than prostate, breast, colon, and ovarian cancer combined.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Lung cancer cans start in any part of our respiratory system i.e. in lungs, bronchi, alveoli (commonly called air sacs) or trachea (known as windpipe).
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Smoking is considered the leading cause of lung cancer. According to an estimate, 86% of people who develop the disease are linked to smoking (direct or indirect).
                        
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        While the disease can be broadly classified into two major types i.e. small cell lung cancer and non-small cell lung cancer, each can be further divided into various kinds. Overall, lung cancer can be of more than 20 different kinds.
                        
                        </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        As mentioned above, a person suffering from lung cancer does not usually experience any signs and symptoms at an early stage. Only when the disease reaches to an advanced stage, it starts showing symptom. These include:

                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Persistent cough</li>
                                <li>• Shortness of breath</li>
                                <li>• Wheezing</li>
                                <li>• Coughing up blood, called hemoptysis.</li>
                                <li>• Hoarseness</li>
                                <li>• Continuous chest pain</li>
                                <li>• Weight loss for no apparent reason and/ or loss of appetite</li>
                                <li>• Unexplained fatigue</li>
                                <li>• Repeated chest or respiratory infections</li>
                                

                            
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
                        Less common symptoms of lung cancer that do not really seem to be related with the disease, caused by hormones produced by some of the cancer cells, include:
                            </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Feeling weak, drowsy, confuses and dizzy</li>
                                <li>• Weak muscles</li>
                                <li>• Blot clots formation</li>
                                <li>• Difficulty completing tasks</li>
                                <li>• Short temper</li>
                                <li>• Feeling numbness or pins in toes and fingers.</li>
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
                        While eating a healthy diet and regular exercise may help manage lung cancer, it is not enough to keep you fit and healthy. Supplements are essential for managing lung cancer and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for lung cancer. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        The following supplements are proven to benefit people with lung cancer:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    
                                Earthsweet’s Chewables Methylcobalamin Vitamin B12 1000 Mcg Tablets</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    The raspberry flavored capsules that are rich in vitamin B12, gets quickly absorbed in human body and provides relief from depression, stress, anxiety, fatigue, and lung cancer, to name a few.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Lycopene 20 Mg Softgels</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Lycopene is found to be really effective for decreasing the risks of developing heart diseases and various types of cancer, such as that of lung, pancreas, bladder, ovaries, breast, colon, and prostate. To manufacture Lycopene 20 mg softgels, Bluebonnet imports finest quality tomatoes from Israel and extract the naturally occurring lycopene from them. Licorice root or Gan Cao helps providing relief from symptoms of lung cancer, such as shortness of breath and persistent cough.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Thyme</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Thyme is a highly popular herb that is used in cooking and in manufacturing a variety of medicines. In addition to help against skin problems, arthritis, and diarrhea, thyme is highly useful against bronchitis, severe and persistent cough. It is also known to have cancer-fighting properties.
                                        </p>
                                   
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Turmeric, also known as wonder spice, is a natural medicine that fights against various diseases. In lung cancer, turmeric kills lung cancer cells, prevents metastasis, and prevents tumor formation. Also, it prevents mutations to occur in cells that cause lung cancer.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                Standardized Ginger Root Extract Vcaps</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                Ginger root has soothing properties and thus, provides relief from continuous cough, shortness of breath, wheezing, hoarseness and the chest pain. Standardized Ginger Root Extract Capsules by Bluebonnet has gingerols, which is the active ingredient in ginger.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing lung cancer, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default LungCancer;