import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";

import db from "../db.json";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Input from "../src/components/Input";



// Criando Compontente CONTAINER
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

// FUNÇÃO PRINCIPAL RETORNA HTML
export default function Home() {
  // Por padrão declarar aqui os hooks
  const router = useRouter();
  const [name, setName] = React.useState("");

  return (
    <QuizBackground backgroundImage={db.bg}>
      {/* BEGIN HEAD */}
      <Head>
        <title>Quiz - The Witcher 3</title>
      </Head>

      {/* BEGIN LOGO AND CARDS */}
      <QuizContainer>
        {/* BEGIN LOGO */}
        <QuizLogo />

        {/* BEGIN CARD 1 */}
        <Widget>
          <Widget.Header>
            <h1>The Witcher 3</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (e) {
                e.preventDefault();
                // -> Rotas
                // router manda para a próxima página
                router.push(`/quiz/?name=${name}`);
              }}
            >
              <Input 
                name="UserName"
                onChange={(e)=> {
                  // State
                  //name = e.target.value;
                  setName(e.target.value);
                }}
                placeholder="Digite seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                {`Vamos jogar ${name}!`}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        {/* BEGIN CARD 2  */}
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera -&gt;</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem Ipum Dolor Sit Amet</p>
          </Widget.Content>
        </Widget>

        {/* BEGIN FOOTER */}
        <Footer />

        {/* BEGIN GITHUBCORNER */}
        <GitHubCorner projectUrl="https://github.com/" />
      </QuizContainer>
    </QuizBackground>
  );
}
