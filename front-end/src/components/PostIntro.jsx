import "../css/PostIntro.scss";
import "../css/App.scss";
import "../css/media.scss";
import Tabela from "./TabelaExemplo.jsx";
import { Link } from "react-router-dom";

function PostIntro() {
  return (
    <div>
      <section id="post-intro" className="post-intro">
        <div className="container">
          <div className="post-intro-content">
            <div className="cta">
              <div className="cta-excerpt">
                <h2>Did you like our project?</h2>
                <p>So click and become one part of our program</p>
              </div>
              <Link to="/register">
                <button>Sign-Up Now</button>
              </Link>
            </div>
            <div className="tabela">
              <Tabela />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PostIntro;
