import "dotenv/config"

import express from "express"
import cors from "cors"

import { router } from "./routes";
import db from './config/mongo'

const PORT = process.env.PORT || 3001;

const app = express()

/* Load Database */
db().then(() => console.log('[DATABASE] Connection successful.'))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`[READY] Launching in port ${PORT}`)
})