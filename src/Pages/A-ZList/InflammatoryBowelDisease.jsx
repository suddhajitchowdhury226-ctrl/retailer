import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const InflammatoryBowelDisease = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Inflammatory Bowel Disease</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Inflammatory Bowel Disease</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• A research conducted in 2014 found that around 1.6 million people were suffering from IBD in the United States alone.</li>
                            <li>• The same study found out that about 70,000 people in the US are diagnosed with IBD every year.</li>
                            <li>• IBD is also widespread among children. Approximately 80,000 children were suffering from it in 2014.</li>
                            <li>• The exact cause of IBD is unknown, but genetics, some problems with the immune system and certain environmental factors are found to play role in causing the disease.</li>
                            <li>• The Crohn’s and Colitis Foundation of America (CCFA) found that more than 160 genes are associated with Inflammatory Bowel Disease.</li>
                            <li>• People suffering from Crohn’s disease and/or ulcerative colitis face an increased risk of developing bowel cancer.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Inflammatory Bowel Disease (IBD) is an umbrella term used for diseases caused by the inflammation of some parts or the entire digestive tract.                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            While there are many diseases that come under IBD, the most commonly occurring are Crohn’s disease and ulcerative colitis.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Crohn’s disease is the inflammation of the lining of digestive tract that can affect some or all organs of the digestive system. But mostly it causes the inflammation of the intestines, usually large.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            On the other hand, ulcerative colitis affects the colon, causing long-lasting and severe inflammation and ulcers in its innermost lining. It may also affect rectum.
                        </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Both the ulcerative colitis and Crohn’s disease are chronic diseases. Their symptoms vary from person to person and can also change with time. Patients may also go through alternative periods of remission, when they do not experience any symptoms and it becomes a silent disease, and flare-ups; when it is active.
Some common symptoms of Inflammatory Bowel disease are:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Diarrhea</li>
                            <li>• Irregular bowel habits</li>
                            <li>• Rectal bleeding</li>
                            <li>• Abdominal/ belly pain or cramping</li>
                            <li>• Constipation</li>
                            <li>• Loss of appetite</li>
                            <li>• Weight loss (unintended)</li>
                            <li>• Fever</li>
                            <li>• Anemia</li>
                            <li>• Fatigue</li>
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
                            While eating a healthy diet and regular exercise helps to manage Inflammatory Bowel Disease, it is not enough to keep you fit and healthy. Supplements are essential for managing Inflammatory Bowel Disease and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Inflammatory Bowel Disease. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Inflammatory Bowel Disease:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Turmeric</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Turmeric is a powerful natural ingredient that has long been used for curing various health issues. Turmeric not only works as a great anti-coagulant and anti-depressant, but also has amazing anti-inflammatory properties which help in alleviating pains, gastrointestinal disorders and inflammatory bowel disease. Turmeric is also a natural anti-biotic.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Aloe Vera Plus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Aloe Vera plant has been used in ayurveda for various purposes due to its amazing medicinal properties. Aloe Vera Plus contains pure Aloe Vera extract and thus, it has all the benefits that the plant has to offer. It helps relieving inflammation and thus, works great for ulcerative colitis, constipations, ulcers and many other types of problems of the digestive tract. Additionally, it also helps managing diabetes, asthma, and in curing certain types of allergies and viral infections. Aloe Vera Plus also contains ‘grape seed extract’, which is an amazing anti-oxidant.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Omega-3 Fish Oil Liquid</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Omega 3 fatty acids not only help relieving inflammation, but are also known for preventing Crohn’s disease. Fish oil is probably the best natural supply of Omega 3 and really helps in inflammatory bowel disease. Omega 3 Fish Oil liquid contains natural fish oil that is molecularly distilled and hence, it is free from all harmful chemicals or contaminants.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Curcumin Phytosome Veg Capsules</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        According to research studies, Curcumin not only helps in managing the symptoms of inflammatory bowel disease, but also reduce the need for taking medicines. Scientists are of the view that Curcumin can also help in preventing and treating variety of colon diseases. These include cancer, Crohn’s disease and ulcerative colitis. Curcumin also helps reducing metabolic stress. Curcumin is naturally found in turmeric root.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Marshmallow</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    This may come as a surprise to many that marshmallow plant is an amazing natural cough suppressant (antitussive), and anti-bacterial. Leaves and roots of the plant have mucilaginous properties which help in treating inflammation, stomach ulcer, gastrointestinal mucosa, and many digestive disorders. Marshmallow plant also helps in relieving Crohn’s disease, ulcerative colitis and indigestion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Inflammatory Bowel Disease, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default InflammatoryBowelDisease;