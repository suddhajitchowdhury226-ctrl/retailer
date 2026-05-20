import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Osteoarthritis = () => {
    // Scroll to top when component mounts
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
                            <h1 className="text-6xl font-bold text-white mb-2">Osteoarthritis</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Osteoarthritis</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• Osteoarthritis is the wearing out of the protective cartilage between the bones, causing them to rub against each other and cause pain.</li>
                            <li>• More than 27 million people in America are living with osteoarthritis.</li>
                            <li>• As compared to men, women are more likely to develop osteoarthritis after crossing 50.</li>
                            <li>• The earlies symptoms of osteoarthrosis may be noticed after 40 years. The symptoms from then onwards progress slowly, even taking years to fully show.</li>
                            <li>• Pain in joints is one of the primary causes of a reduced quality or life and work disability.</li>
                            <li>• Annually, the average cost America bears is $128 billion inboth direct and indirect medical care.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The most common type of arthritis, osteoarthritis affects millions of people all around the globe. It is a chronic condition in which the protective cartilage between and around the bones wears off over time, causing the bones to rub against each other. In order to understand the disease in detail, one must first understand what cartilage is and what role it plays in keep the joint muscles active and pain-free.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cartilage is the soft slippery tissue that protects the ends of the bones. When one has healthy cartilage, achieving full motion is easier as the bones glide over one another without causing pain. They are also responsible for absorbing the shock of rapid movement. When on develops osteoarthrosis, the outer layer of the cartilage breaks down and wears off. The exposed bones then rub against each other resulting in swelling, loss of motion and immense pain.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Because it is a progressive chronic disease, there is no cure for it. There are a number of risk factors that increases the chances of developing it, these include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="pl-6 text-gray-700 space-y-1">
                            <li>• Sex</li>
                            <li>• Older age</li>
                            <li>• Genes</li>
                            <li>• Obesity</li>

                        </ul>
                        <ul className='pl-6 text-gray-700 space-y-1'>
                            <li>• Certain occupations</li>
                            <li>• Joint injuries</li>
                            <li>• Bone deformities</li>
                        </ul>
                        </div>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The reason why diagnosis of the condition is difficult is because the symptoms don’t appear at the same time. It may take up to many years for them to actually develop. Since no one really gets checked for occasional pain in the joints, it often goes undetected until the protective cartilage completely wears off. However, there are some noticeable signs and symptoms that one must keep note of. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Pain in the joints after rapid or prolonged movement that goes away with painkillers</li>
                                <li>• Tenderness may be felt when pressure is applied on to the joint</li>
                                <li>• One may experience stiffness after a period of inactivity or after waking up</li>
                                <li>• Loosing full range of motion over time</li>
                                <li>• Hear a grating sound every time the joint is being used</li>
                                <li>• Bone spurs</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage osteoarthritis, it is not enough to keep you fit and healthy. Supplements are essential for managing osteoarthritis and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for osteoarthritis. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with osteoarthritis:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Devil's Claw */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Devil's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        One of the most effective medication for treating joint spasm, loss of flexibility and bone spurs is the devil’s claw. Many medical studies reveal that it plays an important role in reducing the inflammation and pain in the joint when one suffers from osteoarthrosis. Another great advantage of using the devil’s claw is that it is safe to use –managing it doesn’t have any side effects. Researchers believe that soon it will replace over-the-counter medication such as acetaminophen and ibuprofen which are known to cause stomach problems, diluting the blood and causing liver damage.
                                    </p>
                                </div>

                                {/* White Willow */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">White Willow</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Also called as herbal aspirin, white willow has been used for thousand of years to treat pain. It reduces inflammation, improves mobility in hip, knee, muscles and other joints. Although, it takes more time to reveal results, is a better alternative than most medications, it stays for longer in the blood stream. The bark has anti-inflammatory property which reduces any swelling and pain in the joints of those who suffer from osteoarthritis.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Comfrey</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Used topically, comfrey is a century’s old herb known to heal broken bones. It is for this very fact that many even call it the knit bone. Research has confirmed that it contains many active ingredients that help in the reduction and healing of bone, muscles, bruising and connective tissue wounds.
                                    </p>
                                </div>

                                {/* Cat's Claw */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cat's Claw</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        It is a South American herb used to treat a number of different health condition including joint pains. Its incorporation reduces the swelling and pain one experiences in arthritis. Prolonged intake may also improve the motion of the joints.
                                    </p>
                                </div>
                            </div>

                            {/* Glucosamine / Chondroitin */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Glucosamine / Chondroitin</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Clinical studies prove that both of these promote healthy cartilage and improve function. Glucosamine is also present in the cartilage. When taken for osteoarthritis, it helps heal and repair it. It can also be taken to reduce the swelling and prevent abnormal bone spurs around the joints.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing osteoarthritis, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Osteoarthritis;