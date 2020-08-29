import React from "react"
import { Link } from "gatsby"
import CV from "../components/cv"
import Skills from "../../content/skills.json"

               

export default class WhatIDo extends React.Component {
  render () { return (
    <div className="row align-items-center" >




	    <div className="col-12 col-md-6" >
	   		<div className="card" >
          <div className="row">
            <div className="col-12"> 
	   		      <h4> Hard Skills </h4>
	   		      <p>
                I am a Computer Systems Engineer specialized in web development, with full-stack experience in diverse and modern backend and frontend technologies, always backed up by the agile scrum and kanban project managing methodologies. Since I am a developer my favorites technologies are WordPress, Laravel, and its JS cousin Adonis; Gatsby, and React and Vue (these pairs do the same but I love both). 
              </p>
    		      <p>
                This is the full list of the technologies I have learned until now
              </p>
            </div>
          </div>
          <div className="row"> 
            <div className="badge text-left mt-3 mb-1">Back end</div>
          </div>
          <div className="row backend"> 
            {Skills.back.map((data, index) => {
              return <div className="badge"> 
                <img src={"https://img.shields.io/badge/-"+data.skill+"-"+data.color+"?style=flat-square&logo="+data.logo+"&logoColor=white"} />
              </div>
            })}
          </div>
          <br/>
          <div className="row"> 
            <div className="badge text-left mt-3 mb-1">Front end</div>
          </div>
          <div className="row front"> 
            {Skills.front.map((data, index) => {
              return <div className="badge"> 
                <img src={"https://img.shields.io/badge/-"+data.skill+"-"+data.color+"?style=flat-square&logo="+data.logo+"&logoColor=white"} />
              </div>
            })}
          </div>
          <br/>
          <div className="row"> 
            <div className="badge text-left mt-3 mb-1">Databases and related techs</div>
          </div>
          <div className="row db"> 
            {Skills.db.map((data, index) => {
              return <div className="badge"> 
                <img src={"https://img.shields.io/badge/-"+data.skill+"-"+data.color+"?style=flat-square&logo="+data.logo+"&logoColor=white"} />
              </div>
            })}
          </div>
	    	</div>
	    </div>




	    <div className="col-12 col-md-6" >
	    	<div className="card" >
          <div className="row"> 
            <div className="col-12"> 
	    	      <h4> Soft Skills </h4>
    		      <p>
                I've been working remotely with small businesses around the US, Europe, and South America. Since I've always worked remotely, I had to learn how to manage my own time and projects, I also learned about digital marketing, branding, customer service, and how to sell myself. Before I even realized I was not only a software developer but a businessman; the strategist, the designer, and the developer. 
              </p>
              <p>
                This is a list of tools I often use in my workflow:
              </p>
            </div>
          </div>
          <div className="row tools"> 
            {Skills.tools.map((data, index) => {
              return <div className="badge"> 
                <img src={"https://img.shields.io/badge/-"+data.skill+"-"+data.color+"?style=flat-square&logo="+data.logo+"&logoColor=white"} />
              </div>
            })}
          </div>
        </div>

	    	<div className="w100 text-center">
          <Link className="btn btn--primary m-3" to="/about" >
            Know more about me
          </Link>
          <CV extraClasses="m-3"/>
	    	</div>
	    </div>




    </div>
  ) }
}
/*

          <Img className="hero__background" fluid={data.file.childImageSharp.fluid} />
export const query = graphql`
  query images {
    allFile(filter: { relativePath: { regex: "/techstacks/.*.png/" } } ) 
    {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    } 
  }
`;*/