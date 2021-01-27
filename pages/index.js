import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

// Criando Compontente BACKGROUND

// const BackgroundImage = styled.div`
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `;

// Criando Compontente LOGO

// Criando Compontente CONTAINER
export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px){
  margin: auto;
  padding: 15px;
}
`;


// FUNÇÃO PRINCIPAL RETORNA HTML
export default function Home() {
  return (
    
      
      <QuizBackground backgroundImage={db.bg} >
         <QuizContainer>
        {/* BEGIN CARD 1 */}
        <Widget>
          <Widget.Header>
            <h1>The Witcher 3</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem Ipum Dolor Sit Amet</p>
          </Widget.Content>           
        </Widget>
        {/* BEGIN CARD 2  */}
        <Widget>
          <Widget.Header>
            <h1>Dicas -&gt;</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem Ipum Dolor Sit Amet</p>
          </Widget.Content>
        </Widget>
        <Footer />
      <GitHubCorner projectUrl="https://github.com/skmonsterr"/>
        </QuizContainer>
      </QuizBackground>
  );
}