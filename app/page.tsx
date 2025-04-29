import { HeroSection } from "@/components/hero-section"
import { FeaturesPreview } from "@/components/features-preview"
import { TestimonialsSection } from "@/components/testimonial-section"
import { PricingPreview } from "@/components/pricing-preview"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <FeaturesPreview />
      <TestimonialsSection />
      <PricingPreview />
      <CTASection />
    </div>
  )
}