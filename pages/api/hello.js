/*
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/

import { sql } from '@vercel/postgres';
 /*
export default async function handler(request, response) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
*/
/*
export default async function handler(request, response) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Usuarios ( nome TEXT, email VARCHAR(255), IDemail INTEGER, genero TEXT, estado TEXT, PRIMARY KEY (IDemail) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
*/
export default async function handler(request, response) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS teste ( nome TEXT, dono TEXT, nombre TEXT );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
