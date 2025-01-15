import dotenv from "dotenv";

dotenv.config();

const { SUPABASE_URL, SUPABASE_KEY, SECRET_KEY } = process.env

const ENVIROMENT = {
    SUPABASE_URL: SUPABASE_URL,
    SUPABASE_KEY: SUPABASE_KEY,
    SECRET_KEY: SECRET_KEY
}

export default ENVIROMENT