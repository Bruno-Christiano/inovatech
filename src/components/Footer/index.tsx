import React from 'react'

import { Container } from './styles'

export const Footer = () => (
  <Container>
    <h3>
      <strong>Inovatech</strong> {new Date().getFullYear()}{' '}
      <a href="#" target="_new"></a>
    </h3>
  </Container>
)
