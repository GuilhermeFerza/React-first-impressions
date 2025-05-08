import "../css/App.scss";
import "../css/media.scss";
import "../css/index.scss";
import img1 from "../assets/teste.jpg";
import imgPost from "../assets/teste2.jpg";
import imgPost2 from "../assets/box.jpg";
import imgPost3 from "../assets/card.jpg";
import Tabela from "../components/TabelaExemplo.jsx";
import Header from "../components/header.jsx";
import PostIntro from "../components/PostIntro.jsx";

function Home() {
  return (
    <div>
      <Header />

      <main>
        <section id="home" className="home">
          <div className="container">
            <h2 className="hometext">Home</h2>
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
            <h2 className="devicestext">Devices</h2>
            <div className="devices-content">
              <div className="post-boxes">
                <div className="image-container">
                  <img src={imgPost} alt="teste2" />
                </div>
                <div className="post-excerpt">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="post-boxes">
                <div className="image-container">
                  <img src={imgPost2} alt="teste2" />
                </div>
                <div className="post-excerpt">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <div className="post-boxes">
                <div className="image-container">
                  <img src={imgPost3} alt="teste2" />
                </div>
                <div className="post-excerpt">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container">
            <h2 className="abouttext">About</h2>
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
        <section id="tabela" className="tabelapost">
          <div className="container">
            <Tabela />
          </div>
        </section>
        <PostIntro />
      </main>
      <footer>
        <p>2025 BankApp- All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
