import React,{useState} from 'react'



export const About = (props) => {
    const [mystyle,]=useState({
       color: props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'black':'white', 

        
    })
   return(
    <div className='container' style={mystyle}>
        <h1 className='my-3'>About Us</h1>
       <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <strong>Analyze your Text</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={mystyle}>
      Welcome to Text Utils, the ultimate application designed to transform your text analyzing experience. Whether you're a writer, researcher, or simply someone who deals with large volumes of text, our app offers a suite of powerful tools to make your work easier and more efficient.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style={mystyle}>
      Welcome to Text Utils, the ultimate application designed to transform your text analyzing experience. Whether you're a writer, researcher, or simply someone who deals with large volumes of text, our app offers a suite of powerful tools to make your work easier and more efficient—all for free!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body"style={mystyle}>
      Text Utils is fully compatible with all major web browsers, including Chrome, Firefox, Safari, Edge, and more. This ensures that you can access and utilize our powerful text analyzing tools from any device, anywhere, without the need for downloads or installations.
      </div>
    </div>
  </div>
</div> 

    </div>
   )

 }