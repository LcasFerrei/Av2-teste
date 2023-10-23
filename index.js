const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Seja Bem vindo ao Mundo F1!</h1></h1><img src='/F1.jpg' alt='Imagem F1'>");
})

//Lista de pilotos
app.get("/pilotos", function(req,res){
    res.send("<h1>Tabela de Pilotos!</h1><ol><li> 1° Max Verstappen</li><li> 2° Sergio Perez</li><li> 3º Lewis Hamilton</li><li> 4º Fernando Alonso</li><li> 5º Carlos Sainz</li><li> 6º Charles Leclerc</li><li> 7° Lando Norris</li><li>8° Oscar Piastri</li><li> 9° George Russel</li><li>10° Lance Stroll</li></ol>");
})

//Lista de Equipes
app.get("/equipes", function(req, res){
    res.send("<h1>Tabela dos Construtores!</h1><ol><li> Red Bull Oracle Racing</li><li> Mercedes Amg Petronas</li><li>Scuderia Ferrari</li><li>Aston Martin F1 Team</li><li>Mclaren F1 Team</li><li>Alpine Renault</li><li>Willims F1 Team</li><li>Money Haas F1</li><li>Alfa Romeu Sauber F1 Team</li><li>Scuderia Alpha Tauri</li></ol>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("its lights out and away we go!!!");
    }
})

