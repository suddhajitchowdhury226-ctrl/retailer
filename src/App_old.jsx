
import "./App.css";
import { Home } from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./Pages/Products";
import { ProductDetails } from "./Pages/ProductDetails";
import { Profile } from "./Pages/Profile";
import { Login } from "./Pages/auth/Login/Login";
import { Register } from "./Pages/auth/Register/Register";
import { ForgotPassword } from "./Pages/auth/ForgotPassword/ForgotPassword";
import PurchaseSummary from "./Pages/PurchaseSummary";
import { Navbar } from "./components/common/Navbar/Navbar";
import OrderDetails from "./components/Profilepage/OrderDetails";
import TrackingDetail from "./components/Profilepage/TrackShipmentDetails";
import FilterProduct from "./components/ProductPage/ProductLists/FilterProduct";
import Aboutpage from "./Pages/AboutPage";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Contactpage from "./Pages/ContactPage";
import Conditionofuse from "./Pages/conditionofuse";
import Herpes from "./Pages/A-ZList/Herpes";
import ReturnPolicy from "./Pages/ReturnPolicy";

import PrivatePolicy from "./Pages/PrivatePolicy";

import DeliveryPolicy from "./Pages/DeliveryPolicy";

import CommentingPolicy from "./Pages/CommentingPolicy";

import Faq from "./Pages/Faq";

import Mystorya from "./Pages/Mystory"
import Testimonial from "./Pages/Testimonial";
import Feedback from "./Pages/Feedback";
import FixedButtons from "./components/FixedButton";
import CounselingPage from "./Pages/CousellingPage";
import { ChatWidget } from "./components/ChatWidget/ChatWidget";
import ProtectedRoute from "./components/common/ProtectedRoute";
import SuccessPage from "./Pages/SuccessPage";
import CancelPage from "./Pages/CancelPage";
import HealthConcern from "./Pages/HealthConcern.jsx";
import ADDHADH from "./Pages/A-ZList/AddAdhd";
import Alcholism from "./Pages/A-ZList/Alcholism";
import Alopecia from "./Pages/A-ZList/Alopecia";
import Amyotrophic from "./Pages/A-ZList/Amyotrophic";
import Angina from "./Pages/A-ZList/Angina";
import Arrhythmia from "./Pages/A-ZList/Arrhythmia";
import Arthritis from "./Pages/A-ZList/Arthritis";
import Asthama from "./Pages/A-ZList/Asthama";
import Atherosclerosis from "./Pages/A-ZList/Atherosclerosis";
import AutoimmuneDisorders from "./Pages/A-ZList/AutoimmuneDisorders";
import AvianInfluenza from "./Pages/A-ZList/AvianInfluenza";
import Ayurveda from "./Pages/A-ZList/Ayurveda";
import ENT from "./Pages/A-ZList/ENT";
import Eyeandvision from "./Pages/A-ZList/Eyeandvision";
import Fatigue from "./Pages/A-ZList/Fatigue";
import Fibromyalgia from "./Pages/A-ZList/Fibromyalgia";
import FoodAllergy from "./Pages/A-ZList/FoodAllergy";
import FootCenter from "./Pages/A-ZList/FootCenter";
import Gallstones from "./Pages/A-ZList/Gallstones";
import GastricUlcer from "./Pages/A-ZList/GastricUlcer";
import Gout from "./Pages/A-ZList/Gout";
import Headache from "./Pages/A-ZList/Headache";
import HeartburnAndGERD from "./Pages/A-ZList/HeartburnAndGERD";
import Hemorrhoids from "./Pages/A-ZList/Hemorrhoids";
import Hepatitis from "./Pages/A-ZList/Hepatiti";
import ImmuneSupport from "./Pages/A-ZList/ImmuneSupport";
import JointsAndLegaments from "./Pages/A-ZList/JointsAndLegaments";
import KidneyBladderDiseases from "./Pages/A-ZList/KidneyBladderDiseases";
import Leukemia from "./Pages/A-ZList/Leukemia";
import Menopause from "./Pages/A-ZList/Menopause";


import Backpain from "./Pages/A-ZList/Backpain";
import BacterialInfections from "./Pages/A-ZList/BacterialInfections";
import BladderInfection from "./Pages/A-ZList/BladderInfection";
import BoneOsteoporosis from "./Pages/A-ZList/BoneOsteoporosis";
import BrainandCognitiveFunction from "./Pages/A-ZList/BrainAndCognitiveFunction";
import Breastcancer from "./Pages/A-ZList/BreastCancer";
import BruisingAndContusions from "./Pages/A-ZList/BruisingAndContusions";
import VaricoseAndVeinCare from "./Pages/A-ZList/VaricoseAndVeinCare";
import UterineFibroid from "./Pages/A-ZList/UterineFibroid";
import Trauma from "./Pages/A-ZList/Trauma";
import RespiratoryHealth from "./Pages/A-ZList/RespiratoryHealth";
import Stroke from "./Pages/A-ZList/Stroke";
import ParkinsonsDisease from "./Pages/A-ZList/ParkinsonsDisease";
import OralCare from "./Pages/A-ZList/OralCare";
import NailHealth from "./Pages/A-ZList/NailHealth";
import Thyroid from "./Pages/A-ZList/Thyroid";
import SleepSupport from "./Pages/A-ZList/SleepSupport";
import SkinHealth from "./Pages/A-ZList/SkinHealth";

// neepa
import Cancer from "./Pages/A-ZList/Cancer";
import Cataract from "./Pages/A-ZList/Cataract";
import Candida from "./Pages/A-ZList/Candida";
import CankerSores from "./Pages/A-ZList/CankerSores";
import Cardiomyopathy from "./Pages/A-ZList/Cardiomyopathy";
import CarpalTunnel from "./Pages/A-ZList/CarpalTunnel";
import ChildrensHealth from "./Pages/A-ZList/ChildrensHealth";
import Cholesterol from "./Pages/A-ZList/Cholesterol";
import ChronicFatigue from "./Pages/A-ZList/ChronicFatigue";
import CleanseAndDetox from "./Pages/A-ZList/CleanseAndDetox";
import ColdFluAndViral from "./Pages/A-ZList/ColdFluAndViral";
import Constipation from "./Pages/A-ZList/Constipation";


import Depression from "./Pages/A-ZList/Depression";
import Diarrhea from "./Pages/A-ZList/Diarrhea";
import DietAndWeightLoss from "./Pages/A-ZList/Diet And Weight Loss";
import DigestionAndStomachAilments from "./Pages/A-ZList/Digestion And Stomach Ailments";
import DryMouth from "./Pages/A-ZList/Dry Mouth";
import ColonHealth from "./Pages/A-ZList/Colon Health";
import CongestiveHeartFailure from "./Pages/A-ZList/Congestive Heart Failure";

import ImportenceErectileDysfunction from "./Pages/A-ZList/ImpotenceErectileDysfunction";

import Incontinence from "./Pages/A-ZList/Incontinence";
import Inflammation from "./Pages/A-ZList/Inflammation";
import InflammatoryBowelDisease from "./Pages/A-ZList/InflammatoryBowelDisease";
import InjuriesAndBurns from "./Pages/A-ZList/InjuriesAndBurns";
import IrritableBowelSyndrome from "./Pages/A-ZList/IrritableBowelSyndrome";
import NauseaRelief from "./Pages/A-ZList/NauseaRelief";
import LiverDisorders from "./Pages/A-ZList/Liver Disorders";
import LungCancer from "./Pages/A-ZList/Lung Cancer";
import Lupus from "./Pages/A-ZList/Lupus";
import MensHealth from "./Pages/A-ZList/Mens Health";
import MultipleSclerosis from "./Pages/A-ZList/Multiple Sclerosis";
import NasalHealth from "./Pages/A-ZList/Nasal Health";

import SmokingCentre from "./Pages/A-ZList/SmokingCentre";
import SubstanceAbuseAddiction from "./Pages/A-ZList/SubstanceAbuseAddiction";
import Stress from './Pages/A-ZList/Stress'
import PMS from "./Pages/A-ZList/PMS";
import Pregnancy from "./Pages/A-ZList/Pregnancy";
import Prostate from "./Pages/A-ZList/Prostate";
import Psoriasis from "./Pages/A-ZList/psoriasis";
import Hypertension from "./Pages/A-ZList/Hypertension";
import HuntingtonsDisease from "./Pages/A-ZList/HuntingtonsDisease";
import Hypoglycemia from "./Pages/A-ZList/Hypoglycemia";
import ImpotenceErectileDysfunction from "./Pages/A-ZList/ImpotenceErectileDysfunction";
import Osteoarthritis from "./Pages/A-ZList/Osteoarthritis";
import Osteoporosis from "./Pages/A-ZList/Osteoporosis";
import { VBDinfo } from "./Pages/VBDinfo";
import IrishMoss from "./Pages/IrishMoss/IrishMoss";
import EssentialOilsInfo from "./Pages/EssentialOilsInfo";
import KnowMore from "./Pages/KnowMore";
import MaximumCardioVideo from "./Pages/MaximumCardioVideo";
import BengalReview from "./Pages/BengalReview";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products-details/:pid" element={<ProductDetails />} />
          <Route path="/account/my-profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/account/order-details/:orderId" element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          } />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/purchase-summary" element={
            <ProtectedRoute>
              <PurchaseSummary />
            </ProtectedRoute>
          } />
          <Route path="/tracking" element={
            <ProtectedRoute>
              <TrackingDetail />
            </ProtectedRoute>
          } />

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
          <Route path="/health-concern/arrhythmia" exact element={<Arrhythmia />} />
          <Route path="/health-concern/arthritis" exact element={<Arthritis />} />
          <Route path="/health-concern/asthma" exact element={<Asthama />} />
          <Route path="/health-concern/atherosclerosis" exact element={<Atherosclerosis />} />
          <Route path="/health-concern/autoimmune-disorders" exact element={<AutoimmuneDisorders />} />
          <Route path="/health-concern/avian-influenza" exact element={<AvianInfluenza />} />
          <Route path="/health-concern/ayurveda" exact element={<Ayurveda />} />
          <Route path="/health-concern/ear-hearing-and-tinnitus" exact element={<ENT />} />
          <Route path="/health-concern/eye-and-vision-care" exact element={<Eyeandvision />} />
          <Route path="/health-concern/fatigue" exact element={<Fatigue />} />
          <Route path="/health-concern/fibromyalgia" exact element={<Fibromyalgia />} />
          <Route path="/health-concern/food-allergy" exact element={<FoodAllergy />} />
          <Route path="/health-concern/foot-center" exact element={<FootCenter />} />
          <Route path="/health-concern/gallstones" exact element={<Gallstones />} />
          <Route path="/health-concern/gastric-ulcer" exact element={<GastricUlcer />} />
          <Route path="/health-concern/gout" exact element={<Gout />} />
          <Route path="/health-concern/headache" exact element={<Headache />} />
          <Route path="/health-concern/heartburn-and-gerd" exact element={<HeartburnAndGERD />} />
          <Route path="/health-concern/hemorrhoids" exact element={<Hemorrhoids />} />
          <Route path="/health-concern/hepatitis" exact element={<Hepatitis />} />
          <Route path="/health-concern/herpes" exact element={<Herpes />} />
          <Route path="/health-concern/huntingtons-disease" exact element={<HuntingtonsDisease />} />
          <Route path="/health-concern/hypertension" exact element={<Hypertension />} />
          <Route path="/health-concern/hypoglycemia" exact element={<Hypoglycemia />} />
          <Route path="/health-concern/immune-support" exact element={<ImmuneSupport />} />
          <Route path="/health-concern/impotence-erectile-dysfunction" exact element={<ImpotenceErectileDysfunction />} />
          <Route path="/health-concern/joints-and-ligaments" exact element={<JointsAndLegaments />} />
          <Route path="/health-concern/kidney-bladder-diseases" exact element={<KidneyBladderDiseases />} />
          <Route path="/health-concern/leukemia" exact element={<Leukemia />} />
          <Route path="/health-concern/menopause" exact element={<Menopause />} />
          <Route path="/health-concern/osteoarthritis" exact element={<Osteoarthritis />} />
          <Route path="/health-concern/osteoporosis" exact element={<Osteoporosis />} />



          <Route path="/health-concern/back-pain" exact element={<Backpain />} />
          <Route path="/health-concern/bacterial-infections" exact element={<BacterialInfections />} />
          <Route path="/health-concern/bladder-infection" exact element={<BladderInfection />} />
          <Route path="/health-concern/bone-osteoporosis" exact element={<BoneOsteoporosis />} />
          <Route path="/health-concern/brain-and-cognitive-function" exact element={<BrainandCognitiveFunction />} />
          <Route path="/health-concern/breast-cancer" exact element={<Breastcancer />} />
          <Route path="/health-concern/bruising-and-contusions" exact element={<BruisingAndContusions />} />
          <Route path="/health-concern/varicose-and-vein-care" exact element={<VaricoseAndVeinCare />} />
          <Route path="/health-concern/uterine-fibroid" exact element={<UterineFibroid />} />
          <Route path="/health-concern/trauma" exact element={<Trauma />} />
          <Route path="/health-concern/respiratory-health" exact element={<RespiratoryHealth />} />
          <Route path="/health-concern/stroke" exact element={<Stroke />} />
          <Route path="/health-concern/parkinsons-disease" exact element={<ParkinsonsDisease />} />
          <Route path="/health-concern/oral-care" exact element={<OralCare />} />
          <Route path="/health-concern/nail-health" exact element={<NailHealth />} />
          <Route path="/health-concern/thyroid" exact element={<Thyroid />} />
          <Route path="/health-concern/sleep-support" exact element={<SleepSupport />} />
          <Route path="/health-concern/skin-health" exact element={<SkinHealth />} />


          <Route path="/health-concern/cancer" exact element={<Cancer />} />
          <Route path="/health-concern/cataract" exact element={<Cataract />} />
          <Route path="/health-concern/candida-fungal" exact element={<Candida />} />
          <Route path="/health-concern/canker-sores" exact element={<CankerSores />} />
          <Route path="/health-concern/cardiomyopathy" exact element={<Cardiomyopathy />} />
          <Route path="/health-concern/carpal-tunnel" exact element={<CarpalTunnel />} />
          <Route path="/health-concern/childrens-health" exact element={<ChildrensHealth />} />
          <Route path="/health-concern/cholesterol" exact element={<Cholesterol />} />
          <Route path="/health-concern/chronic-fatigue" exact element={<ChronicFatigue />} />
          <Route path="/health-concern/cleanse-and-detox" exact element={<CleanseAndDetox />} />
          <Route path="/health-concern/cold-flu-and-viral" exact element={<ColdFluAndViral />} />
          <Route path="/health-concern/constipation" exact element={<Constipation />} />

          <Route path="/health-concern/depression" exact element={<Depression />} />
          <Route path="/health-concern/diarrhea" exact element={<Diarrhea />} />
          <Route path="/health-concern/diet-and-weight-loss" exact element={<DietAndWeightLoss />} />
          <Route path="/health-concern/digestion-and-stomach-ailments" exact element={<DigestionAndStomachAilments />} />
          <Route path="/health-concern/dry-mouth" exact element={<DryMouth />} />
          <Route path="/health-concern/colon-health" exact element={<ColonHealth />} />
          <Route path="/health-concern/congestive-heart-failure" exact element={<CongestiveHeartFailure />} />




          <Route path="/health-concern/impotence-erectile-dysfunction" exact element={<ImportenceErectileDysfunction />} />
          <Route path="/health-concern/incontinence" exact element={<Incontinence />} />
          <Route path="/health-concern/inflammation" exact element={<Inflammation />} />
          <Route path="/health-concern/inflammatory-bowel-disease" exact element={<InflammatoryBowelDisease />} />
          <Route path="/health-concern/injuries-and-burns" exact element={<InjuriesAndBurns />} />
          <Route path="/health-concern/irritable-bowel-syndrome" exact element={<IrritableBowelSyndrome />} />
          <Route path="/health-concern/nausea-relief" exact element={<NauseaRelief />} />
          <Route path="/health-concern/liver-disorders" exact element={<LiverDisorders />} />
          <Route path="/health-concern/lung-cancer" exact element={<LungCancer />} />
          <Route path="/health-concern/lupus" exact element={<Lupus />} />
          <Route path="/health-concern/mens-health" exact element={<MensHealth />} />
          <Route path="/health-concern/multiple-sclerosis" exact element={<MultipleSclerosis />} />
          <Route path="/health-concern/nasal-health" exact element={<NasalHealth />} />
          {/* <Route path="/health-concern/alopecia" exact element={<Alopecia />} /> */}
          <Route path="/health-concern/smoking-centre" exact element={<SmokingCentre />} />
          <Route path="/health-concern/substance-abuse-addiction" exact element={<SubstanceAbuseAddiction />} />
          <Route path="/health-concern/stress" exact element={<Stress />} />
          <Route path="/health-concern/pms" exact element={<PMS />} />
          <Route path="/health-concern/pregnancy" exact element={<Pregnancy />} />
          <Route path="/health-concern/prostate" exact element={<Prostate />} />
          <Route path="/health-concern/psoriasis" exact element={<Psoriasis />} />
          <Route path="/cbd-info" element={<VBDinfo />} />
          <Route path="/irish-moss" element={<IrishMoss />} />
          <Route path="/essential-oils-info" element={<EssentialOilsInfo />} />
          <Route path="/maximum-cardio-info" element={<KnowMore />} />
          <Route path="/maximum-cardio-video" element={<MaximumCardioVideo />} />
          <Route path="/bengal-reviews" element={<BengalReview />} />


        </Routes>
        <FixedButtons />
        <ChatWidget />
      </BrowserRouter>


    </>


  );
}

export default App;