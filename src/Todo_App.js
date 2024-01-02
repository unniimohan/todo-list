import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Todo_App (){

  const [color, setColor] = React.useState([]);
  console.log(color);

 function addColors(){
  var inputColor=document.getElementById('Color').value
  console.log(inputColor);
  setColor(function(Pvalue){
    return [...Pvalue,inputColor]
  })
  document.getElementById('Color').value=""
 }  

 const newColor= color.map(function(element){
return (<div className='mx-5 '>
  <li>{element}</li>
</div>)
 })

  return (
    <>
    <div className='text-center mt-5' >

  <div className='w-25 m-auto' >
    <input type="text" className="form-control  " id="Color" placeholder=""/>
  </div>
  <div className="col-auto mt-3">
    <button onClick={addColors} type="submit" className="btn btn-outline-success mb-3">ADD</button>
  </div>
    </div>
    
    {newColor}
    </>
  )
}

export default Todo_App