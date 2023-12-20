import "./reset.css";
import "./App.css";

import Logo from "./images/logo.png";
import BannerP from "./images/banner-principal.jpg";
import IconMenu from "./images/icon-menu.svg";
import IconFacebook from "./images/icon-facebook.svg";
import IconInstagram from "./images/icon-instagram.svg";
import IconYoutube from "./images/icon-youtube.svg";

function App() {
  return (
    <>
      <header className="header-mobile">
        <div className="logo-mobile">
          <img src={Logo} alt="Logo Almeida JJ" />
        </div>
        <div className="menu-mobile">
          <img src={IconMenu} alt="Menu" />
        </div>
      </header>
      <body>
        <div className="banner-principal">
          <img src={BannerP} alt="Banner bem-vindo" />
        </div>

        <section className="sobrenos-section">
          <span className="titulo-section">Sobre nós</span>
          <p className="text-section">
            A unidade da Vila Maria é liderada por
            <span className="text-bold-section"> Klaus Maine</span> e uma
            seleção de professores para te trazer a melhor experiência
            experiência experiência dentro do esporte.
          </p>
          <button className="button">Venha fazer parte</button>
        </section>

        <section className="card-info-section mb-20">
          <div className="card-info-texts">
            <div className="card-info-content-titles">
              <span className="card-info-title">
                Jiu-Jitsu também é para mulheres
              </span>
              <spa className="card-info-subtitle">
                Motivos para vocês praticarem essa arte.
              </spa>
            </div>
            <ul className="card-info-list">
              <li>serve para a defesa pessoal.</li>
              <li>
                Aumenta a auto-estima, autoconfiança e desenvolve o carácter;
              </li>
              <li>
                Trabalha e define o corpo, como os braços, abdômen e quadril;
              </li>
              <li>
                Acelera o metabolismo e aumenta a resistência do organismo;
              </li>
              <li>Ajuda no controle emocinal e muito mais!</li>
            </ul>
          </div>
        </section>

        <section className="card-info-section">
          <div className="card-info-texts">
            <div className="card-info-content-titles">
              <span className="card-info-title">Jiu-Jitsu Infantil</span>
              <spa className="card-info-subtitle">
                Motivos para seu filho aprender!
              </spa>
            </div>
            <ul className="card-info-list">
              <li>
                As aulas de Jiu Jitsu para crianças tem por objetivo melhorar a
                concentração, proporcionar auto-estima, disciplina e saúde;
              </li>
              <li>
                A prática do Jiu Jitsu infantil vai muito além dos aprendizados
                no tatame, a disciplina e excelência refletem positivamente no
                comportamento da criança em casa e na escola.
              </li>
            </ul>
          </div>
        </section>

        <section className="planos-section">
          <span className="titulo-section">Planos</span>
          <div className="planos-card-content">
            <div className="planos-card">
              <div className="planos-card-tag">
                <span>Plano Recomendado</span>
              </div>

              <div className="planos-card-content-title">
                <span className="planos-card-title">JIU JITSU</span>
                <span>Adulto</span>
              </div>

              <ul className="planos-card-content-info">
                <li>Mínimo 12 meses.</li>
                <li>Recorrente.</li>
              </ul>

              <div className="planos-card-content-valores">
                <div className="planos-card-valor">
                  <span>R$</span>
                  <span>135</span>
                </div>
                <div>
                  <span>,00</span>
                  <span>/mês</span>
                </div>
              </div>

              <div className="planos-card-button">
                <button className="button">Quero esse!</button>
              </div>
            </div>

            <div className="planos-card">
              <div className="planos-card-tag">
                <span>Plano Recomendado</span>
              </div>

              <div className="planos-card-content-title">
                <span className="planos-card-title">JIU JITSU</span>
                <span>Adulto</span>
              </div>

              <ul className="planos-card-content-info">
                <li>Mínimo 12 meses.</li>
                <li>Recorrente.</li>
              </ul>

              <div className="planos-card-content-valores">
                <div className="planos-card-valor">
                  <span>R$</span>
                  <span>135</span>
                </div>
                <div>
                  <span>,00</span>
                  <span>/mês</span>
                </div>
              </div>

              <div className="planos-card-button">
                <button className="button">Quero esse!</button>
              </div>
            </div>

            <div className="planos-card">
              <div className="planos-card-tag">
                <span>Plano Recomendado</span>
              </div>

              <div className="planos-card-content-title">
                <span className="planos-card-title">JIU JITSU</span>
                <span>Adulto</span>
              </div>

              <ul className="planos-card-content-info">
                <li>Mínimo 12 meses.</li>
                <li>Recorrente.</li>
              </ul>

              <div className="planos-card-content-valores">
                <div className="planos-card-valor">
                  <span>R$</span>
                  <span>135</span>
                </div>
                <div>
                  <span>,00</span>
                  <span>/mês</span>
                </div>
              </div>

              <div className="planos-card-button">
                <button className="button">Quero esse!</button>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-info">
            <span>Preparado para mudar de vida? </span>
            <span>Sua transformação começa agora! </span>
            <button className="button">Fale conosco</button>
          </div>
        </section>

        <section className="hours-table-section">
          <span className="titulo-section">Grade de horários</span>
          <div className="content-table">
            <ul className="hours-table">
              <li>Seg</li>
              <li>Ter</li>
              <li>Qua</li>
              <li>Qui</li>
              <li>Sex</li>
              <li>Sab</li>
              <li>Dom</li>
            </ul>

            <ul className="hours-table">
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
            </ul>

            <ul className="hours-table">
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
            </ul>

            <ul className="hours-table">
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
            </ul>

            <ul className="hours-table">
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
            </ul>

            <ul className="hours-table">
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
            </ul>

            <ul className="hours-table">
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
            </ul>

            <ul className="hours-table">
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
              <li>6h - 7h</li>
            </ul>
          </div>
        </section>
      </body>

      <footer className="footer">
        <div className="links-footer">
          <div className="links-content">
            <span className="cta-title">Institucional</span>
            <a href="#">Home</a>
            <a href="#">Sobre nós</a>
            <a href="#">Planos</a>
            <a href="#">Contato</a>
          </div>

          <div className="links-content">
            <span className="cta-title">Contato</span>
            <a href="#">(11) 2955 - 5434</a>
            <a href="#">(11) 99477 - 9150</a>
          </div>

          <div className="links-content">
            <span className="cta-title">Localização</span>
            <a href="#">
              Av. Alberto Byington, N°970 Vila Maria Alta, São Paulo - SP CEP:
              02127-000
            </a>
          </div>

          <div className="icons-footer">
            <a href="#">
              <img src={IconFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={IconInstagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={IconYoutube} alt="Youtube" />
            </a>
          </div>
        </div>
        <div className="signature-footer">
          <span>Copyright © 2023 Almeida JJ Vila Maria</span>
        </div>
      </footer>
    </>
  );
}

export default App;
