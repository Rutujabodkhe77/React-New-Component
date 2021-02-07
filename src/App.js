import './rutuja.css';
// import About from './About.js';
// import About from './Components/About.js';
import About from './Components/Screens/About.js';
import Myinformation from './Components/Myinformation.js';

function App() {
  return (
//****first div for rutuja.css***
  <div > 
          <h2>props exchange value between App .js and Component.js </h2> 

 {/* *****This is for ins about.css***** */}
  <About> </About>

<Myinformation name="rutuja" age="21" ></Myinformation>
<Myinformation name="Pooja" age="24"></Myinformation>
<Myinformation name="Pratiksha" age="24" ></Myinformation>
<Myinformation name="Sneha" age="24"></Myinformation>
</div> 
);
}

export default App;
