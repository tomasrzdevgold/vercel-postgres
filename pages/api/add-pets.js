import { sql } from '@vercel/postgres';
//import { requestToBodyStream } from 'next/dist/server/body-streams';
 /*
export default async function handler(request, response) {
  try {
    const petName = request.query.petName
    const ownerName = request.query.ownerName;
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const pets = await sql`SELECT * FROM Pets;`;
  return response.status(200).json({ pets });
}
*/
/*
export default async function handler(request, response) {
    try {
      const petName = request.body.petName
      const ownerName = request.body.ownerName
      if (!petName || !ownerName) throw new Error('Pet and owner names required');
      await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
    } catch (error) {
      return response.status(500).json({ error });
    }
    
    const pet = 'Cadastro com succeso'
    return response.status(200).json(pet)
   
    /*
    const pets = await sql`SELECT * FROM Pets;`;
    return response.status(200).json({ pets });
    */
  
/*
  export default async function handler(request, response) {
    try {
      const Nome = request.body.nome
      const Email = request.body.email
      const Genero = request.body.genero 
      const Estado = request.body.estados
      if (!Nome || !Email || !Genero || !Estado) throw new Error('Pet and owner names required');
      await sql`INSERT INTO Usuarios (Nome, Email, Idemail, Genero) VALUES (${Nome}, ${Email}, 1, ${Genero});`;
    } catch (error) {
      return response.status(500).json({ error });
    }
    
    const pet = 'Cadastro com succeso'
    return response.status(200).json(pet)
  }
*/


/* ///////////////
export default async function handler(request, response) {
  try {
    const Nome = request.body.petName
    const Dono = request.body.ownerName
    const Nombre = request.body.nombre
    if (!Nome || !Dono || !Nombre) throw new Error('Pet and owner names required');
    await sql`INSERT INTO teste (nome, dono, nombre) VALUES (${Nome}, ${Dono}, ${Nombre});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
  
  const pet = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title> Cadastro Succeso </title>
  </head>
  <body>
      <h1> Parabéns ${request.body.petName} </h1>
  </body>
  </html>`
  return response.status(200).send(pet)
}

*/


const erro1 = []

  

    const campos = {
      nome: false,
      email: false,
      genero: false,
      estados: false,
      cidade: false
      }
      
      
      
      const expressoes = {
      nome : /^[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑA-Z]{2,}\s[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑA-Z]{2,}$/ ,
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      cidade :/^[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑA-Z]{2,}\s[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑA-Z]{2,}/
      }


    export default async function handler(request, response) {
      const Nome = request.body.nome
      const Email = request.body.email
      const Genero = request.body.genero 
      const Estado = request.body.estados
      const Cidade = request.body.cidade

      if(expressoes.nome.test(Nome)){
        campos["nome"] = true
      }else{
        campos["nome"] = false
        erro1.push( `<p> O campo [Nome] deve ser preenchido corretamente </p>`)
      }

      if(expressoes.email.test(Email)){
        campos["email"] = true
      } else{
        campos["email"] = false
        erro1.push(`<p> O campo [Email] deve ter um email valido </p>`)
      }
      if(Genero === "F"){
        campos["genero"] = true
      }else if (Genero === "M") {
        campos["genero"] = true
      } else {
        campos["genero"] =false
        erro1.push( `<p> O campo [Genero] deve ser preenchido </p>`)
      }

      if(Estado === "0"){
        campos["estados"] = false
        erro1.push( `<p> O campo [Estado] deve ser preenchido </p>`)
      }else {
        campos["estados"] = true
      }
     
      if(expressoes.cidade.test(Cidade)){
        campos["cidade"] = true
      }else{
        campos["cidade"] = false
        erro1.push( `<p> O campo [Cidade] deve ser preenchido corretamente </p>`)
      }

      if(campos.nome && campos.email && campos.genero && campos.estados && campos.cidade){
        try {
          //if (!Nome || !Email || !Genero || !Estado) throw new Error('Pet and owner names required');
          await sql`INSERT INTO usuarios (Nome, Email, Genero, Estado, Cidade, Receber_contato) VALUES (${Nome}, ${Email}, ${Genero} , ${Estado}, ${Cidade}, ${request.body.contato});`;
        } catch (error) {
          return response.status(500).json({ error });
        }
        
        const succeso = `<!DOCTYPE html>
        <body>
            <h1>Parabens, ${Nome}, seu cadastro foi realizado com sucesso! </h1>
            <p>Nome: ${Nome}</p>
            <p>Email: ${Email} </p>
            <p>Genero: ${Genero} </p>
            <p>Localidade: ${Cidade}, ${Estado} </p>
            <a href="https://listar.vercel.app/">Pagina que lista os cadastro</a>
        </body>
        </html>`
        
        return response.status(200).send(succeso)
      }else{
        let erro = `
        <h1> Ops, encontramos algum problema! </h1>
        <a href="https://teste-sigma-eight-67.vercel.app/">Voltar para o formulario</a>

        `
        for (let i = 0; i < erro1.length; i++) {
          erro += erro1[i];
          
        }
        response.status(200).send(erro)

       
        }
        for (let i=0; i <erro1.length;){
          erro1.pop()
        }

    }






