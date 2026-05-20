import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const NauseaRelief = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Nausea Relief</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Nausea Relief</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Nausea isn’t a disease or condition but usually a symptom of some underlying disease.</li>
                            <li>• Morning sickness, a kind of nausea and vomiting affects more than 50% of all pregnant women around the globe.</li>
                            <li>• Nausea is most commonly caused by problems in the spinal fluid, brain, abdominal and pelvic organs etc.</li>
                            <li>• Nausea can be caused due 700+ reasons.</li>
                            <li>• Medications used to treat nausea and vomiting are called antiemetics.</li>
                            <li>• Nausea mostly occurs after a surgical procedure.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The uneasiness many experience right before they vomit is known as nausea. Vomiting can be referred to as the after-affect of nausea following which, the symptoms of nausea usually decline or ward off completely. When one vomits, they empty their stomach contents via mouth. Nausea isn’t a disease or health condition itself but a symptom of some other underlying problem.  These problems may include early pregnancy, intense pain, food poisoning, stress, overeating, ulcers, brain tumors, toxin injection, brain injury heart attack, gallbladder diseases etc.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Everyone, from an adolescent to an elderly, can feel nauseous and vomit. To be noted, nausea doesn’t always end up as vomit. One may continue to feel light-headed for hours or until consuming medication. Nausea isn’t life-threatening although if accompanied by blood or very frequent, one must head straight for a checkup with their physician.
                        </p>
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Since it is already a symptom, the feeling of nausea can be very difficult to describe. It isn’t painful but very discomforting. It is often accompanied by smelly burps and a burning sensation in the throat. Many even complain of bloating or tightness in the chest and stomach. So based on this description, one can say that nausea depicts the following symptoms:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Discomfort</li>
                            <li>• Bloating</li>
                            <li>• Burning sensation in the esophagus</li>
                            
                        </ul>
                            
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These symptoms are the body way of preparing itself to empty the stomach to vomit. Before  a vomit
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• the ring between the stomach and the esophagus relaxes</li>
                            <li>• The diaphragm and the abdominal muscle contract</li>
                            <li>• The larynx (windpipe) closes  </li>
                            <li>• The lower part of the stomach contracts</li>
                            
                        </ul>
                            
                        </div>
                        <p className='pt-4'>
                            And the vomit happens.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage nausea, it is not enough to keep you fit and healthy. Supplements are essential for managing nausea and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for nausea. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
\                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with nausea:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginger</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        For thousands of years, people have been using ginger as a natural remedy to treat nausea, body aches, common colds and morning sickness. There are a number of ways one can incorporate or increase the use of ginger in their diets. It can be infused into teas, cooked as a spice or eaten raw as garnish in salads. Whichever way one chooses to use it, it will help provide nausea relief.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chamomile</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Considered a safe plant, chamomile is an instant nausea relief provider as it is most effective to treat stomach aches. It can also be used a mild sedative to treat a number of heath conditions including nausea. When used with other products, it can ease an upset stomach, relief bloating and make vomiting less discomforting.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Clove</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        An herb whose oils, flower buds, stems and leaves are used in making medicine. Clove is one of the safest and quickest ways to calm and upset stomach. It can also be used as an expectorant.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Ginseng, Red Chinese</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        A highly recommended herbal medication, Ginseng enjoys an almost magical reputation for promoting longevity, improved health, treatment for depression, nervousness, inflammations and of course, nausea. With uncountable benefits, when used for nausea relief, it helps lessen the burning sensation, making it less discomforting when vomiting.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cayenne</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Commonly known as paprika, cayenne pepper is most commonly used as a fat burner. However it does help relieve the symptoms an uneasiness one experiences during nausea providing relief. As effective as any other over-the-counter medication, cayenne can be infused into herbals teas for instant nausea relief.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing nausea, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default NauseaRelief;