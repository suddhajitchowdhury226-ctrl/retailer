import React from 'react';
import { useEffect } from 'react';
import { Layout } from '../../components/common/Layout/Layout';
import { Footer } from '../../components/common/Footer/Footer';
import backgroundImage from '../../assets/images/bg/healthconcernbanner.jpg';
const Incontinence = () => {
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
                            <h1 className="text-6xl font-bold text-white mb-2">Incontinence</h1>
                            {/* <p className="text-xl text-white/90">Explore various health concerns and their solutions</p> */}
                        </div>
                    </div>
                </div>

                {/* Fast Facts Section */}
                <div className="bg-orange-500 text-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">Fast Facts about Incontinence</h2>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• According to the statistics of American Urological Association, incontinence affects about 1/4th to 1/3rd of the US population, including both men and women</li>
                            <li>• Women are more likely to suffer from urinary incontinence; between the ages of 30 to 60, about 30% females experience incontinence whereas the rate is about 1.5 to 5% in men.</li>
                            
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" w-full px-4 py-8">
                    {/* Introduction Paragraph */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Incontinence, urinary incontinence, and bed-wetting are terms used for loss of control over bladder that leads to involuntary or unintended urine leakage.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            While incontinence is often associated with children, it can occur at any age and to anyone.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Incontinence can be divided into following four types:
                        </p>
                        <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>1. Urge Incontinence – An urge to urinate that is so sudden that the person is unable to even reach toilet</li>
                            <li>2. Stress Incontinence – Leakage of urine when bladder feels the pressure, such as when a person laughs or cough</li>
                            <li>3. Overflow Incontinence – The inability to empty the bladder completely that causes frequent leakage</li>
                            <li>4. Total Incontinence – The complete inability of the bladder to hold urine</li>
                            
                        </ul>
                    </div>

                    {/* Symptoms Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            As mentioned above, incontinence is often a symptom of some underlying problem. However, there are certain factors that can trigger the problem. These include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm leading-relaxed">
                           

                            <li>• Laughing</li>
                            <li>• coughing</li>
                            <li>• heavy exercise and heavy lifting</li>
                            <li>• Sneezing</li>
                            <li>• Suddenly changing position</li>
                            <li>• Problem with prostate gland</li>
                            <li>• Problems with the bladder</li>
                            <li>• Poor mobility and dexterity</li>     
                            <li>• Dementia</li>
                            <li>• Stress, anxiety and depression</li>
                            <li>• Congenital problems</li>
                            <li>• Injury to urinary system or spinal cord</li>
                            <li>• Fistula</li>
                            

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
                            While eating a healthy diet and regular exercise helps to manage Incontinence, it is not enough to keep you fit and healthy. Supplements are essential for managing Incontinence and reducing its symptoms. But it should be kept in mind that supplements should not be used to replace the treatment for Incontinence. It is not always true that natural products are safe for use. Many products can react with your body and produce an adverse reaction. Thus, it is better to be safe and consult your before starting to use any supplements for managing your condition.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The following supplements have proven to benefit people with Incontinence:
                        </p>

                        {/* Supplements Grid */}
                        <div className="bg-green-600 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Arnica */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cranberry & Buchu Concentrate</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Cranberry juice is really useful for maintaining a healthy urinary tract and bladder. It also cures certain urinary tract infections. Buchu is also an amazingly beneficial herb to cure the underlying causes of incontinence, such as enlarged prostate gland, problems in digestion, bladder infection and diabetes. It also helps regulating the functioning of bladder and kidneys. Cranberry & Buchu Concentrate capsules combine two powerful natural products that are amazingly beneficial for people experiencing incontinence.
                                    </p>
                                </div>

                                {/* Comfrey */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Cornsilk</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The main ingredient of Cornsilk capsules are silky tassels that are present in corn husk. They strengthen urinary tissues, tone and soothe them and thus, help in achieving and maintaining a healthy urinary tract.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Propolis */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Juniper Berries</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Juniper Berries have long been used for strengthening and supporting the urinary system. By offering nutritional support to the system, these berries maintains levels of uric acid and also regulate proper functioning of kidneys. Also, juniper berries are known for cleansing the urinary tract.
                                    </p>
                                </div>

                                {/* Moringa */}
                                <div className="bg-white rounded-lg p-6 relative">
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                    <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">Hydrangea</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Made with Hydrangea root that is rich in minerals, Hydrangea tablets offer nutritional support to urinary tract. Hydrangea root is also beneficial for kidneys.
                                    </p>
                                </div>
                            </div>

                            {/* Arnica Oil - Full Width */}
                            <div className="bg-white rounded-lg p-6 relative">
                                <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                <h3 className="text-lg font-bold text-green-600 mt-8 mb-3">SF®</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    SF capsules contain an amazing combination of useful natural ingredients, including fennel seeds, dandelion root, licorice root, parthenium root, hawthorn berries etc. Fennel seeds are known to be highly beneficial incontinence in adults. Dandelion root also helps in maintaining a healthy urinary system. The power packed SF capsules helps achieving and maintaining a healthy urinary tract. They are also beneficial for intestines and digestive system.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-green-600 rounded-lg p-6 text-white">
                        <p className="text-sm leading-relaxed">
                            The above natural supplements are known to help in controlling and managing Incontinence, but you should exercise proper caution and ask your doctor before adding any such supplements for in your diet. Herbs have lasting and strong effects on the body and can also interact with other drugs and medications, causing dangerous and adverse reactions. If you use any medication for your disease, talk to your doctor before you decide to start any supplements or herbal products to manage your health condition.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Incontinence;