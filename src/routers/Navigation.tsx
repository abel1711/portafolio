import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { ParticlesPage } from "../components/particles/Particles";
import { Portfolio } from "../components/porfolio/Portfolio";
import Home from "../components/ui/home/Home";

export const Navigation = () => {

  return (
    <div className="">
        
        <BrowserRouter >
            <Routes>
                <Route path="/portafolio-page" element={
                  <ParticlesPage >
                    <Home />
                  </ParticlesPage>
                }/>
                <Route path="/portafolio-page/portfolio/*" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
