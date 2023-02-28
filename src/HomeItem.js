/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class homeItem extends Component {
  render() {
    let { title, thumbnail, url, date, competition, highlights1 } = this.props;
    let publish = new Date(date);
    const imgSize = {
      height: "190px",
    };
    return (
      <div className="card ">
        <img src={thumbnail} style={imgSize} alt="" className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title"><strong>{title}</strong></h6>
          <h6 className="card-text">{competition}</h6>
          <p className="card-text">{publish.toLocaleString()}</p>
          <a href={url} className="btn btn-outline-dark btn-sm">
            Live Score
          </a>
          <a href={highlights1} className="btn btn-outline-danger mx-2 btn-sm">
            Highlights(1)
          </a>
          {/* <iframe src={highlights1} frameborder="0"></iframe> */}
            
          
          {/* //   <a href={highlights2} className="btn btn-outline-danger mx-2 btn-sm">
        //     Highlights(2)
        //   </a>    */}
        </div>
      </div>
    );
  }
}
