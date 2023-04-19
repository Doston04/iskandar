import { useRef } from "react";
import { CustomHead } from "../components/utils/head";
import { Header } from "../components/layout/header";
import { HeroSection } from "../components/sections/hero";
import { AboutSection } from "../components/sections/about";
import { ContactsSection } from "../components/sections/contacts";
import { ServicesSection } from "../components/sections/services";
import { Footer } from "../components/layout/footer";
import { TopButton } from "../components/utils/button";

export default function Home() {
  const onRefClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const introRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const contactsRef = useRef();

  return (
    <>
      <CustomHead />
      <div className="wrapper">
        <Header
          introRef={introRef}
          aboutRef={aboutRef}
          featuresRef={servicesRef}
          contactsRef={contactsRef}
          onRefClick={onRefClick}
        />
        <main className="flex-auto bg-mainGray">
          <HeroSection
            introRef={introRef}
            contactsRef={contactsRef}
            onRefClick={onRefClick}
          />
          <AboutSection aboutRef={aboutRef} />
          <ServicesSection servicesRef={servicesRef} />
          <ContactsSection contactsRef={contactsRef} />
          <TopButton />
        </main>
        <Footer />
      </div>
    </>
  );
}
