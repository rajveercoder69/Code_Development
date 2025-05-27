import React ,{useState} from 'react'
import myImage from '../jpe/estimating-cost-of-custom-software-development-feature-peerbits_image2.jpg'
import myImage2 from '../jpe/software-development-cost-estimation_image_1.jpg'
import MyImage3 from '../jpe/Analysis.png'
import { useNavigate } from 'react-router-dom';

 const Home=()=> {
    const [showText, setShowText] = useState(false);
    const Navigate=useNavigate();
    const handleevent = () => {
        console.log("called");
        if(localStorage.getItem('token'))
        setShowText(true); // Update state to show the text
        else
        Navigate("/Login")
      }
  
    return (<>
      <div className="card">
        <div className="card-header">
          <h1><center>Welcome to AgileApp</center></h1>
          <h1><center>Streamlining Cost/Effort Estimation Of Your Project Management Journey</center></h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">Unlock the potential of your project with AgileApp, our cutting-edge solution designed to revolutionize your approach to cost estimation. AgileApp harnesses the power of Agile methodologies to provide accurate and dynamic cost projections tailored to the ever-changing landscape of software development.</h5>
          <p className="card-text">Experience the future of cost estimation with AgileApp. Say goodbye to budget overruns and hello to Link more efficient and transparent development process. Get started today and unleash the full potential of your project with AgileApp</p>
        </div>
        <div className="container mx-2 my-4">
          <div className="row mx-3">
            <div className="col-md-6">
              <div className="card" style={{ border: 'none' }}>
                <div className="card-body">
                  <h5 className="card-title">Effort Estimation for Custom Software Development</h5>
                  <p className="card-text">Estimating the cost of custom software development is crucial for effective project planning. To provide an accurate estimate, we analyze various attributes of the project.<br />Firstly, we conduct a detailed inquiry phase to understand the project's scope, functionality, and technical requirements thoroughly. This ensures that our estimate aligns closely with the client's expectations.<br />Next, we assess the complexity and volume of input and output files involved in the project.<br />Factors such as data structure, frequency of data exchanges, and required transformations influence development effort and cost.<br />Software projects often undergo changes and revisions. Therefore, we consider the anticipated frequency and magnitude of changes, as well as the process for handling deletions or modifications to existing features.<br />The complexity of user interfaces, including GUIs, APIs, and integrations with external systems, significantly impacts development effort. We carefully evaluate interface design, data exchange protocols, and compatibility requirements to provide an accurate estimate.<br />Finally, effective documentation and communication practices are essential. Clear documentation of requirements, specifications, and design decisions, coupled with efficient communication channels, ensure alignment between stakeholders and development teams.<br />By analyzing these attributes—inquiry, input/output files, changes, deletions, and interface complexity—we provide a comprehensive estimate that enables better project planning and successful software delivery.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ border: 'none' }}>
                <img className="card-img-top my-5" src={myImage} alt="Card image cap" style={{ height: 'auto', maxWidth: '100%' }} />
              </div>
            </div>
          </div>
        </div>
    
        <div className="container mx-4">
          <div className="row mx-4">
            <div className="col-md-6">
              <div className="card" style={{ border: 'none' }}>
                <img className="card-img-top my-5" src={myImage2} alt="Card image cap" style={{ height: 'auto', maxWidth: '100%' }} />
                <img className="card-img-top my-5" src={MyImage3} alt="Card image cap" style={{ height: 'auto', maxWidth: '100%' }} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ border: 'none' }}>
                <div className="card-body">
                  <h1 style={{ marginBottom: '20px' }}>Project Dev Type: Understanding Maintenance and Development Efforts</h1>
                  <p>Welcome to our Project Dev Type page, simplifying software development complexities...</p>
                  <div style={{ marginTop: '30px' }}>
                    <h2>What is Project Dev Type?</h2>
                    <p>Project Dev Type distinguishes two software lifecycle phases...</p>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <h2>Understanding Effort Requirements</h2>
                    <p>Effort requirements vary...</p>
                    <div style={{ marginTop: '15px' }}>
                      <h3>Maintenance (0):</h3>
                      <p>Low Effort: Minimal code modifications for bug fixes or cosmetic changes...</p>
                      <p>Medium Effort: Addressing moderate bugs or implementing minor feature enhancements...</p>
                      <p>High Effort: Dealing with critical bugs, security vulnerabilities, or major updates...</p>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                      <h3>Development (1):</h3>
                      <p>Low to Medium Effort: Building small-scale applications or adding features...</p>
                      <p>Medium to High Effort: Developing medium to large-scale projects with significant design...</p>
                      <p>High to Very High Effort: Tackling complex projects involving advanced technologies...</p>
                    </div>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <h2>Why It Matters</h2>
                    <p>Understanding Maintenance (0) and Development (1) is crucial for the accurate estimation it can hinder the accuracy of prediction.</p>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <h2>Conclusion</h2>
                    <p>Project Dev Type simplifies software development complexities...</p>
                    <p>Ready to classify your next project and Estimate the cost? <strong>Click on the button below to Calculate...</strong></p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={handleevent} style={{ marginTop: '20px' }}>Estimate Effort required of your Software</button>
            </div>
          </div>
        </div>
      </div>
      {showText && Navigate('/CostEstimate')}
    </>
    
    )
}



export default Home;