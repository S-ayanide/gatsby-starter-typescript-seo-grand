import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { theme } from '../../styles'
// Components
import { Link } from '../link'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: ${(props) => (props.theme.screens.sm ? '1.8rem' : '2.2rem')};
  margin: 20px 0px;
`

const Tagline = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textSecondary};
`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <Link to="/">
          <Title>{title.toUpperCase()}</Title>
        </Link>
        <Tagline>{description}</Tagline>
        <br />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  )
}

export { Layout }
