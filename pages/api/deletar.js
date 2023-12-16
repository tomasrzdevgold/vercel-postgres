import { sql } from '@vercel/postgres';



export default async function handler(request, response) {
let nome = request.body.nome
let email = request.body.email
if (nome && email){
  try {
      const result = await sql`DELETE FROM usuarios WHERE Nome = ${nome} AND Email = ${email};`

     return response.send(`<h1>Apagado com succeso </h1>`)



    } 
    catch (error) {
      return response.send(`<h1>nao achei nehum cadastro com esse nome ou email</h1>`);
    }
    
} else {
    response.send(`<h1>nao achei nehum cadastro com esse nome ou email</h1>`);
}
  }
