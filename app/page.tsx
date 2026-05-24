import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import ProofStrip from '@/components/sections/ProofStrip';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutSection from '@/components/sections/AboutSection';
import CybersecuritySection from '@/components/sections/CybersecuritySection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import { CaseStudiesSection, ComplianceSection, FaqSection, ResourcesSection } from '@/components/sections/EnterpriseSections';
const PartnersMarquee = dynamic(() => import('@/components/sections/PartnersMarquee'));
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home(){return <><HeroSection/><ProofStrip/><ServicesSection/><IndustriesSection/><ProcessSection/><AboutSection/><CybersecuritySection/><BenefitsSection/><CaseStudiesSection/><ComplianceSection/><PartnersMarquee/><FaqSection/><ResourcesSection/><CTASection/><ContactSection/></>;}
