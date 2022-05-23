import { AnimatePresence } from "framer-motion";
import {
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";
import { AboutScreen } from "../components/about/AboutScreen";
import { ContactScreen } from "../components/contact/ContactScreen";
import { ParticlesPage } from "../components/particles/Particles";
import { Portfolio } from "../components/porfolio/Portfolio";
import { PracticesScreen } from "../components/practices/PracticesScreen";
import Home from "../components/ui/home/Home";

export const Navigation = () => {
  const location = useLocation();
  return (
    <>  
    <AnimatePresence exitBeforeEnter>

            <Routes key={location.pathname} location={location}>
                <Route path="/" element={
                  <ParticlesPage >
                    <Home />
                  </ParticlesPage>
                }/>
                <Route path="portafolio" element={<Portfolio />}>
                      <Route path="about" element={<AboutScreen />} />
                      <Route index element={<AboutScreen />} />
                      <Route path="contact" element={<ContactScreen />} />
                      <Route path="practices" element={<PracticesScreen />} />
                </Route>
                <Route path="*" element={<h1>NOT FOUND</h1>}/>
            </Routes>
    </AnimatePresence>
    </>
  )
}
