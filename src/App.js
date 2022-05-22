import logo from './logo.svg';
import './App.css';
import FirstComp from './Day_1_Props/Propswithinfunctinalcomp/Firstcomp'
import Secondcomp from './Day_1_Props/Propswithinfunctinalcomp/Secondcomp';
import Firsctclasspropcom from './Day_1_Props/propswithclasscomp/Firstclasspropcom';
import Secondclasspropcomp from './Day_1_Props/propswithclasscomp/Secondclasspropcomp';
import StateEx from './Day_2_State/StateEx';
import StateExFunctional from './Day_2_State/StateExFunctional';
import CondinalRendering from './Day_2_State/CondinalRendering';
import Classstate from './Day_2_State/practice/Classstate';
import FuncState from './Day_2_State/practice/FuncState';
import PracticeConditionrendering from './Day_2_State/PracticeConditionrendering';


function App() {
  return (
    <div className="App">
      {/* <FirstComp  name = "ankit" /> */}
      {/* <Secondcomp subject="reactjs" Altclass="COMP" stream="IT" />   */}
      {/* <Firsctclasspropcom  name="ankit" /> */}
      {/* <Secondclasspropcomp/> */}
      {/* <StateEx />
      <StateExFunctional />
      <CondinalRendering /> */}
      {/* <Classstate /> */}
      <FuncState/>
{/* <PracticeConditionrendering/> */}
    </div>
  );
}

export default App;
