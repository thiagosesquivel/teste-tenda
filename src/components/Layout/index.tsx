import React from 'react'
import { Container, ImageBg, ImageBg2 } from './style'


export default function Layout({children}) {
  return (
    <Container>
      <ImageBg src="./bg.png" />
      <ImageBg2 src="./bg2.png" />
      {children}
    </Container>)
}
