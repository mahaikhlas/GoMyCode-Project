import React from 'react'
import './Eng.css'
import { Link } from 'react-router-dom'

const  Eng = () => {
  return (
    <div className='eng container'> 
      <div className="eng-text">
        
      
            <h1>Engineering Program</h1>
            <p>Edusity's Bachelor's Degree fits into the LMD structure (Bachelor's-Master's-Doctorate) adopted by the Ministry of Higher Education in Morocco.</p>
            <p>The programmes have been developed in partnership with the MEQ (Ministry of Education of Quebec) and the Canadian Project APC Morocco.
 The Professional Bachelor is accessible to Baccalaureate students. The duration of the studies is three years Five streams are offered:</p>
      <ul>
        <li>Supply Chain Management</li>
        <li>Purchasing And Sourcing Management</li>
        <li>Textile Production Management</li>
        <li>Clothing Production Management</li>
        <li>Development In Clothing</li>
        </ul>
        
        </div>
        <Link to='/form'>
      <button className='btn'> Subscribe to an engineering program</button>
    </Link>
    </div>
   
  )
}

export default Eng

