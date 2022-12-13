import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'

const Display = (props) => {
  const { list,setList } = props
  // console.log('list', list)
const [num,setNum] = useState(0);
const incF = () =>{
  setNum(num + 1)
}
const decF = ()=>{
 if(num > 0){
   setNum(num - 1)

 }else{
  alert("Can't go to nagetive numbers")
  setNum(0)
 }
}
const handleRemove =(item)=>{
var newList = list;
newList.splice(item,1);
setList([...newList])
}
  return (
    <div>
<Navbar />
      <div >{list.map((item, index) => {

        return (
          
          <ul className='form' key={index}>
            
            <hr></hr>
             <h2 className='back'>Voting Site</h2>
             <hr/>
            <h4>Parliament-Name</h4>
            <li>{item.Firstname}</li>
            <h4>Parliament-Date</h4>
            <li>{item.date}</li>
            <h4>Parliament-Leader</h4>
            <li>{item.leader}</li>
            <h4>Parliament-Members</h4>
            <li>{item.members}</li>
            <h5 className='up'>Vote For Your Parliament</h5>
            <h5 className='ups'>{num}</h5>
            <div className='cart'>
            <button className='bts' onClick={incF}>+</button>
            
            
            <button className='btss' onClick={decF}>-</button>
            </div>
            <br/>
            <label>Remove from list</label><br/>
             <button onClick={()=> handleRemove(index)}>+</button>
          </ul>
        )
      })}</div>
    </div>
  )
}

export default Display