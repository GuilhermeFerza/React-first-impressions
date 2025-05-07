import React, { useState } from "react";
import "./css/App.css";
import "./css/media.css";
import "./css/index.css";
import img1 from "./assets/teste.jpg";
import img2 from "./assets/teste2.jpg";
import Tabela from "./components/TabelaExemplo.jsx";
import Header from "./components/header.jsx";

function App() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <main>
        <section id="home" className="home">
          <div className="container">
            <div className="home-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur et magni officiis, assumenda alias temporibus
                delectus obcaecati, eius, id praesentium officia quibusdam
                voluptas maxime itaque porro facilis sunt laborum dolores!
              </p>
              <img src={img1} alt="teste2" />
            </div>
            <div className="tabela-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                excepturi iste reprehenderit repellat vel voluptatem veniam
                iusto quae maxime sunt consectetur dolor obcaecati nobis atque,
                corporis magni aliquid! Aspernatur, nisi?
              </p>
              <Tabela />
            </div>
          </div>
        </section>
        <section id="devices" className="devices">
          <div className="container">
            <div className="devices-content">
              <div className="post-boxes">
                <img src={img2} alt="teste2" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="post-boxes">
                <img src={img2} alt="teste2" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="post-boxes">
                <img src={img2} alt="teste2" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                aliquam, perferendis quod autem maiores earum modi! Ipsum eaque
                incidunt saepe in dolorum nostrum eum. Eaque adipisci inventore
                amet nihil dignissimos?
              </p>
            </div>
          </div>
        </section>
      </main>
      <section id="tabela" className="tabelapost">
        <Tabela />
      </section>
      <footer>
        <p>2025 BankApp- All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
