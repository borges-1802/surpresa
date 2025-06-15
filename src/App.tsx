import './Styles.tsx'
import { 
  Main, 
  GlobalStyle, 
  HeroSection, 
  HeroTitle, 
  HeroSubtitle,
  TimelineContainer,
  TimelineTitle,
  Timeline,
  TimelineItem,
  TimelineContent,
  Date,
  Heart,
  ImgUrca,
  TextoMeio,
  EventImage,
  FullImage,
  ConclusionSection,
  ConclusionTitle,
  ConclusionText,
  ThankYouText
} from './Styles.tsx'

import imgUrca from './assets/imgUrca.png'
import imgFut from './assets/imgFut.jpg'
import imgPrimeiro from './assets/imgPrimeiroRole.jpg'
import imgLibras from './assets/imgLibras.png'
import imgPlaneta from './assets/imgPlaneta.jpg'
import imgCobal1 from "./assets/imgCobal1.jpg"
import imgLapa from "./assets/imgLapa.jpg"
import imgMarinha from "./assets/imgMarinha.jpg"
import imgGRIS from "./assets/imgGris.jpg"
import imgGRIS2 from "./assets/imgGris2.jpg"
import imgCordao from "./assets/imgNiver.jpg"
import imgFrango from "./assets/imgFrango.jpg"
import imgGirassol from "./assets/imgGirassol.jpg"
import imgCalourada from "./assets/imgCalourada.jpg"
import imgTemaki from "./assets/imgTemaki.jpg"
import imgKaraoke from "./assets/imgKaraoke.jpg"
import imgUrca2 from "./assets/imgUrca2.jpg"

function App() {
  const timelineEvents = [
    {
      date: "11 de Dezembro de 2024",
      title: "Dia do Lendário Fut BCC",
      description: "É impressionante que o Isaac sempre tá junto pqp... Mas dito isto, 'cara fiquei muito surpreso com sua presença no futbcc'! (ali eu não sabia o que fazer)",
      image: imgFut
    },
    {
      date: "20 de Dezembro de 2024",
      title: "O primeiro 'date' de verdade",
      description: "Esse dia foi uma completa aventura, lembro até hoje de eu te vencendo na sinuca (lógico pq eu sou o melhor), a gente indo pro cobal e CHOVE O MUNDO no meio da reunião da ejcm, pra aí deitarmos no gramado do parque e ficar por lá até acabarem os 410T's, o seu desespero e meu desenrolar fez dar tudo certo, e com certeza foi de fato um dia bem marcante pra gente..",
      image: imgPrimeiro
    },
    {
      date: "Janeiro de 2025",
      title: "OMG LIBRAS!!!!",
      description: "Quem diria que realmente a gente puxou libras né, no início eu tava meio pensativo de ir mal e não saber NADA nem saber meu nome, mas ao longo do caminho a matéria foi ficando muito maneira, os professores 100% queridos amo eles!!!! E arrumamos nosso divo pra ficar de vela, ops, pra ser nosso trio! Uma das grandes experiências legais do ano minha duplinha (dando várias flores roubadas) <3",
      image: imgLibras,
      useFullImage: true
    },
    {
      date: "21 de Janeiro de 2025",
      title: "A ida ao Planetário",
      description: "Você coloca nos top rolês! E eu concordo! Foi muitoooooo bonitinho ver a sua reação ao pisar na gávea e principalmente, no planetário pela primeira vez, parecia uma criança ganhando doce kkkkk que fofa! Dito isto, adorei ver o céu (apesar dos técnicos não quererem mostrar o filme...) e aprender mais sobre signos (mentira eu to só enrolando sobre os signos), voltaria muito fácil pra esse dia pra curtir um pouco mais desse universo contigo!",
      image: imgPlaneta,
      useFullImage: true
    },
    {
      date: "24 de Janeiro de 2025",
      title: "Um dos cobais de Libras!",
      description: "Lógico que tivemos muitos rolês mas eu gosto de salientar nossos cobais que fazemos ao longo do caminho, esse aí foi pra tentar te converter em tricolor mas infelizmente ainda não deu certo....",
      image: imgCobal1
    },
    {
      date: "27 de Janeiro de 2025",
      title: "Centro da Cidade e seus Pontos Turísticos",
      description: "Posso ser sincero? UM DOS MELHORES DIAS OK??? Que dia bom poder te levar pra conhecer a Biblioteca (apesar de não termos visto nenhum livro), e aproveitar pra explorar o centro da cidade... Você realmente duvidava muito que eu poderia te levar pra três lugares maneiros em menos de 4hrs, mas olha aí do nada a Lapa e a Selarão! Gosto muito de poder lembrar sua cybershot ficando recheada de fotos marcantes e poder ver seu sorrisinho de felicidade genuína :)",
      image: imgLapa,
      useFullImage: true
    },
    {
      date: "28 de Janeiro de 2025",
      title: "Marinha",
      description: "Era pra ser o museu do amanhã mas acabamos parando dentro de um submarino omg!",
      image: imgMarinha,
      useFullImage: true
    },
    {
      date: "Janeiro e Fevereiro de 2025",
      title: "OMGG GRIS!!!!",
      description: "É um dos nossos maiores sonhos dentro da UFRJ, a área da segurança, mas o sufoco do processo muito árduo deixou o processo difícil.... Mas pra mim o que importava mais não era nem entender 100% das aulas presenciais e sim poder ficar mais tempo do seu lado :)",
      image: imgGRIS2,
      useFullImage: true
    },
    {
      date: "7 de Fevereiro de 2025",
      title: "Um dos cobais do GRIS",
      description: "O GRIS... Foi uma das etapas definitivamente, que começamos focados mas acabou que a pressão do período iria acabar com a gente, tivemos alguns roles e cobais que foi bom pra se distrair (saudade desse tempo que não tinhamos nenhuma obrigação de verdade).",
      image: imgGRIS
      ,useFullImage: true
    },
    {
      date: "21 de Fevereiro de 2025",
      title: "Meu presente de aniversário",
      description: "É verdade que saímos no meu aniversário, amei tudo, a companhia dos nossos amigos e a sua companhia (depois de vc ter me dado o golpe da foto de casa), sem palavras pra descrever a montanha russa de emoção que foram nesses dias, o seu presente me deu mais esperanças de permanecer acreditando que eu poderia te conquistar mais, tanto que uso tanto como o cordão quanto a carteira até hoje (o chocolate infelizmente já foi a um bom tempo) <3",
      image: imgCordao
      ,useFullImage: true
    },
    {
      date: "27 de Fevereiro de 2025",
      title: "O FRANGO NÃOOOOOOOOO",
      description: "É importante lembrar disso aqui KKKKKKKKK Uma das maiores loucuras que eu já fiz que em vez de ser uma surpresa virou uma paranoia pqp eu fiz merda, mas fica de recordação a minha primeira viagem de 410!",
      image: imgFrango
      ,useFullImage: true
    },
    {
      date: "17 de Março de 2025",
      title: "Primeiro encontro do semestre",
      description: "Essa imagem fala mais do que mil palavras (olha seu sorriso lindo e você toda boba aaaaa).",
      image: imgGirassol
      ,useFullImage: true
    },
    {
      date: "21 de Março de 2025",
      title: "Sua Primeira Festa!",
      description: "OMGGG QUEM DIRIA, você numa Calourada Unificada E**l*y T*v**es? Aparentemente alguém está começando a viver (e correr pq nesse dia a gente correu uma maratona pra você não perder o ônibus....)",
      image: imgCalourada
      ,useFullImage: true
    },
    {
      date: "12 de Maio de 2025",
      title: "TEMAKI! =D",
      description: "Percebeu que não teve nada de abril? É a rotina batendo na nossa porta, e mesmo assim eu tento sempre que posso poder te animar com surpresas pequenas ou grandes, tal qual o temaki que você queria tanto experimentar! Com certeza uma das grandes instituições de comida que já experimentei, muito bom!",
      image: imgTemaki
      ,useFullImage: true
    },
    {
      date: "23 de Maio de 2025",
      title: "Um rolê no karaokê",
      description: "Esse foi um dos bons rolês pra sair da rotina, um karaokê com suas bests! Não queria ser o chato pra destruir um chá mulheres novamente mas eu gosto muito de cantar e pela primeira vez com sua companhia é surreal de gostoso a gente cantando uma sofrenciazinha juntinho omggg!",
      image: imgKaraoke
      ,useFullImage: true
    },
    {
      date: "2 de Junho de 2025",
      title: "Fuga da Rotina",
      description: "Precisava te levar pra distrair, você poderia explodir a qualquer momento. Sempre trago algo de dentro da cartola pra tentar diminuir sua ansiedade e dessa vez aprontei com a Zona Sul e uma bela vista! A pipopa Maná foi o toque especial pra fechar com esse dia, eu acho que cumpri bem a minha missão nesse dia...",
      image: imgUrca2
      ,useFullImage: true
    }
  ];

  return (
    <>
      <GlobalStyle />
      <Main>
        <HeroSection>
          <HeroTitle>Olá Sra iwmillyx (ou m!)!</HeroTitle>
          <HeroSubtitle>Seja bem-vinda ao site especial feito com carinho para você :)</HeroSubtitle>
          <Heart />
          <ImgUrca src={imgUrca} alt='Dia da Urca'/>
          <TextoMeio>
            Você pode se perguntar, ué mas porque você não colocou meu nome de verdade?
            Resposta: Pois como segurança e hacker você deveria saber que se alguem escrevesse seu nome completo no google com certeza isso aqui ia aparecer kkkkkkkkkkkkkkkkkkk
            <br></br>
            <h2>Mas vamos para o que interessa:</h2>
            Decidi criar uma linha do tempo com algumas de nossas memórias marcantes, espero que goste!
          </TextoMeio>
        </HeroSection>

        <TimelineContainer>
          <TimelineTitle>A Linha do Tempo fatorial!</TimelineTitle>
          <Timeline>
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineContent>
                  <h3>{event.title}</h3>
                  <Date>{event.date}</Date>
                  {event.image && (
                    event.useFullImage ? 
                    <FullImage src={event.image} alt={event.title} /> :
                    <EventImage src={event.image} alt={event.title} />
                  )}
                  <p>{event.description}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineContainer>

        <ConclusionSection>
          <ConclusionTitle>E então....</ConclusionTitle>
          <ConclusionText>
            Você é uma pessoa especial pra mim, espero que você entenda isso em algum momento. Não quero atacar sua ansiedade e nem te tornar mais insegura, eu quero poder ser a chave pra cada desafio e poder dar esse pingo de alegria pra você diariamente.
          </ConclusionText>
          <ConclusionText>
            Espero que tenha gostado dessa surpresa, já dizia Martinho da Vila: "Não é prata, não é ouro, é uma coisa bem singela". E espero que possamos continuar tendo memórias pra nossa linha do tempo ser infinita...
          </ConclusionText>
          <ThankYouText>
            Você sabe que é incrível, sra m! Te amo muito! ❤️
          </ThankYouText>
        </ConclusionSection>
      </Main>
    </>
  )
}

export default App
