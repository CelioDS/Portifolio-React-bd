import mysql from "mysql";

export const dataBase = mysql.createConnection({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASS,
  database: process.env.REACT_APP_DB_NAME,
});

dataBase.connect((err) => {
  if (err) {
    console.error("ERROR ao conectar ao banco de dados", err);
    return;
  }
  console.log("Conexão bem-sucedida ao banco de dados");
});
