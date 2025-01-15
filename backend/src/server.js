import { createClient } from "@supabase/supabase-js";
import ENVIROMENT from "./config/ENVIROMENT.js";

const supabase = createClient(ENVIROMENT.SUPABASE_URL, ENVIROMENT.SUPABASE_KEY);

const { data, error } = await supabase
    .from('products')
    .select('*')


console.log(data)