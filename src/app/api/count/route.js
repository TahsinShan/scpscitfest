import { supabase } from "@/lib/supabase";

export async function GET() {
  const { count } = await supabase
    .from("participants")
    .select("*", { count: "exact", head: true })
    .eq("checked_in", true);

  return Response.json({ count });
}