import { supabase } from "@/lib/supabaseClient";
import { MessageCoupleDTO } from "@/src/components/messageCouple/types";

export async function saveMessageCouple(data: MessageCoupleDTO) {
  const { error } = await supabase.from("message_couple").insert({
    name: data.name,
    message: data.message,
  });

  if (error) throw new Error(error.message);
}
