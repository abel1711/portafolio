import { Outlet, 
  // Route, Routes,
   useLocation, 
  //  useParams
 } from "react-router-dom";
import Navbar from "../ui/navbar/Nav";
// import { AboutScreen } from "../about/AboutScreen";
// import { ContactScreen } from "../contact/ContactScreen";
// import { PracticesScreen } from '../practices/PracticesScreen';
import './portfolio.css';
import { useSelectTheme } from "../../hooks/useSelectTheme";

export const Portfolio = () => {
  
  const {theme} = useSelectTheme();
 const location = useLocation();
//  const splitPath = location.pathname.split('/')
// const params = useParams()
 console.log( location );
//  console.log( params );
  return (
    <div 
      className="porfolio-container"
      style={{
        backgroundColor: theme.colors.background
      }}
    >
        <Navbar/>
        <div className='mt-3'>
          {/* <Routes>
                      <Route path="about" element={<AboutScreen />} />
                      <Route path="contact" element={<ContactScreen />} />
                      <Route path="practices" element={<PracticesScreen />} />
          </Routes> */}
          <Outlet />
        </div>
    </div>
  )
}
