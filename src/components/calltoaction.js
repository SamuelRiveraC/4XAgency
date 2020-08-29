import React from "react"
import { Link } from "gatsby"


export default class CallToAction extends React.Component {
  render () { return (
    <div className="calltoaction row justify-content-center divider_container" >
      <div className="col-12 col-md-8 text-center">
        <h3 className="section_title">
          Contact Me
        </h3>
      </div>

      <div className="col-12 col-md-8 text-center" >
        <h3>  
          Looking for a new developer? I'm Currently available for work
        </h3>  
        <p>  
          
        </p>  
        What's in for you --- I am Ideal for remote jobs :D I am a problem solver good at everything, master developer kek 
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tenetur magni unde eos at distinctio placeat, perferendis quasi sit, earum dolorum dolores suscipit aliquid pariatur. Iure qui mollitia culpa accusamus.
      </div>
      <div className="col-12 col-md-8 text-center my-5" >
        <Link className="btn btn--light m-3" to="/contact" >
         Contact Me here
        </Link>
        
      </div>

      <div className="divider lower" ></div>
    </div>
  ) }
}