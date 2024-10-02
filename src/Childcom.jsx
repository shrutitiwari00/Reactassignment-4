import React from 'react'

const Childcom = ({value,toggle}) => {
  return (
    <>
    <ul>
                {
                    
                    value.map((item, index) => (
                        <li key={index}>
                            <div className='inner'>
                             Name: {item.name} ||Dept:{item.dept} || Age:{item.num}
                            </div>
                        </li>
                    ))
                   
                }
            </ul>
            <button className='childbut' onClick={toggle}>GO BACK</button>
    </>
  )
}

export default Childcom