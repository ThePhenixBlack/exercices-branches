import express from "express";
import data from "./menu.json" with { type: "json" }; // ✅ nouvelle syntaxe officielle Node 22
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://127.0.0.1:5501" }));

app.get("/", (req, res) => {  
  res.send("Accueil");
});

app.get("/menu", (req, res) => {    
  res.json(data);
});

app.get("/menu/:id", (req, res) => {  
  const id = Number(req.params.id);  
  const plat = data.find(p => p.id === id);  
  if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });  
  res.json(plat);
});

app.listen(3000, () => {  
  console.log("Serveur lancé sur http://localhost:3000");
});