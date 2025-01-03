import Container from "../Item-Layout/Container";
import RenameTitle from "../Tools/RenameTitle";
import style from "./Projetos.module.css";
import { toast } from "react-toastify";
import LoadingSVG from "../Item-Layout/Loading";
import axios from "axios";

import { BsLink, BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Projetos() {
  const [DataBase, setDataBase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [arrayIDLike, setArrayIDLike] = useState(
    JSON.parse(localStorage.getItem("arrayId")) || []
  );
  const [handleSubmit, setHandleSubmit] = useState(true);

  const GetDataBase = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_DB_API);

      setTimeout(() => {
        setLoading(false);
        toast.success("Dados carregados com sucesso!");
      }, 100);

      setDataBase(res.data);
    } catch (error) {
      toast.error("Erro na base de dados!");
    }
  };

  useEffect(() => {
    GetDataBase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDataBase]);

  useEffect(() => {
    localStorage.setItem("arrayId", JSON.stringify(arrayIDLike));
  }, [arrayIDLike]);

  const setLike = async (id) => {
    const IDString = String(id);

    const likeTrue = localStorage.getItem(IDString);
    const projetoID = DataBase.filter((data) => data.id === id);

    if (!projetoID || !handleSubmit) return; // Se não encontrar o projeto, retorne
    setHandleSubmit(false);

    try {
      // 3. Incrementa o valor de "like" do projeto

      let updatedLike = projetoID[0].curtidas;
      if (likeTrue) {
        updatedLike -= 1;
        localStorage.removeItem(IDString);
        setArrayIDLike((prevArray) =>
          prevArray.filter((item) => item !== IDString)
        );
      } else {
        localStorage.setItem(IDString, "true");
        updatedLike += 1;
      }

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Obtém a chave no índice atual

        if (String(key) === IDString) {
          setArrayIDLike((prevArray) => [...prevArray, IDString]);
        }
      }

      // 4. Atualiza o valor de "like" no backend usando o método PATCH
      await axios
        .put(process.env.REACT_APP_DB_API + `/${id}`, {
          curtidas: updatedLike,
          nome: projetoID[0].nome,
          descricao: projetoID[0].descricao,
          tecnologias: projetoID[0].tecnologias,
          imagem: projetoID[0].imagem,
          site: projetoID[0].site,
          repositorio: projetoID[0].repositorio,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));

      // 5. Atualiza o estado local para refletir o novo valor de "like"
      setDataBase((prev) =>
        prev.map(
          (item) =>
            // Para cada item no estado, verifica se o ID corresponde ao item atualizado
            item.id === id
              ? { ...item, curtidas: updatedLike } // Atualiza o valor de "like" no item correspondente
              : item // Mantém os itens que não foram atualizados inalterados
        )
      );

      setHandleSubmit(true);
    } catch (error) {
      // 7. Captura e exibe qualquer erro que ocorrer durante o processo
      toast.error("Erro ao processar o like: " + error.message);
      console.error(error); // Mostra detalhes do erro no console para depuração
    }
  };

  return (
    <Container>
      <main className={style.main}>
        <RenameTitle initialTitle={"C&Lio - Projetos"} />
        <header>
          <h1> projetos</h1>
          <p>Aqui esta alguns do meus projetos.</p>
        </header>
        {loading && <LoadingSVG />}
        <section>
          {DataBase &&
            !loading &&
            DataBase.map(
              ({
                id,
                nome,
                descricao,
                repositorio,
                site,
                tecnologias,
                imagem,
                curtidas,
              }) => (
                <article key={String(id)}>
                  <header>
                    <aside>
                      <img
                        src="arquivos/foto.webp"
                        alt="foto perfil"
                        title="foto perfil"
                      />
                    </aside>

                    <aside>
                      <h2>{nome}</h2>
                      <p>Desenvolver FrontEnd | ReactJs | Analista De Dados</p>
                      <p>Célio Da Silva</p>
                    </aside>
                    <aside>
                      <a
                        href="https://www.linkedin.com/in/celiodasilva01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Veja o repositorio no GitHub"
                        className={style.btnlink}
                      >
                        <BsLink size={24} />
                      </a>
                    </aside>
                  </header>
                  <p>{descricao}</p>
                  <h3>Tecnologias utilizadas:</h3>
                  <aside>
                    <p>{tecnologias}</p>

                    {site.trim() !== "" && (
                      <p>
                        Hospedagem : &nbsp;
                        <a
                          href={site}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Veja o repositorio no GitHub"
                          className={style.btnlink}
                        >
                          {site}
                        </a>
                      </p>
                    )}

                    <p>
                      Repositorio : &nbsp;
                      <a
                        href={repositorio}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Veja o repositorio no GitHub"
                      >
                        {repositorio}
                      </a>
                    </p>
                  </aside>

                  <img
                    src={imagem}
                    alt="Interface do projeto de login e cadastro"
                  />

                  <footer>
                    <button
                      aria-label={
                        arrayIDLike.includes(String(id))
                          ? "Descurtir"
                          : "Curtir"
                      }
                      title={
                        arrayIDLike.includes(String(id))
                          ? "Descurtir"
                          : "Curtir"
                      }
                      style={{
                        background: arrayIDLike.includes(String(id))
                          ? "#07083b"
                          : "",
                        color: arrayIDLike.includes(String(id))
                          ? "#b98639"
                          : "",
                      }}
                      onClick={() => {
                        setLike(id);
                      }}
                    >
                      {arrayIDLike.includes(String(id)) ? (
                        <BsHandThumbsUpFill
                          style={{
                            color: arrayIDLike.includes(String(id))
                              ? "#b98639"
                              : "",
                          }}
                        />
                      ) : (
                        <BsHandThumbsUp />
                      )}
                      &nbsp; &nbsp;
                      {arrayIDLike.includes(String(id)) ? "Curtiu" : "Curtir"}
                    </button>

                    <aside
                      style={{
                        color: arrayIDLike.includes(String(id))
                          ? "#b98639"
                          : "",
                      }}
                    >
                      {arrayIDLike.includes(String(id)) ? (
                        <BsHandThumbsUpFill
                          style={{
                            color: arrayIDLike.includes(String(id))
                              ? "#b98639"
                              : "",
                          }}
                        />
                      ) : (
                        <BsHandThumbsUp />
                      )}
                      &nbsp;
                      {curtidas > 1 && arrayIDLike.includes(String(id))
                        ? `Voce e ${curtidas - 1} ${
                            curtidas > 2 ? "pessoas" : "pessoa"
                          } `
                        : curtidas}
                    </aside>
                  </footer>
                </article>
              )
            )}
        </section>
      </main>
    </Container>
  );
}
