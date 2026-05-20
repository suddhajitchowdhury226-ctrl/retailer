import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const Herpes = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Herpes</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Herpes</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                            <li>• People with genital herpes are at a greater risk of contracting HIV.</li>
                            <li>• 30% more cases of genital herpes have been reported annually since 1970 globally.</li>
                            <li>• Nearly 15.5% of Americans aged 14 to 49 have HSV-2.</li>
                            <li>• More than half of America’s population is living with HSV-1.</li>
                            <li>• Approximately 80% of all those infected with herpes are unaware they have it.</li>
                            <li>• Two-thirds of people infected with herpes are under the age of 25.</li>
                            <li>• On average, one in every four females is infected with herpes compared to one in five males.</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Genital herpes, caused by the herpes simplex virus (HSV), is a sexually transmitted infection that affects the genitals, skin, or cervix. It is a long-term chronic condition, and many infected individuals are unaware they carry the virus. Genital herpes is caused by two types of viruses: HSV-1 and HSV-2.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The virus is most commonly transmitted during sexual intercourse (vaginal, oral, or anal) through the mucous membranes, which are soft tissue layers lining the genitals, mouth, and nose. Once inside the host body, the virus multiplies, adapts to its new environment, and establishes a permanent presence. This is why there is no known cure for herpes, though proper medication and treatments can suppress the infection for years.
                        </p>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The most common symptoms of genital herpes in men include blisters on the scrotum, penis, or buttocks. Women may develop blisters on or around their vaginal area, buttocks, or anus. General symptoms for both men and women include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Blisters on the skin, around the mouth, on lips, face, or any area in close contact</li>
                                <li>• Itchiness and tingling sensation before blisters appear</li>
                                <li>• Oozing blisters</li>
                                <li>• Affected area covered with a crust within the first week of outbreak</li>
                                <li>• Swelling of the lymph glands</li>
                                <li>• Body aches, headaches, and fever</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage herpes, it is not enough to keep you fit and healthy. Supplements are essential for managing herpes and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for herpes. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your doctor before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with herpes:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Cayenne */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cayenne</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cayenne peppers have been used as an herbal remedy for centuries to treat multiple health conditions. Known as a natural fat burner and painkiller due to its anti-inflammatory properties, it helps heal ulcers, aids digestion, and manages conditions like herpes, arthritis, psoriasis, and shingles.
                                    </p>
                                </div>

                                {/* Echinacea Angustifolia Root */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Echinacea Angustifolia Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        A potent natural antibiotic, Echinacea angustifolia root has antiseptic, antiviral, and antifungal properties that stimulate the body’s resistance to infections. When applied as a lotion over the infected area, it removes impurities and reduces itching and soreness caused by herpes simplex infections.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Hops */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hops</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Flowers of the plant Humulus lupulus, hops work as an effective pain reliever and leave a calming effect on the skin. Many active components in its extract have antiviral properties that help fight diseases like HIV, cytomegalovirus, HSV-1, and HSV-2.
                                    </p>
                                </div>

                                {/* Oregon Grape Root */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Oregon Grape Root</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        A natural herb typically used to treat blood disorders and bacterial infections, Oregon grape root reduces the symptoms of genital herpes. Its antifungal, antibacterial, and anti-inflammatory properties make it an effective applicator to fight bacterial infections and blisters caused by herpes simplex infections.
                                    </p>
                                </div>
                            </div>

                            {/* Tea Tree Oil */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Tea Tree Oil</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Tea tree oil is an effective remedy for various skin infections, including cuts, abrasions, bug bites, boils, and burns. Its anti-inflammatory properties make it beneficial for treating herpes, reducing itchiness and soreness during outbreaks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing herpes, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Herpes;