import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const MensHealth = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Men's Health</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Men's Health</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• According to research, out of the top 15 major causes of death, men are ahead of women in all except Alzheimer’s disease.</li>
                            <li>• According to the statistics of National Center for Health, cancer, cardiovascular disease and accidents are leading causes of death in men.</li>
                            <li>•  In the U.S., Prostate cancer is the third leading cause of cancer deaths after lung and colorectal cancer.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                        American Journal of Men’s Health’s Editor in Chief Demertrius Porche says that health comes at last on the priority list of most men.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        This is why they are found to be living less healthy lives than women. The leading causes of deaths in men, as identified by the Centers for Disease Control and Prevention, are cardiovascular disease, cancer, accidents, chronic lower respiratory disease and stroke.
        
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                        Among cancers, the most prevalent are lung, colorectal and prostate cancers. Some research studies found prostate cancer as the second, while others claim that it is the third leading cause of death in men. In both cases, it poses great risk to men’s health.
                        
                        </p>
                        
                            <p>However, the good news is that prostate cancer is not always fatal and in many cases, it does not spread to other parts of the body. This is what makes it different from other types of cancer. Most prostate cancers are “adenocarcinomas” and develop from the cells that produce the prostate fluid. Although very rare, but there are some other types of prostate cancer as well:</p>
                            <ul>
                            <li>• Small cell carcinomas</li>
                            <li>• Sarcomas</li>
                            <li>• Transitional cell carcinomas</li>
                            <li>• Neuroendocrine tumors</li>
                            
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Following symptoms could be indicators of various health problems that are common among men. Therefore, it is recommended to never ignore any of these:

                        </p>
                        <div className="grid grid-cols-1 md:grid gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Chest pain</li>
                                <li>• Shortness of Breath</li>
                                <li>• Hair loss. It could be due to lupus, thyroid disease or any other serious problem for men’s health</li>
                                <li>• Erectile dysfunction</li>
                                <li>• Fatigue</li>
                                <li>• Dizziness</li>
                                
                            
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


                        <h2 className="text-2xl font-bold text-gray-800 mb-6 pt-4">Symptoms of Prostate Cancer</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                        Following symptoms could be indicators of various health problems that are common among men. Therefore, it is recommended to never ignore any of these:

                        </p>
                        <div className="grid grid-cols-1 md:grid gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Blood in urine. It is the major symptom of prostate cancer</li>
                                <li>• Difficulty urinating</li>
                                <li>• Loss of bladder control</li>
                                <li>• Frequent urge to urinate, particularly at night</li>
                                <li>• Pain or burning during urination</li>
                                <li>• Erectile dysfunction</li>
                                <li>• Numbness or pain in bones, legs and/or feet</li>
                                
                            
                            </ul>

                        </div>
                        


                        
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        While eating a healthy diet and regular exercise helps to manage Men’s Health, it is not enough to keep you fit and healthy. Supplements are essential for managing Men’s Health. But it should be kept in mind that supplements should not be used to replace any treatment. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                        
                        The following supplements have proven to benefit Men’s Health:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Saw Palmetto</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Saw Palmetto is a multipurpose supplement to foster men’s health. It not only helps maintaining the balance of male hormones by supporting and strengthening the functioning of glandular system, including the prostate gland,but also improves the functioning of immune system. Saw Palmetto is especially highly useful for men who are 40 years old or above.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Damiana</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    Damiana was traditionally used in Aztec culture as an aphrodisiac. They are used for improving the functioning of glands in men and also offer relief from stress.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    Men's Formula</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    This Men’s formula contains ‘lycopene’ along with a variety of other nutrients that are needed by men. It promoted prostate health by providing the glands with all the needed nutrients. It also contains zinc in exactly the same amount as needed by men per day.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">
                                    PS II</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                    A combination of trace minerals and other essential nutrients that are needed for smooth functioning of male glandular system makes these capsules highly effective for maintaining healthy prostate glands.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">X-A</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                X-A capsules contain a unique combination of many natural herbs, such as sarsaparilla root, garlic bulb, capsicum fruit, gotu kola aerial parts, parthenium root, horsetail stem, damiana leaves etc., making it an amazing product for maintaining healthy glands and hormonal balance in men.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                        The above natural supplements are known to help in controlling and managing Men’s Health, but you should exercise proper caution and ask your doctor before adding any such supplements list in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                    
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default MensHealth;