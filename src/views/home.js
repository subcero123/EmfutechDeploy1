import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Wise Talkative Hedgehog</title>
        <meta property="og:title" content="Wise Talkative Hedgehog" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">Model Implementation</span>
        <form className="home-form">
          <label className="home-text1">Give an instruction</label>
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput input"
          />
          <button className="home-button button">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Home
