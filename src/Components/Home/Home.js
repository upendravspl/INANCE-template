import HeroArea from "./HeroArea";
import ClientSection from "../Clients/ClientSection";
import ContactSection from "../Contact Us/ContactSection";
import FeatureSection from "../Features/FeatureSection";
import ProfessionalSection from "../Professinols/ProfessionalSection";
import ServiceSection from "../Services/ServiceSection";
import AboutSection from "./AboutSection";
import SignupForm from "../Contact Us/ContactUsForm";
import { ReacordTable } from "../Userrecords/RecordTable";



export const Home = () => {
  return (
    <>
      <HeroArea />
      <FeatureSection />
      <AboutSection />
      <ProfessionalSection />
      <ServiceSection />
     
      <ClientSection />
      {/*<ReacordTable/>*/}
   

      {/*<SignupForm/>*/}
      <ContactSection />
      </>
  )}
