import Hero from "../../components/sections/Hero"
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
    </div>
  )
}

export default Home