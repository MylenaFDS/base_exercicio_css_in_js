import React from 'react'
import styled from 'styled-components'
import { FormContainer, HeroTitle } from './styles' // Importando estilos de styles.ts

const Hero = () => (
  <FormContainer>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </FormContainer>
)

export default Hero
