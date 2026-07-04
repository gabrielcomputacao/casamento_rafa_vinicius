"use server";

import { supabase } from "@/lib/supabaseClient";

export interface GiftReservationDTO {
  giftId: string;
  giftTitle: string;
  giverName: string;
  storeName: string;
  productUrl: string;
}

export async function getGiftReservations() {
  const { data, error } = await supabase
    .from("GiftReservation")
    .select("gift_id, gift_title, giver_name, created_at");

  if (error) throw new Error(error.message);

  return data ?? [];
}

export async function saveGiftReservation(data: GiftReservationDTO) {
  const { error } = await supabase.from("GiftReservation").insert({
    gift_id: data.giftId,
    gift_title: data.giftTitle,
    giver_name: data.giverName,
    store_name: data.storeName,
    product_url: data.productUrl,
  });

  if (error) throw new Error(error.message);
}
