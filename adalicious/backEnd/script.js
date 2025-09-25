import express from "express";
import data from "./menu.json" with { type: "json" }; 
import cors from "cors";
import "dotenv/config"; // équivalent de require("dotenv").config()
import { neon } from "@neondatabase/serverless";

const app = express();
const sql = neon(process.env.DATABASE_URL);

app.use(cors({ origin: "http://127.0.0.1:5501" }));
app.use(express.json());


// Route accueil
app.get("/", (req, res) => {  
  res.send("Accueil");
});

app.get("/menu", async (req, res) => {
  try {
    const result = await sql`
      SELECT *
      FROM menu
      
    `;
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Erreur DB", details: err.message });
  }
});

app.post("/orders", (req, res) => {  
console.log("[POST /orders] body reçu:", req.body);  
const { id, plate, clientName } = req.body;    
if (!id || !plate || !clientName) {    
return res.status(400).json({ error: "Champs manquants ou invalides" });  
}  
console.log(`[COMMANDE REÇUE] id=${id} | plat="${plate}" | client="${clientName}"`);  
return res.status(201).json({ ok: true, message: `Commande reçue ${plate} pour ${clientName}`}); 
 });


app.listen(3000, () => {  
  console.log("Serveur lancé sur http://localhost:3000");
});

// app.get("/orders")