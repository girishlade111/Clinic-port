import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDepartments from './components/FeaturedDepartments';
import ServiceCards from './components/ServiceCards';
import EmergencyCTA from './components/EmergencyCTA';
import FeaturedServices from './components/FeaturedServices';
import SpecialtyIcons from './components/SpecialtyIcons';
import FindDoctor from './components/FindDoctor';
import MedicalCare from './components/MedicalCare';
import SecondCTA from './components/SecondCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedDepartments />
        <ServiceCards />
        <EmergencyCTA />
        <FeaturedServices />
        <SpecialtyIcons />
        <FindDoctor />
        <MedicalCare />
        <SecondCTA />
      </main>
      <Footer />
    </>
  );
}
