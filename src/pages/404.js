import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
	
    <div className="separator" />
	<div className="container">  	
		<div className="row">  	
			<div className="col-12 text-center">  	
    			<h1>404 NOT FOUND</h1> 
    			<br />
    			<h3>These aren't the links you are looking for.</h3>
    			<br />
    			<p>Lucky for you I have some links that you may be interested on :)</p>
				<br />
            	<Link className="mb-3" to="/" >
            	  The Homepage of my website
            	</Link><br /><br />
            	<Link className="mb-3" to="/portfolio/">
            	  Look my Work and how my experience can help you
            	</Link><br /><br />
            	<Link className="mb-3" to="/about/">
            	  About me, my personality and what people thinks about me
            	</Link><br /><br />
            	<Link className="mb-3" to="/contact/">
            	  Hey! you may need help or want me to answer some questions, just Contact me here!
            	</Link><br /><br />
            	<Link className="mb-3" to="/Samuel-rivera-c-resume.pdf">
            	  Or... maybe are you looking for my CV, here it is for you
            	</Link><br /><br />
			</div>  	
		</div>  	
	</div>  	
    <div className="separator" />
  </Layout>
)

export default NotFoundPage
