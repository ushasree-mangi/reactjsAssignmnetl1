import './index.css'

const WhyChooseUs=()=>{

    return(
        <div id="whyChooseUs" className="why-choose-us-container">
           <h1 className="why-choose-us-heading">Why Choose Us?</h1> 
           <div className='cards-container'>      
                <div className='card-container'>
                    <img alt="expert faculty" className='why-choose-us-card-image' src="https://res.cloudinary.com/dtcogqxhp/image/upload/v1712495616/fetx4qqkhoj0qronvfuj.jpg"/>
                    <h1 className='why-choose-us-card-heading'>Expert Faculty</h1>
                    <p className='card-description'>Expert faculty members possess in-depth knowledge and extensive experience in their subject matter.  </p>
                </div>
                <div className='card-container'>
                    <img alt="services" className='why-choose-us-card-image' src="https://res.cloudinary.com/dtcogqxhp/image/upload/v1712496051/njlqw224qso6l2be1y3g.png"/>
                    <h1 className='why-choose-us-card-heading'>Complete services packages</h1>
                    <p className='card-description'>These packages often include a range of products, services, and support to address various aspects of a particular problem or requirement. </p>
                </div>
                <div className='card-container'>
                    <img alt="packages" className='why-choose-us-card-image' src="https://res.cloudinary.com/dtcogqxhp/image/upload/v1712495940/WhatsApp_Image_2024-04-07_at_16.52.25_dff33198_b5n9cp.jpg"/>
                    <h1 className='why-choose-us-card-heading'>Placements</h1>
                    <p className='card-description'>Placements services often begin with assisting individuals in their job search process. </p>
                </div>
           </div>
           <div>
            <div className='course-details-cards-container'>
                <div className='course-details-card'>
                    <h1 className='course-details-card-heading'>Levels</h1>
                    <p className='course-details-card-description'>3 levels</p>
                </div>
                <div className='course-details-card'>
                    <h1 className='course-details-card-heading'>Duration</h1>
                    <p className='course-details-card-description'>3 years</p>
                </div>
                <div className='course-details-card'>
                    <h1 className='course-details-card-heading'>Exams</h1>
                    <p className='course-details-card-description'>sem system</p>
                </div>
                <div className='course-details-card'>
                    <h1 className='course-details-card-heading'>Exemptions</h1>
                    <p className='course-details-card-description'>9 months</p>
                </div>
            </div>
           </div>
        </div>
        
    )

}
export default WhyChooseUs