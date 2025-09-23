import {Client} from "pg";

// Exemple de connectionString
const connectionString = 'postgresql://neondb_owner:npg_yTcS4vJF9MtP@ep-autumn-math-a2ssg22l-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Création du client
const client = new Client({
    connectionString,
});

async function run() {
    try {
        // Connexion
        await client.connect();

        // Exemple de requête SELECT
        const result = await client.query(`
        SELECT 
         t.name AS topic,
         r.title,
         r.url
        FROM topics t
        INNER JOIN resources r ON r.topic_id = t.id
        WHERE t.name = '${process.argv[2]}';`);

        console.log("Résultats :", result.rows);
    } catch (err) {
        console.error("Erreur :", err);
    } finally {
        // Déconnexion
        await client.end();
    }
}

run();

console.log("Recherche : ", process.argv[2]);