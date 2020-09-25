import React from "react"
export default class HeroContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    	<div className="hero row"> 
        	<main className="col-12" >
            	{this.props.children}
        	</main>
    	</div>
    )
  }
}
