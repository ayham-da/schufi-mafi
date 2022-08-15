import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from "./pages/Loading/Loading";
import Home1 from "./pages/Home/Home1";
import Gallery from './pages/Gallery/GalleryPage'
import AboutMe from "./pages/AboutMe/AboutMe";
import MyProjekt from "./pages/MyProjekt/MyProjekt";
import Jornalist from "./pages/Jornalist/Jornalist";
import Contact from './components/Kontakt/Kontakt'




import MainHeader from './components/Nav/MainHeader1'


function App(): JSX.Element {
  return (
      <Router>
        <MainHeader />
        <Switch>
          <Route path="/schufimafi-Projekt" exact>            <Loading />         </Route>
          <Route path="/schufimafi" >       <Home1 />            </Route>
          <Route path="/überuns" >          <AboutMe />         </Route>
          <Route path="/events" >           <MyProjekt />       </Route>
          <Route path="/jornalist" >        <Jornalist />       </Route>
          <Route path="/gallery">           <Gallery />         </Route>
          <Route path="/kontakt">           <Contact />         </Route>
          <Route path="*" >                 <Home1 />            </Route>


        </Switch>
      </Router>
  )
}

export default App
