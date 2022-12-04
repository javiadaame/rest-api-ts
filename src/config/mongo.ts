import "dotenv/config"
import { connect } from "mongoose"

/* Connect to database */
async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
}

export default dbConnect;
