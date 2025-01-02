import { dataBase } from "../DataBase/dataBase.js";

export const getDB = (_, res) => {
  const query = "SELECT * FROM portifolio";

  dataBase.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const setDB = (req, res) => {
  const query =
    "INSERT INTO portifolio (`curtidas`,`nome`,`descricao`,`tecnologias`,`imagem`,`site`,`repositorio`) VALUES(?)";

  const values = [
    req.body.curtidas,
    req.body.nome,
    req.body.descricao,
    req.body.tecnologias,
    req.body.imagem,
    req.body.site,
    req.body.repositorio,
  ];
  dataBase.query(query, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Dados inseridos");
  });
};

export const updateDB = (req, res) => {
  const query =
    "UPDATE portifolio SET `curtidas` = ?, `nome` = ?,`descricao` = ?,`tecnologias` = ?,`imagem` = ?,`site` = ?,`repositorio` = ? WHERE `id` = ?";

  const values = [
    req.body.curtidas,
    req.body.nome,
    req.body.descricao,
    req.body.tecnologias,
    req.body.imagem,
    req.body.site,
    req.body.repositorio,
  ];

  dataBase.query(query, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    //return res.status(200).json("portifolio atualizado");
    return res.status(200).json();
  });
};

export const deleteDB = (req, res) => {
  const query = "DELETE FROM portifolio WHERE `id` = ?";

  dataBase.query(query, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("deletado");
  });
};
