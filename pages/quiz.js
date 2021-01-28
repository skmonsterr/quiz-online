import React from 'react';
import Head from "next/head";

import db from '../db.json';
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Button from "../src/components/Button";
import GitHubCorner from "../src/components/GitHubCorner";

// Loadscreen -> Animar o Spinner / load bar
function LoadingWidget(){
    return (
        <Widget>
            <Widget.Header>
                Loading...
            </Widget.Header>
            <Widget.Content>
                [Spinning...]
            </Widget.Content>
        </Widget>

    );
}


export default function QuizPage() {
    return (   
       <QuizBackground backgroundImage={db.bg}>
           <Head>
            <title>Quiz - Perguta [pergunta]</title>
           </Head>
           <QuizContainer>
               <QuizLogo />
               <Widget>
                   <Widget.Header>
                       <h3>
                           Pergunta
                           1
                           de&nbsp; 
                           {`${db.questions.length}`}     
                       </h3>
                       
                   </Widget.Header>
                   <img
                   alt="Descrição" style={{
                       width: '100%',
                       height: '150px',
                       objectFit: 'cover',

                    }}
                    src="https://i.ibb.co/rHv6zDm/tw3-quiz-banner.jpg"/>
                    <Widget.Content>
                        <h2>
                            Título
                        </h2>
                        <p>
                            Descrição
                        </p>
                        <Button type="submit" >
                            Confirmar
                        </Button>     
                    </Widget.Content>
                   <GitHubCorner />
               </Widget>
               <LoadingWidget />
           </QuizContainer>
       </QuizBackground>
    );
  }