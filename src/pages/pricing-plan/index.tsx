import CTA from "../../components/sections/CTA"
import Pricing from "../../components/sections/Pricing"

const PricingPlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Pricing />
      <div className="mb-20"></div>
      <CTA imgSrc="/images/cta/image-3.png" />
    </div>
  )
}

export default PricingPlan