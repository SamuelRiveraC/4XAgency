import React from "react"

export default class CV extends React.Component {
  render () { return (
    <a href="/Samuel-rivera-c-resume.pdf" target="_blank" className={this.props.extraClasses !== undefined ? "btn "+this.props.extraClasses : "btn"}>
      {this.props.text !== undefined ? this.props.text : "Download my CV"} 
    </a>
  ) }
}