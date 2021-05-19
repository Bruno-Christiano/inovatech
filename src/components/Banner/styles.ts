import styled, { css } from 'styled-components'
import media from 'styled-media-query'

interface ContainerProps {
  disabledImageMobile: boolean
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  position: relative;

  background: ${({ theme }) => theme.colors.primary};

  width: 100%;
  min-height: 200px;
  border-radius: 15px;

  img {
    width: 165px;
    height: auto;

    position: relative;
    bottom: 0;
    right: 2em;
    transition: transform 1.2s;
  }
  img:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  ${media.lessThan('medium')`
    min-height: 100px;
    border-radius: 12px;

    img {
      right: 0.5rem;
      width: 120px;
    }
  `}

  ${props =>
    props.disabledImageMobile &&
    css`
      ${media.lessThan('medium')`
        img {
          width: 0;
        }
      `}
    `}

  box-shadow: 0 20px 44px 0 rgba(27, 36, 72, 0.26);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 70%;

  p {
    font-size: 3rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    line-height: 1;
    font-size: 4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.pink};
  }

  ${media.lessThan('medium')`
    width: 65%;

    p {
      font-size: 1rem;
    }

    h1 {
      font-size: 1.25rem;
    }
  `}
`

export const ContentAnswers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2em 0 2em 2em;
  width: 70%;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};

    strong {
      font-size: 1.25rem;
      padding-left: 0.5rem;
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  ${media.lessThan('medium')`
    width: 100%;
    padding: 1rem;

    p {
      font-size: 0.5rem;

      strong {
        font-size: 0.75rem;
        padding-left: 0.25rem;
      }
    }
  `}
`

export const ContentAnswersTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 150px;
  margin-bottom: 1rem;

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    font-size: 2rem;
    line-height: 0.8;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.pink};
  }

  ${media.lessThan('medium')`
    margin-bottom: 0.5rem;

    p {
      font-size: 0.75rem;
    }

    h1 {
      font-size: 1rem;
      line-height: 0.5;
    }
  `}
`
