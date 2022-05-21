import logo from './logo.svg';
import './App.css';
import FirstComp from './Day_1_Props/Propswithinfunctinalcomp/Firstcomp'
import Secondcomp from './Day_1_Props/Propswithinfunctinalcomp/Secondcomp';
import Firsctclasspropcom from './Day_1_Props/propswithclasscomp/Firstclasspropcom';
import Secondclasspropcomp from './Day_1_Props/propswithclasscomp/Secondclasspropcomp';


function App() {
  return (
    <div className="App">
      {/* < FirstComp  name = "ankit" />
      <Secondcomp subject = "reactjs" />   */}
      <Firsctclasspropcom  name="ankit" />
      <Secondclasspropcomp/>
     
    </div>
  );
}

export default App;
