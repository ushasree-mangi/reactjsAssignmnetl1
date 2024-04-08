import './index.css'

const CoursePlan=()=>{
    return(
        <div id="coursePlan" className='what-will-you-learn-container'>
            <h1 className='what-will-you-learn-heading'>What will you learn in ACCA</h1>
             <div className="learn-cards-container">
                 <div className='learn-card-container'>
                    <h1 className='card-heading'>Knowledge level</h1>
                     <ul className='content-container'> 
                        <li className='learn-card-content-text'>Foundation of Accounting Principles</li>
                        <li className='learn-card-content-text'>Introduction to Business and Economic Environment</li>
                        <li className='learn-card-content-text'>Development of Professional Skills</li>
                     </ul>
                    <p className='card-bottom-text'>3 papers</p>
                 </div>
                 <div className='learn-card-container'>
                    <h1 className='card-heading'>skill level</h1>
                     <ul className='content-container'> 
                        <li className='learn-card-content-text'>Foundation of Accounting Principles</li>
                        <li className='learn-card-content-text'>Introduction to Business and Economic Environment</li>
                        <li className='learn-card-content-text'>Development of Professional Skills</li>
                     </ul>
                    <p className='card-bottom-text'>6 papers</p>
                 </div>
                 <div className='learn-card-container'>
                    <h1 className='card-heading'>Professional level</h1>
                     <ul className='content-container'> 
                        <li className='learn-card-content-text'>Foundation of Accounting Principles</li>
                        <li className='learn-card-content-text'>Introduction to Business and Economic Environment</li>
                        <li className='learn-card-content-text'>Development of Professional Skills</li>
                     </ul>
                    <p className='card-bottom-text'>9 papers</p>
                 </div>
            </div>
        </div>
    )
}
export default CoursePlan