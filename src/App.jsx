import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FixedButtons from "./components/FixedButton";
import { ChatWidget } from "./components/ChatWidget/ChatWidget";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Eager load critical pages
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";

// Lazy load all other pages
const ProductDetails = lazy(() => import("./Pages/ProductDetails").then(m => ({ default: m.ProductDetails })));
const Profile = lazy(() => import("./Pages/Profile").then(m => ({ default: m.Profile })));
const Login = lazy(() => import("./Pages/auth/Login/Login").then(m => ({ default: m.Login })));
const Register = lazy(() => import("./Pages/auth/Register/Register").then(m => ({ default: m.Register })));
const ForgotPassword = lazy(() => import("./Pages/auth/ForgotPassword/ForgotPassword").then(m => ({ default: m.ForgotPassword })));
const PurchaseSummary = lazy(() => import("./Pages/PurchaseSummary"));
const OrderDetails = lazy(() => import("./components/Profilepage/OrderDetails"));
const TrackingDetail = lazy(() => import("./components/Profilepage/TrackShipmentDetails"));
const OrderSuccess = lazy(() => import("./Pages/OrderSuccess"));
const Aboutpage = lazy(() => import("./Pages/AboutPage"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogDetail = lazy(() => import("./Pages/BlogDetail"));
const Contactpage = lazy(() => import("./Pages/ContactPage"));
const Conditionofuse = lazy(() => import("./Pages/conditionofuse"));
const ReturnPolicy = lazy(() => import("./Pages/ReturnPolicy"));
const PrivatePolicy = lazy(() => import("./Pages/PrivatePolicy"));
const DeliveryPolicy = lazy(() => import("./Pages/DeliveryPolicy"));
const CommentingPolicy = lazy(() => import("./Pages/CommentingPolicy"));
const Faq = lazy(() => import("./Pages/Faq"));
const Mystorya = lazy(() => import("./Pages/Mystory"));
const Testimonial = lazy(() => import("./Pages/Testimonial"));
const Feedback = lazy(() => import("./Pages/Feedback"));
const CounselingPage = lazy(() => import("./Pages/CousellingPage"));
const SuccessPage = lazy(() => import("./Pages/SuccessPage"));
const CancelPage = lazy(() => import("./Pages/CancelPage"));
const HealthConcern = lazy(() => import("./Pages/HealthConcern"));
const VBDinfo = lazy(() => import("./Pages/VBDinfo").then(m => ({ default: m.VBDinfo })));
const IrishMoss = lazy(() => import("./Pages/IrishMoss/IrishMoss"));
const EssentialOilsInfo = lazy(() => import("./Pages/EssentialOilsInfo"));
const KnowMore = lazy(() => import("./Pages/KnowMore"));
const MaximumCardioVideo = lazy(() => import("./Pages/MaximumCardioVideo"));
const BengalReview = lazy(() => import("./Pages/BengalReview"));

// Health concern pages - lazy loaded
const ADDHADH = lazy(() => import("./Pages/A-ZList/AddAdhd"));
const Alcholism = lazy(() => import("./Pages/A-ZList/Alcholism"));
const Alopecia = lazy(() => import("./Pages/A-ZList/Alopecia"));
const Amyotrophic = lazy(() => import("./Pages/A-ZList/Amyotrophic"));
const Angina = lazy(() => import("./Pages/A-ZList/Angina"));
const Arrhythmia = lazy(() => import("./Pages/A-ZList/Arrhythmia"));
const Arthritis = lazy(() => import("./Pages/A-ZList/Arthritis"));
const Asthama = lazy(() => import("./Pages/A-ZList/Asthama"));
const Atherosclerosis = lazy(() => import("./Pages/A-ZList/Atherosclerosis"));
const AutoimmuneDisorders = lazy(() => import("./Pages/A-ZList/AutoimmuneDisorders"));
const AvianInfluenza = lazy(() => import("./Pages/A-ZList/AvianInfluenza"));
const Ayurveda = lazy(() => import("./Pages/A-ZList/Ayurveda"));
const ENT = lazy(() => import("./Pages/A-ZList/ENT"));
const Eyeandvision = lazy(() => import("./Pages/A-ZList/Eyeandvision"));
const Fatigue = lazy(() => import("./Pages/A-ZList/Fatigue"));
const Fibromyalgia = lazy(() => import("./Pages/A-ZList/Fibromyalgia"));
const FoodAllergy = lazy(() => import("./Pages/A-ZList/FoodAllergy"));
const FootCenter = lazy(() => import("./Pages/A-ZList/FootCenter"));
const Gallstones = lazy(() => import("./Pages/A-ZList/Gallstones"));
const GastricUlcer = lazy(() => import("./Pages/A-ZList/GastricUlcer"));
const Gout = lazy(() => import("./Pages/A-ZList/Gout"));
const Headache = lazy(() => import("./Pages/A-ZList/Headache"));
const HeartburnAndGERD = lazy(() => import("./Pages/A-ZList/HeartburnAndGERD"));
const Hemorrhoids = lazy(() => import("./Pages/A-ZList/Hemorrhoids"));
const Hepatitis = lazy(() => import("./Pages/A-ZList/Hepatiti"));
const Herpes = lazy(() => import("./Pages/A-ZList/Herpes"));
const ImmuneSupport = lazy(() => import("./Pages/A-ZList/ImmuneSupport"));
const JointsAndLegaments = lazy(() => import("./Pages/A-ZList/JointsAndLegaments"));
const KidneyBladderDiseases = lazy(() => import("./Pages/A-ZList/KidneyBladderDiseases"));
const Leukemia = lazy(() => import("./Pages/A-ZList/Leukemia"));
const Menopause = lazy(() => import("./Pages/A-ZList/Menopause"));
const Backpain = lazy(() => import("./Pages/A-ZList/Backpain"));
const BacterialInfections = lazy(() => import("./Pages/A-ZList/BacterialInfections"));
const BladderInfection = lazy(() => import("./Pages/A-ZList/BladderInfection"));
const BoneOsteoporosis = lazy(() => import("./Pages/A-ZList/BoneOsteoporosis"));
const BrainandCognitiveFunction = lazy(() => import("./Pages/A-ZList/BrainAndCognitiveFunction"));
const Breastcancer = lazy(() => import("./Pages/A-ZList/BreastCancer"));
const BruisingAndContusions = lazy(() => import("./Pages/A-ZList/BruisingAndContusions"));
const VaricoseAndVeinCare = lazy(() => import("./Pages/A-ZList/VaricoseAndVeinCare"));
const UterineFibroid = lazy(() => import("./Pages/A-ZList/UterineFibroid"));
const Trauma = lazy(() => import("./Pages/A-ZList/Trauma"));
const RespiratoryHealth = lazy(() => import("./Pages/A-ZList/RespiratoryHealth"));
const Stroke = lazy(() => import("./Pages/A-ZList/Stroke"));
const ParkinsonsDisease = lazy(() => import("./Pages/A-ZList/ParkinsonsDisease"));
const OralCare = lazy(() => import("./Pages/A-ZList/OralCare"));
const NailHealth = lazy(() => import("./Pages/A-ZList/NailHealth"));
const Thyroid = lazy(() => import("./Pages/A-ZList/Thyroid"));
const SleepSupport = lazy(() => import("./Pages/A-ZList/SleepSupport"));
const SkinHealth = lazy(() => import("./Pages/A-ZList/SkinHealth"));
const Cancer = lazy(() => import("./Pages/A-ZList/Cancer"));
const Cataract = lazy(() => import("./Pages/A-ZList/Cataract"));
const Candida = lazy(() => import("./Pages/A-ZList/Candida"));
const CankerSores = lazy(() => import("./Pages/A-ZList/CankerSores"));
const Cardiomyopathy = lazy(() => import("./Pages/A-ZList/Cardiomyopathy"));
const CarpalTunnel = lazy(() => import("./Pages/A-ZList/CarpalTunnel"));
const ChildrensHealth = lazy(() => import("./Pages/A-ZList/ChildrensHealth"));
const Cholesterol = lazy(() => import("./Pages/A-ZList/Cholesterol"));
const ChronicFatigue = lazy(() => import("./Pages/A-ZList/ChronicFatigue"));
const CleanseAndDetox = lazy(() => import("./Pages/A-ZList/CleanseAndDetox"));
const ColdFluAndViral = lazy(() => import("./Pages/A-ZList/ColdFluAndViral"));
const Constipation = lazy(() => import("./Pages/A-ZList/Constipation"));
const Depression = lazy(() => import("./Pages/A-ZList/Depression"));
const Diarrhea = lazy(() => import("./Pages/A-ZList/Diarrhea"));
const DietAndWeightLoss = lazy(() => import("./Pages/A-ZList/Diet And Weight Loss"));
const DigestionAndStomachAilments = lazy(() => import("./Pages/A-ZList/Digestion And Stomach Ailments"));
const DryMouth = lazy(() => import("./Pages/A-ZList/Dry Mouth"));
const ColonHealth = lazy(() => import("./Pages/A-ZList/Colon Health"));
const CongestiveHeartFailure = lazy(() => import("./Pages/A-ZList/Congestive Heart Failure"));
const ImportenceErectileDysfunction = lazy(() => import("./Pages/A-ZList/ImpotenceErectileDysfunction"));
const Incontinence = lazy(() => import("./Pages/A-ZList/Incontinence"));
const Inflammation = lazy(() => import("./Pages/A-ZList/Inflammation"));
const InflammatoryBowelDisease = lazy(() => import("./Pages/A-ZList/InflammatoryBowelDisease"));
const InjuriesAndBurns = lazy(() => import("./Pages/A-ZList/InjuriesAndBurns"));
const IrritableBowelSyndrome = lazy(() => import("./Pages/A-ZList/IrritableBowelSyndrome"));
const NauseaRelief = lazy(() => import("./Pages/A-ZList/NauseaRelief"));
const LiverDisorders = lazy(() => import("./Pages/A-ZList/Liver Disorders"));
const LungCancer = lazy(() => import("./Pages/A-ZList/Lung Cancer"));
const Lupus = lazy(() => import("./Pages/A-ZList/Lupus"));
const MensHealth = lazy(() => import("./Pages/A-ZList/Mens Health"));
const MultipleSclerosis = lazy(() => import("./Pages/A-ZList/Multiple Sclerosis"));
const NasalHealth = lazy(() => import("./Pages/A-ZList/Nasal Health"));
const SmokingCentre = lazy(() => import("./Pages/A-ZList/SmokingCentre"));
const SubstanceAbuseAddiction = lazy(() => import("./Pages/A-ZList/SubstanceAbuseAddiction"));
const Stress = lazy(() => import('./Pages/A-ZList/Stress'));
const PMS = lazy(() => import("./Pages/A-ZList/PMS"));
const Pregnancy = lazy(() => import("./Pages/A-ZList/Pregnancy"));
const Prostate = lazy(() => import("./Pages/A-ZList/Prostate"));
const Psoriasis = lazy(() => import("./Pages/A-ZList/psoriasis"));
const Hypertension = lazy(() => import("./Pages/A-ZList/Hypertension"));
const HuntingtonsDisease = lazy(() => import("./Pages/A-ZList/HuntingtonsDisease"));
const Hypoglycemia = lazy(() => import("./Pages/A-ZList/Hypoglycemia"));
const ImpotenceErectileDysfunction = lazy(() => import("./Pages/A-ZList/ImpotenceErectileDysfunction"));
const Osteoarthritis = lazy(() => import("./Pages/A-ZList/Osteoarthritis"));
const Osteoporosis = lazy(() => import("./Pages/A-ZList/Osteoporosis"));

import { AnimatePresence } from 'framer-motion';
import DiagonalLoader from './components/Loader/DiagonalLoader';
import { useState, useEffect } from 'react';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { CookieConsentBanner } from './components/CookieConsent/CookieConsentBanner';

const LoadingFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div>Loading...</div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading or minimum display time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <CookieConsentProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products-details/:pid" element={<ProductDetails />} />
            <Route path="/account/my-profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/account/order-details/:orderId" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/purchase-summary" element={<ProtectedRoute><PurchaseSummary /></ProtectedRoute>} />
            <Route path="/order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
            <Route path="/tracking" element={<ProtectedRoute><TrackingDetail /></ProtectedRoute>} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/product/:categoryId" element={<Products />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/conditionofuse" element={<Conditionofuse />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/private-policy" element={<PrivatePolicy />} />
            <Route path="/delivery-policy" element={<DeliveryPolicy />} />
            <Route path="/commenting-policy" element={<CommentingPolicy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/my-story" element={<Mystorya />} />
            <Route path="/our-testimonials" element={<Testimonial />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/counseling" element={<CounselingPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<CancelPage />} />
            <Route path="/health-concern" element={<HealthConcern />} />
            <Route path="/health-concern/add-adhd" element={<ADDHADH />} />
            <Route path="/health-concern/alcoholism" element={<Alcholism />} />
            <Route path="/health-concern/alopecia" element={<Alopecia />} />
            <Route path="/health-concern/amyotrophic-lateral-sclerosis" element={<Amyotrophic />} />
            <Route path="/health-concern/angina" element={<Angina />} />
            <Route path="/health-concern/arrhythmia" element={<Arrhythmia />} />
            <Route path="/health-concern/arthritis" element={<Arthritis />} />
            <Route path="/health-concern/asthma" element={<Asthama />} />
            <Route path="/health-concern/atherosclerosis" element={<Atherosclerosis />} />
            <Route path="/health-concern/autoimmune-disorders" element={<AutoimmuneDisorders />} />
            <Route path="/health-concern/avian-influenza" element={<AvianInfluenza />} />
            <Route path="/health-concern/ayurveda" element={<Ayurveda />} />
            <Route path="/health-concern/ear-hearing-and-tinnitus" element={<ENT />} />
            <Route path="/health-concern/eye-and-vision-care" element={<Eyeandvision />} />
            <Route path="/health-concern/fatigue" element={<Fatigue />} />
            <Route path="/health-concern/fibromyalgia" element={<Fibromyalgia />} />
            <Route path="/health-concern/food-allergy" element={<FoodAllergy />} />
            <Route path="/health-concern/foot-center" element={<FootCenter />} />
            <Route path="/health-concern/gallstones" element={<Gallstones />} />
            <Route path="/health-concern/gastric-ulcer" element={<GastricUlcer />} />
            <Route path="/health-concern/gout" element={<Gout />} />
            <Route path="/health-concern/headache" element={<Headache />} />
            <Route path="/health-concern/heartburn-and-gerd" element={<HeartburnAndGERD />} />
            <Route path="/health-concern/hemorrhoids" element={<Hemorrhoids />} />
            <Route path="/health-concern/hepatitis" element={<Hepatitis />} />
            <Route path="/health-concern/herpes" element={<Herpes />} />
            <Route path="/health-concern/huntingtons-disease" element={<HuntingtonsDisease />} />
            <Route path="/health-concern/hypertension" element={<Hypertension />} />
            <Route path="/health-concern/hypoglycemia" element={<Hypoglycemia />} />
            <Route path="/health-concern/immune-support" element={<ImmuneSupport />} />
            <Route path="/health-concern/impotence-erectile-dysfunction" element={<ImpotenceErectileDysfunction />} />
            <Route path="/health-concern/joints-and-ligaments" element={<JointsAndLegaments />} />
            <Route path="/health-concern/kidney-bladder-diseases" element={<KidneyBladderDiseases />} />
            <Route path="/health-concern/leukemia" element={<Leukemia />} />
            <Route path="/health-concern/menopause" element={<Menopause />} />
            <Route path="/health-concern/osteoarthritis" element={<Osteoarthritis />} />
            <Route path="/health-concern/osteoporosis" element={<Osteoporosis />} />
            <Route path="/health-concern/back-pain" element={<Backpain />} />
            <Route path="/health-concern/bacterial-infections" element={<BacterialInfections />} />
            <Route path="/health-concern/bladder-infection" element={<BladderInfection />} />
            <Route path="/health-concern/bone-osteoporosis" element={<BoneOsteoporosis />} />
            <Route path="/health-concern/brain-and-cognitive-function" element={<BrainandCognitiveFunction />} />
            <Route path="/health-concern/breast-cancer" element={<Breastcancer />} />
            <Route path="/health-concern/bruising-and-contusions" element={<BruisingAndContusions />} />
            <Route path="/health-concern/varicose-and-vein-care" element={<VaricoseAndVeinCare />} />
            <Route path="/health-concern/uterine-fibroid" element={<UterineFibroid />} />
            <Route path="/health-concern/trauma" element={<Trauma />} />
            <Route path="/health-concern/respiratory-health" element={<RespiratoryHealth />} />
            <Route path="/health-concern/stroke" element={<Stroke />} />
            <Route path="/health-concern/parkinsons-disease" element={<ParkinsonsDisease />} />
            <Route path="/health-concern/oral-care" element={<OralCare />} />
            <Route path="/health-concern/nail-health" element={<NailHealth />} />
            <Route path="/health-concern/thyroid" element={<Thyroid />} />
            <Route path="/health-concern/sleep-support" element={<SleepSupport />} />
            <Route path="/health-concern/skin-health" element={<SkinHealth />} />
            <Route path="/health-concern/cancer" element={<Cancer />} />
            <Route path="/health-concern/cataract" element={<Cataract />} />
            <Route path="/health-concern/candida-fungal" element={<Candida />} />
            <Route path="/health-concern/canker-sores" element={<CankerSores />} />
            <Route path="/health-concern/cardiomyopathy" element={<Cardiomyopathy />} />
            <Route path="/health-concern/carpal-tunnel" element={<CarpalTunnel />} />
            <Route path="/health-concern/childrens-health" element={<ChildrensHealth />} />
            <Route path="/health-concern/cholesterol" element={<Cholesterol />} />
            <Route path="/health-concern/chronic-fatigue" element={<ChronicFatigue />} />
            <Route path="/health-concern/cleanse-and-detox" element={<CleanseAndDetox />} />
            <Route path="/health-concern/cold-flu-and-viral" element={<ColdFluAndViral />} />
            <Route path="/health-concern/constipation" element={<Constipation />} />
            <Route path="/health-concern/depression" element={<Depression />} />
            <Route path="/health-concern/diarrhea" element={<Diarrhea />} />
            <Route path="/health-concern/diet-and-weight-loss" element={<DietAndWeightLoss />} />
            <Route path="/health-concern/digestion-and-stomach-ailments" element={<DigestionAndStomachAilments />} />
            <Route path="/health-concern/dry-mouth" element={<DryMouth />} />
            <Route path="/health-concern/colon-health" element={<ColonHealth />} />
            <Route path="/health-concern/congestive-heart-failure" element={<CongestiveHeartFailure />} />
            <Route path="/health-concern/incontinence" element={<Incontinence />} />
            <Route path="/health-concern/inflammation" element={<Inflammation />} />
            <Route path="/health-concern/inflammatory-bowel-disease" element={<InflammatoryBowelDisease />} />
            <Route path="/health-concern/injuries-and-burns" element={<InjuriesAndBurns />} />
            <Route path="/health-concern/irritable-bowel-syndrome" element={<IrritableBowelSyndrome />} />
            <Route path="/health-concern/nausea-relief" element={<NauseaRelief />} />
            <Route path="/health-concern/liver-disorders" element={<LiverDisorders />} />
            <Route path="/health-concern/lung-cancer" element={<LungCancer />} />
            <Route path="/health-concern/lupus" element={<Lupus />} />
            <Route path="/health-concern/mens-health" element={<MensHealth />} />
            <Route path="/health-concern/multiple-sclerosis" element={<MultipleSclerosis />} />
            <Route path="/health-concern/nasal-health" element={<NasalHealth />} />
            <Route path="/health-concern/smoking-centre" element={<SmokingCentre />} />
            <Route path="/health-concern/substance-abuse-addiction" element={<SubstanceAbuseAddiction />} />
            <Route path="/health-concern/stress" element={<Stress />} />
            <Route path="/health-concern/pms" element={<PMS />} />
            <Route path="/health-concern/pregnancy" element={<Pregnancy />} />
            <Route path="/health-concern/prostate" element={<Prostate />} />
            <Route path="/health-concern/psoriasis" element={<Psoriasis />} />
            <Route path="/cbd-info" element={<VBDinfo />} />
            <Route path="/irish-moss" element={<IrishMoss />} />
            <Route path="/essential-oils-info" element={<EssentialOilsInfo />} />
            <Route path="/maximum-cardio-info" element={<KnowMore />} />
            <Route path="/maximum-cardio-video" element={<MaximumCardioVideo />} />
            <Route path="/bengal-reviews" element={<BengalReview />} />
          </Routes>
        </Suspense>
        <FixedButtons />
        <ChatWidget />
        <AnimatePresence mode="wait">
          {isLoading && <DiagonalLoader key="loader" />}
        </AnimatePresence>
      </BrowserRouter>
      <CookieConsentBanner />
    </CookieConsentProvider>
  );
}

export default App;
