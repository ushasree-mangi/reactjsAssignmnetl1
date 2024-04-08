import Example  from '../Modal'
import './index.css'

const AccaJourney=()=>{
   return(
    <div id="accaJourney" className='kick-off-acca-journey-bg-container'>
        <div className='kick-off-acca-journey-container'>
            <div>
                <h1 className="kick-off-acca-journey-container-heading">Kick off your ACCA journey with IndigoLearn</h1>
                <p className='kick-off-acca-journey-container-description'>Sign-in and Be a part of it.</p>
                <button className='start-journey-btn'>start journey</button>
               
            </div>
            <div className='apply-card-container'>
                <h1 className='apply-card-heading'>want to more about ACCA connect with us</h1>
                <label htmlFor="name">Enter name:</label>
                <input id="name" type="text"/>
                <label htmlFor="email">Enter Email:</label>
                <input id="email" type="text"/>
                <label htmlFor="phone-number">Enter mobile no:</label>
                <input id="phone-number" type="text"/>
                <div className='request-call-btn'>
                <Example/>
                </div>
            </div>
         </div>
        </div>
    
   )
}
export default AccaJourney