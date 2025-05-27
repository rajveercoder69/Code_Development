import React from 'react';
import rajimage from  '../jpe/rajveer.jpg'
const About=()=> {
    const url = `https://www.linkedin.com/in/rajveersingh1402`;
    const url2=`https://www.linkedin.com/in/saurabh-pathak-8482a827a/`
    const ilurl =`https://media.licdn.com/dms/image/D4D03AQHOTbjQrZFQ7A/profile-displayphoto-shrink_800_800/0/1692290661517?e=1720656000&v=beta&t=rtnn1QcJgIHxb-sNUaRko8WP5knPLUz2rr-nDvCyogo`;
    return ( <>
        <div className='container'>
          <div className='row'>
            {/* Text Column */}
            <div className='col-md-6'>
              <div className="card" style={{ border: 'none', backgroundColor: '#f8f9fa', borderRadius: '20px' }}>
                <div className="card-body">
                  <h1 className="card-title my-5 p-md-3" style={{ fontFamily: "cursive", fontWeight: "bold", fontOpticalSizing: "auto", fontSize: '3.5vw', color: '#343a40' }}>How it and why it started ?</h1>
                  <p className="card-text mx-4" style={{ fontSize: '1.25vw', color: '#495057' }}>In today's digital age, software's importance is undeniable, yet understanding its development costs remains a challenge. Fueled by this gap, <strong>I (Rajveer), alongside Saurabh Pathak</strong>, embarked on a mission. Under expert guidance from SRMCEM's IT faculty <strong>Mrs Shilpi Khanna</strong>, we developed a machine learning model to calculate AFP-adjusted function points. Through meticulous research and refinement, we created a user-friendly platform to empower individuals and businesses to estimate software development effort and costs accurately. Our vision is to provide clarity and confidence in software development endeavors worldwide.</p>
                  <h1 className="card-title my-5 p-md-3" style={{ fontFamily: "cursive", fontWeight: "bold", fontOpticalSizing: "auto", fontSize: '3.5vw', color: '#343a40' }}>So, who we Are ?</h1>
                  <p className="card-text mx-4" style={{ fontSize: '1.25vw', color: '#495057' }}>We are an aspiring web developer with a passion for creativity and a thirst for innovation. With a keen interest in technology and a desire to make a difference, WE've set our sights on the captivating world of web development. Eager to unleash our potential and explore the endless possibilities that coding offers, We are ready to dive into the realm of front-end frameworks like React and Angular, as well as master the intricacies of back-end technologies such as Node.js and Django. <br /> Inspired by the idea of crafting immersive user experiences and building dynamic web applications, We are determined to push the boundaries of what's possible and shape the future of the web. Joining a vibrant community of like-minded individuals, We are excited to collaborate on projects, attend workshops, and embark on an enchanting journey where every line of code is a step closer to realizing your dreams.</p>
                  <a href={url} target='_blank' rel='noreferrer' className="btn btn-primary mx-4" style={{ fontSize: '1.5vw', backgroundColor: '#007bff', borderColor: '#007bff' }}>Contact</a>
                </div>
              </div>
            </div>
      
            {/* Image Column */}
            <div className='col-md-6 d-flex align-items-center justify-content-center'>
              <div className="card" style={{ border: 'none' }}>
              <a href={url} target='_blank' rel='noreferrer'><img className="card-img-top" src={rajimage} alt="Card image cap" style={{ width: '100%', borderRadius: '20px', margin:'5px' }} /></a>
                <a href={url2} target='_blank' rel='noreferrer'><img className="card-img-top" src={ilurl} alt="Card image cap" style={{ width: '100%', borderRadius: '20px', margin:'5px'  }} /></a>
              
              </div>
            </div>
          </div>
        </div>
      </>
      
    
    )
}

export default About;