import { createClient } from "@/utils/supabase/server";

export default async function Instruments() {
  const supabase = await createClient();
}
