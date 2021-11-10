import React from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
// import Model from 'react-bootstrap/Model'
import Button from 'react-bootstrap/Button'

function portfolio() {
  return (
    <div className="portfolio_main_container" id="portfolio">
      <h1>Portfolio</h1>
      <p>Thai is my Github page
        <a href="https://github.com/Yoko-cyer" target="_blank" ref="noreferrer">https://github.com/Yoko-cyer</a>
      </p>
    </div>
  )
}

export default portfolio
