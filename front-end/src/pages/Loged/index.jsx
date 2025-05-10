import "../../css/App.scss";
import "../../css/index.scss";
import "../../css/loged.scss";
import Header from "../../components/headerLoged.jsx";
import Tabela from "../../components/TabelaExemplo.jsx";

function Index() {
  return (
    <div>
      <Header />
      <main>
        <section id="" className="first-section">
          <div className="container">
            <div className="first-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                itaque repudiandae asperiores saepe suscipit similique,
                consequuntur magnam nam qui, a fuga veniam? Necessitatibus
                quaerat nostrum, rem enim nobis dolor iure.
              </p>
              <Tabela />
            </div>
          </div>
        </section>
        <section id="" className="second-section">
          <div className="container">
            <div className="second-content">
              <Tabela />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                itaque repudiandae asperiores saepe suscipit similique,
                consequuntur magnam nam qui, a fuga veniam? Necessitatibus
                quaerat nostrum, rem enim nobis dolor iure.
              </p>
            </div>
          </div>
        </section>
        <section id="" className="first-section">
          <div className="container">
            <div className="first-content">
              <Tabela />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                itaque repudiandae asperiores saepe suscipit similique,
                consequuntur magnam nam qui, a fuga veniam? Necessitatibus
                quaerat nostrum, rem enim nobis dolor iure.
              </p>
            </div>
          </div>
        </section>
        <section id="" className="third-section">
          <div className="container">
            <div className="third-content">
              <div className="tabela">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis consequuntur cum distinctio facilis quisquam iste
                  corporis laboriosam aut magni dolor soluta enim, accusantium
                  quod ipsum similique veritatis quis, sit necessitatibus!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  nulla repellat non iste aspernatur, facilis et rerum
                  doloremque tenetur suscipit a doloribus eveniet laboriosam
                  aliquam asperiores, ullam sunt id recusandae.
                </p>
              </div>
              <div className="tabela">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, cum, eaque earum harum itaque totam, sit
                  distinctio non suscipit numquam sapiente! Odio, quae. Ratione
                  sit esse minima, itaque dolor consequuntur?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam itaque repudiandae asperiores saepe suscipit
                  similique, consequuntur magnam nam qui, a fuga veniam?
                  Necessitatibus quaerat nostrum, rem enim nobis dolor iure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>2025 BankApp- All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Index;
