import React from 'react'

import {
  Container,
  Content,
  ContentAnswers,
  ContentAnswersTitle
} from './styles'

export const Banner = ({ userData }) => {
  const userDataFormatted = {
    18: '0 a 18',
    25: '18 a 59',
    65: '60 a 74',
    76: 'Mais de 75',

    saude: 'Saúde',
    educacao: 'Educação',
    seguranca: 'Segurança',
    outra: 'Outra',

    indigenas: 'Indígenas',
    quilombolas: 'Quilombolas',
    ribeirinhos: 'Ribeirinhos',
    nao: 'Não'
  }

  return (
    <Container disabledImageMobile={!!userData}>
      {userData ? (
        <ContentAnswers>
          <ContentAnswersTitle>
            <p>Suas Informações</p>
          </ContentAnswersTitle>
          <p>
            1. Idade:
            <strong>{userDataFormatted[userData.age]}</strong>
          </p>
          <p>
            2. Área de atuação:
            <strong>{userDataFormatted[userData.office]}</strong>
          </p>
          <p>
            3. Comorbidade:
            <strong>{userData.comorbidity ? 'Sim' : 'Não'}</strong>
          </p>
          <p>
            4. Grupo:
            <strong>{userDataFormatted[userData.group]}</strong>
          </p>
          <p>
            5. Gestante:
            <strong>{userData.pregnant ? 'Sim' : 'Não'}</strong>
          </p>
        </ContentAnswers>
      ) : (
        <Content>
          <p>Quando é minha vez?</p>
        </Content>
      )}
      <img src="/syringe.svg" alt="Icone" />
    </Container>
  )
}
