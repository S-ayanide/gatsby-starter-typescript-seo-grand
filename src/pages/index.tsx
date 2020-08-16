import React from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { OutlinedButton } from '../components/button'
import { Link } from 'gatsby'
import { useTheme } from '../styles'

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
    </Layout>
  )
}

export default App
