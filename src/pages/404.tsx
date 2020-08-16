import React from 'react'
import { Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Button } from '../components/button'
import { Heading, Paragraph } from '../components/texts'
import { theme, useTheme } from '../styles'

const Content: React.FC = () => {
  const { textSecondary } = useTheme().colors
  return (
    <div>
      <Heading>
        Whoops!
        <br />
        This page is unavailable
      </Heading>
      <br />

      <Paragraph>The page does not exist, or please try again later</Paragraph>
      <br />

      <Link to="/">
        <Button backgroundColor={textSecondary}>Go back home</Button>
      </Link>
    </div>
  )
}

// Component
const NotFoundPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default NotFoundPage
