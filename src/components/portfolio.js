import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default class Portfolio extends React.Component {
  render () { return (
    <div className="row portfolio" >
        {this.props.portfolios.map((item,index) => {
        return <div key={index} className="col-12 col-md-6">


  
          <Link key={index} className="portfolio__item" to={`/portfolio/${item.node.fields.slug}/`}>
            <div className="portfolio__preview">
              <div className="portfolio__img__container">
                <Img fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid} />
              </div>
            </div>
            <div className="portfolio__link">
              {item.node.frontmatter.title}
            </div>
          </Link>



        </div>
        })}
    </div>
  ) }
}