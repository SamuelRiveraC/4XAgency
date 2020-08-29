import React from "react"
import { Link } from "gatsby"
import CV from "../components/cv"

export default class WorkWithMe extends React.Component {
  render () { return (
    <div className="row justify-content-center calltoaction divider_container">
      <div className="col-12 col-md-8" >
        <h2 className="section_title">
          Are you Looking for a new developer?
          <br/>
          or do you want to talk about your new project?
          <br/>
          I'm currently available for work
        </h2>
      </div>

    	<div className="col-12 col-md-8 text-center">
        I always love a new challenge, let's work together, contact me with this form and I will personally read it and answer you within 48 hours! The more information you can provide the better please that's how I can help you the best.
	    </div>
	    <div className="col-12 col-md-8 text-center my-5" >
        <Link className="btn btn--light m-3" to="/contact" >
          Contact Me here
        </Link>
		    <CV extraClasses="btn--transparent m-3"/>
	    </div>

      <div className="divider lower" ></div>
    </div>
  ) }
}






