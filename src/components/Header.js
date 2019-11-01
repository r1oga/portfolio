import React from 'react'
import './header.styles.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
       query {
           site{
               siteMetadata {
                   title
               }
           }
       }
    `)

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap' rel='stylesheet' />
      <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.2/css/all.css' integrity='sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr' crossorigin='anonymous' />

      <div className='header-main'>
        <div className='dev'>
          <h1>{data.site.siteMetadata.title}</h1>
          <span className='attr'>Industrial Engineer</span>
          <span className='dot'>•</span>
          <span className='attr'>Data Analyst</span>
          <span className='dot'>•</span>
          <span className='attr'>Ethereum Developer</span>
        </div>
        <div className='icons'>
          <a href='https://github.com/6ry0u'><i className='fab fa-github' /></a>
          <a href='https://twitter.com/6ry0u'><i className='fab fa-twitter' /></a>
          <a href='https://www.linkedin.com/in/griou/'><i className='fab fa-linkedin' /></a>
        </div>
        <span className='pages-link'>
          <Link to='/'>Portfolio</Link>
                        |
          <a href='https://listed.to/@6ry0u'>Blog</a>
                        |
          <Link to='/about'>About</Link>
        </span>

      </div>
      <hr />
    </div>

  )
}

export default Header
