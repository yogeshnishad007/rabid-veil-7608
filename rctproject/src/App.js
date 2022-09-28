import Navbar from "./componant/Navbar"
import Pricing from "./Pages/Pricing"
import Home from "./Pages/Home"
import About from "./Pages/About"
import BackdropExample from "./componant/Modal"
// import InitialFocus from "./componant/Modal"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      {/* <BackdropExample/> */}
      {/* <InitialFocus/> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App