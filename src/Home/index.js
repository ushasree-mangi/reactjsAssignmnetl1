
import './index.css'


const Home=()=>{
   return (
    <div className="home-container">
        <div className="content-container">
            <h1 className="heading">Become ACCA in 18 months</h1>
            <p className="description">ACCA qualifications are respected worldwide and provide individuals with the skills and knowledge necessary for a successful career in accounting, finance, and related fields.</p>
            <ul className="boxes-container">
                <li className="box">Requirements<br/>32,456</li>
                <li className="box">faculty<br/>87 staff</li>
                <li className="box">Top score<br/>98%</li>
            </ul>
            <div>
                <button className='explore-btn'>Explore now</button>
                <button className='start-btn'>Start now</button>
            </div>
            
        </div>
         <div className='apply-card-container'>
            <h1 className='apply-card-heading'>want to more about ACCA connect with us</h1>
            <label htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <label htmlFor="email">Enter Email:</label>
            <input id="email" type="text"/>
            <label htmlFor="phone-number">Enter mobile no:</label>
            <input id="phone-number" type="text"/>
            <button className='request-call-btn'>Request callback</button>
           
        
         </div>
    </div>
   )
}
export default Home