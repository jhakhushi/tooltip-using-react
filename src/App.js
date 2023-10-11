import React, {forwardRef} from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './App.css';
const ColoredTooltip=()=>{
  return <span style={{color:'yellow',padding:'10px'}}><p>Thanks for hovering i'm a </p>
    <p style={{textAlign:'centre'}}>tooltip</p></span>
}
const CustomChild=forwardRef((prop,ref)=>{
return (
  <div ref={ref} id='box'>
    <div className='hover'>Hover over me!</div>
    
  </div>
)
})

function App() {
  return (
    <div className="App">
      
  <div style={{paddingBottom:'20px'}}>
  <Tippy placement='bottom' content={<ColoredTooltip></ColoredTooltip>}>
       <CustomChild></CustomChild>
  </Tippy> 
      
</div>
     </div> 
  );    
}
export default App;
