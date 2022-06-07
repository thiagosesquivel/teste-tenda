import React from 'react'
import Form from '../Form/index'
import Salutation from '../Salutation/index'
import { Container, Grid } from './styles'

export default function Main() {
  return (
    <Container>
        <Grid>
          <Salutation/>
          <Form/>
        </Grid>
    </Container>
    )
}
