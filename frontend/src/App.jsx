import Navbar from "./components/navbar/Navbar"
import "./app.scss";
import Manufacturer from "./components/manufacturer/Manufacturer";
import Hero from "./components/hero/Hero";
const App = () => {
  return (
    <>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <Manufacturer />
    </>
  )
}

export default App