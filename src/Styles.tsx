import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }

  .heart {
  height: 70px;
  width: 70px;
  background: #f20044;
  position: relative;
  transform: rotate(-45deg);
  box-shadow: -10px 18px 90px #f20044;
  animation: heart 0.6s linear infinite;
}

.heart:before{
  content: ' ';
  position: absolute;
  height: 70px;
  width: 70px;
  background: #f20044;
  top: -50%;
  border-radius: 50px;
  box-shadow: -10px -10px 90px #f20044;
}

.heart:after{
  content: ' ';
  position: absolute;
  height: 70px;
  width: 70px;
  background: #f20044;
  right: -50%;
  border-radius: 50px;
  box-shadow: 10px 10px 90px #f20044;
}

  body {
    margin: 0;
    background-color: #1a1a1a; /* Um cinza escuro é melhor que preto puro para ler */
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  h3 {
    font-weight: 400;
    color: #cccccc;
  }

  /* Animação do coração */
  @keyframes heart-pulse {
    0%{
      transform: rotate(-45deg) scale(1.07);
    }
    80%{
      transform: rotate(-45deg) scale(1.0);
    }
    100%{
      transform: rotate(-45deg) scale(0.8);
    }
  }
`;

export const Main = styled.main`
`;

export const Inicio = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextosInicio = styled.div`
  text-align: center;
`;

export const CoracaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8rem;
  }
`;

export const Heart = styled.div`
  height: 70px;
  width: 70px;
  background: #f20044;
  position: relative;
  transform: rotate(-45deg);
  box-shadow: -10px 10px 90px #f20044;
  animation: heart-pulse 0.6s linear infinite;
  margin-top: 2rem;
  margin-bottom: 5rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 70px;
    width: 70px;
    background: #f20044;
    border-radius: 50%;
    box-shadow: -10px 10px 90px #f20044;
  }

  &::before {
    top: -50%;
    left: 0;
  }

  &::after {
    top: 0;
    right: -50%;
  }
`;


export const Meio = styled.section`
  text-align: center;
`;

export const ImgUrca = styled.img`
  width: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

export const TextoMeio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem auto;
`;

export const Coracao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8rem;
`

export const TimelineContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TimelineTitle = styled.h2`
  text-align: center;
  color: #f20044;
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #f20044;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

export const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #1a1a1a;
    border: 4px solid #f20044;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;

    &::after {
      left: -16px;
    }
  }
`;

export const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: #2a2a2a;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  h3 {
    color: #f20044;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.4rem;
  }

  p {
    color: #ffffff;
    line-height: 1.6;
  }
`;

export const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const FullImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Date = styled.span`
  color: #f20044;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  color: #f20044;
  margin-bottom: 2rem;
`;

export const ConclusionSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
`;

export const ConclusionTitle = styled.h2`
  color: #f20044;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

export const ConclusionText = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

export const ThankYouText = styled.p`
  color: #f20044;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 3rem;
  font-style: italic;
`;