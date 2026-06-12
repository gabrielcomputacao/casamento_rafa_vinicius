import { supabase } from "@/lib/supabaseClient";

export async function GET(){
    const { data, error} = await supabase.from('view_test').select('*');

    if(error){
        console.error("Supabase connection failed:", error.message)
        return new Response(JSON.stringify({ connected: false, error: error.message }), { status: 500 })
    }

    console.log("Supabase connected successfully");

    return new Response(JSON.stringify({connected: true, test: data}), {status: 200})
}