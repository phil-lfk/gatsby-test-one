import * as React from 'react'

const AboutPage = () => {
  return (
    <main>
      <h1>A propos</h1>
      <p>Salut, je débute sur Gatsby</p>
    </main>
  )
}

export const Head = () => (
    <>
      <title>A propos</title>
      <meta name="description de la page" content="Ma propre description" />
    </>
  )

export default AboutPage