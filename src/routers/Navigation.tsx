import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { AboutScreen } from "../components/about/AboutScreen";
import { ContactScreen } from "../components/contact/ContactScreen";
import { ParticlesPage } from "../components/particles/Particles";
import { Portfolio } from "../components/porfolio/Portfolio";
import { PracticesScreen } from "../components/practices/PracticesScreen";
import Home from "../components/ui/home/Home";

export const Navigation = () => {

  return (
    <>
        <BrowserRouter >
            <Routes>
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
        </BrowserRouter>
    </>
  )
}
