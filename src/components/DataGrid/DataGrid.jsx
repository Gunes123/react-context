import React, { useContext} from 'react';
import { DataContext } from '../../context/Provider/Provider';
import mixg2 from '../../pages/mixg2.wav';
import mixg3 from '../../pages/mixg3.wav';
import mixg4 from '../../pages/mixg4.wav';
import mixg5 from '../../pages/mixg5.wav';
import mixg6 from '../../pages/mixg6.wav';
import mixg7 from '../../pages/mixg7.wav';
import mixg8 from '../../pages/mixg8.wav';
import mixg9 from '../../pages/mixg9.wav';
import './DataGrid.css';

const DataGrid = (props) => {
  const {state,dispatch} = useContext(DataContext)

const button1Click = ()=>{
  dispatch({ path : mixg2}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button2Click = ()=>{
  dispatch({ path : mixg3}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button3Click = ()=>{
  dispatch({ path : mixg4}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button4Click = ()=>{
  dispatch({ path : mixg5}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button5Click = ()=>{
  dispatch({ path : mixg6}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button6Click = ()=>{
  dispatch({ path : mixg7}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button7Click = ()=>{
  dispatch({ path : mixg8}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button8Click = ()=>{
  dispatch({ path : mixg9}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button9Click = ()=>{
  dispatch({ path : mixg2}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}
const button10Click = ()=>{
  dispatch({ path : mixg2}) 
  console.log(state._currentValue.path);
  var audio = new Audio(state._currentValue.path);
  audio.play();
}



  return (
    <div>
   <div class="container">

    <div id='button-1' onClick={button1Click}  class="key white black" ></div>
    <div id='button-2' onClick={button2Click} class="key white black" ></div>

    <div id='button-3' onClick={button3Click} class="key white" ></div>

    <div id='button-4' onClick={button4Click} class="key white black" ></div>
    <div id='button-5' onClick={button5Click} class="key white black" ></div>
    <div id='button-6' onClick={button6Click} class="key white black" ></div>

    <div id='button-7' onClick={button7Click} class="key white" ></div>

    <div id='button-8' onClick={button8Click} class="key white black" ></div>
    <div id='button-9' onClick={button9Click} class="key white black" ></div>

    <div id='button-10' onClick={button10Click} class="key white" ></div>

   </div>  
    </div>
    )};

DataGrid.propTypes = {
  // bla: PropTypes.string,
};

DataGrid.defaultProps = {
  // bla: 'test',
};

export default DataGrid;
