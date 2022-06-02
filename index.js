const express = require('express');
const cors = require('cors');
const pg = require('pg');
const PORT =80;

const pool = new pg.Pool({
  connectionString:  "postgres://oyukhpnpzelpvk:39f3f53e2cf16587e79c9f65742f8042e38db77607d3ebbb8965a15e6486a930@ec2-3-228-235-79.compute-1.amazonaws.com:5432/d7b1vma6r91eks",
  ssl:{
  rejectUnauthorized: false
  }
});

const app = express();
//app.set('port',PORT);

app.use((req, res, next) => {
  res.setHeader('content-type', 'application/json');
  next();
})
app.use(cors({origin:'*'}));
app.use(express.json());

app.route("/reset").delete((req,res)=>{
  let sql = "DROP TABLE IF EXISTS tb_teste;\n";
  sql +=    "CREATE TABLE tb_teste (\n";
  sql +=    "id SERIAL PRIMARY KEY,\n";
  sql +=    "nome VARCHAR(80) not null,\n";
  sql +=    "telefone VARCHAR(80) not null\n";
  sql +=    ");";
    pool.query(sql,(erro,info)=>{
      if(erro){
        res.send("Nada bom, algo deu BO");
      }
      else{
        console.log("executando comando ====> "+ sql);
        res.send("Tudo Ok, deu certo ADM");
      }
    })
})
app.route("/adicionar").post((req,res)=>{
  let sql = "INSERT INTO tb_teste (nome,telefone)\n";
  sql =     "values ('arthur',11969377388);\n";
    pool.query(sql,(erro,info)=>{
      if(erro){
        res.send("Nada bom, algo deu BO");
      }
      else{
        console.log("executando comando ====> "+ sql);
        res.send("Tudo Ok, deu certo ADM");
      }
    })
});
app.route("/list").get((req,res)=>{
  let sql = "SELECT * FROM tb_teste;";
    pool.query(sql,(erro,info)=>{
      const dados = {
        status : "erro",
        info : {}
      };
      if(erro){
        console.log("Erro " , erro , "Info: " , info);
        dados.info = info;
        res.status(403).send(dados);
      }
      else{
        console.log("executando comando ====> "+ sql);
        dados.status = "ok";
        dados.info = {mensagem : `listando`}
        dados.rows = info.rows;
        res.status(201).send(dados);
      }
    })  
})
app.route("/delete/:id").delete((req,res)=>{
  const id = req.params.id;
  let sql = "DELETE FROM tb_teste WHERE id = "+ id + ";";
    pool.query(sql,(erro,info)=>{
      const dados = {
        status : "erro",
        info : {}
      };
      if(erro){
        console.log("Erro " , erro , "Info: " , info);
        dados.info = info;
        res.status(403).send(dados);
      }
      else{
        console.log("executando comando ====> "+ sql);
        dados.status = "ok";
        dados.info = {mensagem : `registro ${id} apagado`}
        res.status(201).send(dados);
      }
    })  
})

app.listen(PORT, ()=>{
  console.log("Servidor Iniciado");
})