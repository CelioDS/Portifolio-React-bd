import style from "./Home.module.css";
import Container from "../Item-Layout/Container";
import RenameTitle from "../Tools/RenameTitle";
import LinkButton from "../Item-Layout/LinkButton";

export default function Home() {
  return (
    <Container>
      <main className={style.main}>
        <RenameTitle initialTitle={"C&Lio - Home"} />
        <h1>Bem-vindo ao meu portfólio!</h1>
        <p>
          Olá, eu sou o Célio, atualmente estou me dedicando aos estudos para me
          tornar um desenvolvedor Full Stack e analista de dados. Sou movido
          pela curiosidade e pela paixão por aprender, especialmente sobre tudo
          o que envolve ciência e tecnologia.
        </p>
        <h1>Sobre mim</h1>
        <p>
          Sou formado em Análise e Desenvolvimento de Sistemas e Pós-Graduado em
          Ciência de Dados e Inteligência Artificial. Tenho um grande interesse
          em explorar soluções inovadoras e transformar ideias em realidade por
          meio da tecnologia.
        </p>

        <h1>Experiências</h1>
        <p>
          Tenho experiência como Assistente de TI, atuando em atendimento e
          suporte ao cliente, instalação de software e desenvolvimento de
          websites com uso de Css, Html, MySQL, JavaScript, NodeJS e ReactJS.
        </p>
        <ul>
          <li>
            <strong>Front-End:</strong> Html, Css, JavaScript, Bootstrap e
            ReactJS.
          </li>
          <li>
            <strong>Back-End:</strong> Criação de APIs REST utilizando PHP, SQL,
            NodeJS e MySQL.
          </li>
          <li>
            <strong>Analise de Dados:</strong> SQL, Excel, PowerBI e Python.
          </li>
        </ul>

        <footer>
          <LinkButton to="/Projetos" text={"veja os projetos"} />

          <a
            className={style.btnCV}
            href="/arquivos/CelioSilvaTI.pdf"
            download=""
            id="btn"
            title="Baixar curriculo"
            aria-label="Baixar curriculo "
          >
            Download CV
          </a>
        </footer>
      </main>
    </Container>
  );
}
