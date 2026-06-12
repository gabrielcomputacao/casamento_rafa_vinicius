"use server";

import { supabase } from "@/lib/supabaseClient";
import { CompanionsDTO } from "@/src/components/confirmGuest/utils";

export async function saveGuest(data: CompanionsDTO) {
  const { error } = await supabase.from("Guest").insert({
    name: data.name,
    email: data.email,
    phone: data.phone ?? null,
    companions: data.companions ?? null,
    observation: data.observation ?? null,
  });

  if (error) throw new Error(error.message)

}
