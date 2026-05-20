import React, { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';

const ImpotenceErectileDysfunction = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Impotence/Erectile Dysfunction</h1>
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Impotence/Erectile Dysfunction</h2>
                        <p className="text-sm leading-relaxed mb-4">
                            Erectile dysfunction (ED), also known as impotence, occurs when a man consistently struggles to achieve or maintain an erection during sexual intercourse. Unlike female sexual arousal, male arousal is a complex process involving the brain, emotions, hormones, blood vessels, nerves, and muscles. Dysfunction in any of these components can lead to ED.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When a man suffers consistent trouble maintaining or achieving an erection during sexual intercourse; the term is called erectile dysfunction or impotence. But unlike a woman’s sexual arousal, sexual arousal in men is a very complex process that involves the brain, emotional stability, hormone, blood vessels, nerves and muscles. If any of these stop contributing, it results in erectile dysfunction. In order to understand the process more elaborative, one needs to understand what causes and erection in the first place.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When a man feels sexually charged due to someone’s touch or external stimuli, the muscles in his penis begin to relax. The relaxation allows for and increased blood flow from the penile arteries. As more and more blood continues to flow, it fills the corpora cavernosa –two chambers in the penis. As they get filled, the penis becomes rigid and elongates. The penis remains erect until the individual ejaculates and the muscles contract, stopping the blood flow. The accumulated blood in the chambers then passes out through the penile arteries. Any problem with the brain (difficulty feeling sexually charged), the muscles (not relaxing), nerves (damaged or blocked thus preventing blood flow) or the blood vessels (chambers) can result in an erectile dysfunction.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Men who are at most risk of developing the disorder include:
                        </p>
                        <ul className='text-gray-700 list-disc list-inside'>
                            <li>Men who suffer from various medical conditions like heart diseases or diabetes</li>
                            <li>Men who smoke</li>
                            <li>Men who are obese or overweight</li>
                            <li>Men who have had some surgical procedure done (chemo or prostate surgery)</li>
                            <li>Men who have had injuries that damaged nerves or arteries</li>
                            <li>Men who frequently use medications</li>
                            <li>Men suffering from psychological disorders like depression, stress or anxiety</li>
                            <li>Men who have been involved in bicycling for long</li>
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The primary symptoms of erectile dysfunction include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-gray-700 space-y-1">
                                <li>• Difficulty getting an erection</li>
                                <li>• Difficulty keeping an erection</li>
                                <li>• Reduced libido (sex drive)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Supplements Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Supplements</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            While eating a healthy diet and regular exercise helps to manage impotence, it is not enough to keep you fit and healthy. Supplements are essential for managing impotence and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for impotence. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with impotence:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Yohimbe */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Yohimbe</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        An effective and potent aphrodisiac, the bark of Yohimbe is used by a wide population of both men and women. Its extract is also used in a number of pharmaceutical medications to treat a number of erectile disorders including impotence. Yohimbe root helps by improving one’s sex drive, sexual performance and the staying power of erections during physical intercourse. It has also proven beneficial in treating hormonal imbalances in the elderly caused by the constriction of blood vessels. It encourages the blood flow in the penile veins and stimulates the pelvic nerve ganglia. It can also be taken to treat the psychological causes of impotence such as tension, fatigue, or stress.
                                    </p>
                                </div>

                                {/* Saw Palmetto Veggie Caps */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Saw Palmetto Veggie Caps</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The saw palmetto is a praiseworthy herb to treat cases of enlarged or swollen prostrate. Its many benefits also include offering a cure for men who suffer from erectile dysfunction or lack of sexual drive. The compound dihydrotestosterone present in abundance helps multiplication of prostrate cells, boosting one’s sexual performance.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Muira Puama */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Muira Puama</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Muira pauma, also known as Muira Pauma, is used worldwide by both men and women as a powerful aphrodisiac. Its root extract is classified as a sexual performance enhancer, an energizer, and a cognitive booster among many things.
                                    </p>
                                </div>

                                {/* Maca */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Maca</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Maca has long been used to treat number of immune disorders. However, it can also use to treat case of impotence and menopause. Its intake for impotency helps the muscles relax and allow sufficient blood flow needed for a long-lasting erection.
                                    </p>
                                </div>
                            </div>

                            {/* Bacopa */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Bacopa</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                   A traditional Indian herbal medicine, bacopa, also known as Brahmi has shown promising results in treating cases of impotency in men. Many men take supplements with Bacopa extract in it to relieve joint pains, epilepsy, backaches, and to improve their sexual performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing impotence, but you should exercise proper caution and ask your doctor before adding any such supplements to your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your condition, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default ImpotenceErectileDysfunction;