import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { OutlinedButton } from '../components/button'
import { Link } from 'gatsby'
import { SubText } from '../components/texts'
import { useTheme } from '../styles'

const FooterStyle = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Button: React.FC = () => {
  const { textSecondary } = useTheme().colors
  return (
    <Link to="https://github.com/S-ayanide/gatsby-starter-typescript-seo-grand">
      <OutlinedButton backgroundColor={textSecondary}>
        Check out the Source Code
      </OutlinedButton>
    </Link>
  )
}

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <SubText>
        Created by{' '}
        <Link to="https://github.com/S-ayanide">
          <span style={{ textDecoration: 'underline' }}>S-ayanide</span> 💜
        </Link>
      </SubText>
    </FooterStyle>
  )
}

const App = () => {
  return (
    <Layout>
      <SEO />
      <h3 style={{ marginTop: '3rem' }}>
        Get SEO along with a completely customizable typescript support
      </h3>
      <ul>
        <li>TypeScript</li>
        <li>SEO</li>
        <li>Styled Component</li>
        <li>Pre-Defined Component</li>
        <li>Prettier</li>
        <li>PWA Support</li>
        <li>Jest</li>
      </ul>
      <Button />
      <Footer />
    </Layout>
  )
}

export default App
