import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("participants")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    return Response.json({ participants: data });
  } catch (err) {
    console.error(err);
    return Response.json({ participants: [] });
  }
}