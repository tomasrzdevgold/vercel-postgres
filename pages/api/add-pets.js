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