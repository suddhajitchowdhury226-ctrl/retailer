import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const InjuriesAndBurns = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Injuries And Burns</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Injuries And Burns</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• There are four degrees of burns in which the fourth one is life threatening</li>
                            <li>• More than 3.5 million children of ages 14 and less het injured while playing sports</li>
                            <li>• Deaths by playing sports and accidental injuries are rare except for when the brain has been injured.</li>
                            <li>• Approximately 265,000 deaths occur every year as a result of burns and this happens in high concentration in middle-income countries</li>
                            <li>• Adult women and children are more vulnerable to burns than men.</li>
                            <li>• However both men and women are equally susceptible to injuries due to common causes</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            One of the most common household injuries are burns, and children and women are most likely the victims. Burns instantly damage the skin cells of a person. Depending on the degree of the burn, it can destroy muscles, tendons and even the bones of the person who got burned.
                            </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The most common causes of burns are:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Burn Injury  from hot, boiling water</li>
                            <li>• Electrical Burns</li>
                            <li>• Chemical Burns</li>
                            <li>• Excessive exposure to the sun</li>
                            <li>• Burns with fire through candles, matchsticks, lighter and flames</li>
                            <li>• Radiation</li>
                            <li>• Cold burns</li>
                        </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed gap-4">
                            An injury can be defined as any harm to your body. This harm can be brought on by car accidents, falls, weapons, and burns. Most of the times, these injuries are even self-inflicted. These injuries can range in their severity from minor to life-threatening. It could be in any form and on any part of the body. The most common ones are:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Ankle Sprains</li>
                            <li>• Bruises</li>
                            <li>• Animal bites</li>
                            <li>• Fractures</li>
                            <li>• Dislocation</li>
                            <li>• Electrical Injuries</li>
                        </ul>
                        </div>
                        
                        
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The nature of an injury and burn is such that it can hardly go unnoticed. The accidental events followed by pain and visible evidence are enough to tell the person of an injury. Following are the symptoms:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Blisters</li>
                            <li>• Red Skin</li>
                            <li>• Swelling</li>
                            <li>• Charred Skin</li>
                            <li>• Peeled skin</li>
                            <li>• Pain (however even the most severe burns can be painless)</li>
                            <li>• Shock</li>
                            <li>• Widespread thickness of skin with a leathery appearance</li>
                            <li>• Inflammation</li>
                            <li>• Waxy and white skin in case of burn</li>
                            
                        </ul>
                            
                        </div>
                        
                        <p className='pt-4'>
                               A patient with these injuries must at once be taken to the doctor for checkup. The sooner these injuries are treated, the better there are chances of survival.
                        </p>
                    </div>
                    
                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps manage Injuries and Burns, it is not enough to keep you fit and healthy. Supplements are essential for managing Injuries and Burns and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Injuries and Burns. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Injuries and Burns:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cat's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cat’s Claw has strong antioxidant properties where its barks and roots have immune boosting qualities. Its intake help heal the injuries quicker as the alkaloids in them enhance the ability of red blood cells to destroy pathogens faster and more effectively.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">InflaCalm</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        InfaCalm is not only effective for treatment of musculoskeletal injuries but helps boost up the immune system and allow enhanced recovery after surgeries and during wound healing. InfaCalm is anti-inflammatory, analgesic and antipyretic in nature and assists during the adjunctive treatments and prevention of chronic inflammatory disorders.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Chamomile</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                       Chamomile is used topically on skin for bringing down redness and swelling it also help fight bacteria that might be causing any infection or irritations on a wound and ends up expediting the recovery process. When Chamomile is used as a mouth wash it helps heal the mouth sores that appears as a result of cancer treatments and other causes.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Fenugreek</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Fenugreek is an herb with leaves of light green color, and possesses anti-oxidant, antimicrobial and ant diabetic properties. Fenugreek helps with the inflammation inside and outside the body including that of burns where tissues beneath the skin are infected and severely inflamed wounds.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Propolis</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Propolis is antimicrobial, anti-bacterial and anti-viral in nature. These three properties make it a very effective ointment for wounds and burns. It is quick to react and is used widely as a first-aid remedy to bring down infections and is also used for cut wounds and those injuries that are taking time to heal. It can be used topically along with orally for best results.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Injuries and Burns, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default InjuriesAndBurns;