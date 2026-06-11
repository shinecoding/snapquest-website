// components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import SocialImpact from "./social-impact";
import Partners from "./partners";
import BetaSignup from "./beta-signup";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      {/* <MobileConvenience /> */}
      <Testimonials />
      <Faqs />
      <SocialImpact />
      <BetaSignup />
      <Partners />
      <Footer />
    </>
  );
}
