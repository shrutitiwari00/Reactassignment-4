import React, {useState} from 'react'
import Childcom from './Childcom'
import './Form.css'

const Form = () => {
    const [text, setText] = useState("")
    const [num, setNum] = useState("")
    const [dept, setDept] = useState("")
    const [add, setAdd] = useState([])
    const[click,setClick]= useState(true)
    const handelchange = (event) => {
        const { name, value } = event.target
        if (name === "name") {
            setText(value)
        }
        else if (name === "dept") {
            setDept(value)
        }
        else if (name === "num") {
            setNum(value)
        }
    }

    const handelclick = () => {
        let obj = {
            name: text,
            dept: dept,
            num: num
        }
        setAdd([...add, obj])
        setText("")
        setDept("")
        setNum("")
        setClick(false)
    }
    const toggleFun = () => {
        setClick(!click)
    }

  return (
     <>
     <div className='submit'>
     <div className='text'>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
            </div>
     {click?
     
            <div className='box'>
            
            <div className='form'>
                <div className='name'>
                Name: <input type='text' name='name' value={text} onChange={handelchange} /><br />
                </div>
                <div className='dept'>
                Department:<input type='text' name='dept' value={dept} onChange={handelchange} /><br />
                </div>
                <div className='num'>
                Rating:<input type='number' name='num' value={num} onChange={handelchange} /><br />
                </div>
                <div className='button'>
                <button className='but' onClick={(handelclick)}>Submit</button>
                </div>
            </div>
            </div>
            
            :
            <Childcom value={add} toggle={toggleFun}/>
     }
     </div>
     </>
  )
}

export default Form