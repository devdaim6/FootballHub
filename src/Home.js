/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoccerBall } from "@fortawesome/free-solid-svg-icons";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import HomeItem from "./HomeItem";
import React, { Component } from "react";
import Loader from "./Spinner";
export default class Home extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: [],
     loader:true
    };
  }
  async componentDidMount() {
    let url = `https://free-football-soccer-videos1.p.rapidapi.com/v1?rapidapi-key=632a1d3569mshf3161e9d8d7f486p1c0d34jsne6615e4c4573`;

    this.setState({ loader: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData,loader:false});
  }
  render() {
 
    const st = {
      width: "100%",
      height: "5rem",
      position: "relative",
      margin:"auto",
      paddingBottom: "56.250%",
      background: "#000",
      border:".01rem solid white"
    };
    const st1 = {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0px",
      top: "0px",
      overflow: "hidden",
    };

    return (
      <>
        <link
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
          rel="stylesheet"
        ></link>

        <nav className="bg-black navbar-dark opacity-50 mb-4">
          <div className="container">
            <a href="" className="navbar-brand">
              <FontAwesomeIcon icon={faSoccerBall} /> Football Hub
            </a>
          </div>
        </nav>

        <div style={st}>
          <iframe
            src="https://www.scorebat.com/embed/v/63f14ede71bb6"
            height="300px"
            allowFullScreen
            loading="eager"
           aria-controls="controls"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            style={st1}
          ></iframe>
        </div>
        {/* <h5 className="display-5 text-white text-center "><strong><h1>Barca - CADIZ</h1></strong></h5> */}

        <section id="gallery">
          <div className="container">
            {this.state.loader && <Loader/>}
            <div className="row">
              <hr />
              {this.state.articles.map((element) => {
                return (
                  <div className="col-lg-4 col-md-4 mb-4" key={element.url}>
                    <HomeItem
                      title={element.title}
                      thumbnail={element.thumbnail}
                      url={element.url}
                      date={element.date}
                      competition={element.competition.name}
                      highlights1={element.videos[0]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}
