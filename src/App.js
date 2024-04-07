import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import WhyChooseUs from './whyChooseUs'
import CoursePlan  from './CoursePlan'
import PlacementAssistance from './PlacementAssistance'
import AccaJourney from './AccaJourney'

const App=()=>(
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
  <WhyChooseUs/>
  <CoursePlan/>
  <PlacementAssistance/>
  <AccaJourney/>
  </>
)

export default App;
