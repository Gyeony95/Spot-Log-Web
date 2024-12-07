import { Navigation } from "../../components/landing/Navigation"
import { HeroSection } from "../../components/landing/HeroSection"
import { FeaturesSection } from "../../components/landing/FeaturesSection"
import { DownloadSection } from "../../components/landing/DownloadSection"
import { Footer } from "../../components/landing/Footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </div>
  )
} 