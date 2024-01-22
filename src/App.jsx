import React from "react";
import { Navbar } from "./components/Navbar/navbar";
import { Article } from "./components/Article/Article";

import "./styles/app.css";

import article1Img from "./assets/img/article01.png";
import article2Img from "./assets/img/article02.png";
import article3Img from "./assets/img/article03.png";
import article4Img from "./assets/img/article04.png";
// import { Counter } from "./components/Counter/Coutner";

class App extends React.Component {
  //metodo usado para renderizar
  render() {
    return (
      <>
        <Navbar />
        {/* <Counter /> */}
        <section id="articles">
          <Article
            title="Python aplicado na segurança"
            provider="Python e cybersecurity"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, fugit ratione totam dicta, molestiae asperiores enim quia molestias sequi accusamus blanditiis est iusto nam, tempora ipsa pariatur modi corrupti repellat."
            thumbnail={article1Img}
          />

          <Article
            title="Java vai falir?"
            provider="Java / Golang"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, fugit ratione totam dicta, molestiae asperiores enim quia molestias sequi accusamus blanditiis est iusto nam, tempora ipsa pariatur modi corrupti repellat."
            thumbnail={article2Img}
          />

          <Article
            title="Frontend é só html e css?"
            provider="o que realmente é frontend"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, fugit ratione totam dicta, molestiae asperiores enim quia molestias sequi accusamus blanditiis est iusto nam, tempora ipsa pariatur modi corrupti repellat."
            thumbnail={article3Img}
          />

          <Article
            title="Como iniciar na carreira de TI"
            provider="Roadmap para o iniciante"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, fugit ratione totam dicta, molestiae asperiores enim quia molestias sequi accusamus blanditiis est iusto nam, tempora ipsa pariatur modi corrupti repellat."
            thumbnail={article4Img}
          />
        </section>
      </>
    );
  }
}

export default App;
