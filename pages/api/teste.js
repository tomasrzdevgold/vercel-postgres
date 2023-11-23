/*
const Client = require('pg').Client
const clinete = new Client
*/

//import { sql } from '@vercel/postgres';
/*
export default async function handler(request, response) {
    try {
      const result = await sql`SELECT Nome, Dono, Nombre FROM teste LIMIT 2;`;
      return response.status(200).json({ result })
    } catch (error) {
      return response.status(500).json({ error });
    }
    
    //const pet = 'Cadastro com succeso'
   // return response.status(200).json({result})
   
}


export default async function handler(request, response) {
    try {
      const result = await sql`SELECT Nome, Dono, Nombre FROM teste LIMIT 2;`;
      document.getElementById("listar").innerHTML = ""
      return response.status(200).send({ result })
    } catch (error) {
      return response.status(500).json({ error });
    }
    
   
}*/


import { sql } from '@vercel/postgres';



export default async function handler(request, response) {

  try {
      const result = await sql`SELECT * FROM usuarios;`;
      

     return response.status(200).json({result})



    } 
    catch (error) {
      return response.status(500).json({ error });
    }
    
  
  }
