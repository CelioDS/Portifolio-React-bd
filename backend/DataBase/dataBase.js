import mysql from "mysql";

export const dataBase = mysql.createConnection({
  host: "db4free.net",
  user: "teste01ada",
  password: "PZXvAFdxa.bh2Yg",
  database: "teste01ada",
});

dataBase.connect((err) => {
  if (err) {
    console.error("ERROR ao conectar ao banco de dados", err);
    return;
  }
  console.log("Conexão bem-sucedida ao banco de dados");
});
