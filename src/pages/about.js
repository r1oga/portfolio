import React from 'react'
import Layout from '../components/Layout'
import aboutStyle from './About.module.scss'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

export const query = graphql`
query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.

        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
  console.log(query)
  return (
    <Layout>
      <h2>Gauthier Riou</h2>

      <div className={aboutStyle.main}>

        <div className={aboutStyle.izquierda}>
          <div className={aboutStyle.imagen}> <Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} /></div>
          <div className={aboutStyle.texto}>

            <div className={aboutStyle.iconos}><i className='fas fa-map-marker-alt fa-sm' /><p>Hamburg, Germany</p></div>
            <div className={aboutStyle.iconos}><i className='fas fa-graduation-cap fa-sm' /><p>Ecole Centrale de Nantes</p></div>
            <div className={aboutStyle.iconos}><i className='fas fa-code fa-sm' /><p>Pyhton, JS, HTML, JS, CSS, SQL, Solidity</p></div>
            <div className={aboutStyle.iconos}><i className='fas fa-language fa-sm' /><p>French, English, German</p></div>

          </div>

        </div>
        <div className={aboutStyle.derecha}>
          <p>French born.</p>
          <p>30 years old.</p>
          <p>In Germany, Hamburg since 2013.</p>
          <p>Indsutrial engineer truned data analyst turning blockchain developer.</p>
          <p>Some of the tech I like developing with:</p>
          <div className={aboutStyle.logoContainer}>
            <i class='fab fa-js' />
            <i class='fab fa-python' />
            <i class='fab fa-html5' />
            <i class='fab fa-css3' />
            <i class='fab fa-react' />
            <i class='fab fa-ethereum' />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default About
