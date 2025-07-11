
import Hero from "../../components/sections/Hero"
import HowItWorks from "../../components/sections/HowItWorks"
import Pricing from "../../components/sections/Pricing"
import ValueProposition from "../../components/sections/ValueProposition"
import VideoIntro from "../../components/sections/VideoIntro"

const Home = () => {
  return (
    <div>
        <Hero />
        <VideoIntro />
        <ValueProposition />
        <Pricing />
        <HowItWorks />
    </div>
  )
}

export default Home