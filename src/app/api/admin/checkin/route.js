import { supabase } from "@/lib/supabase";

export async function POST(req) {
  const { ticket_id, phone } = await req.json();

  if (!ticket_id && !phone) {
    return new Response(
      JSON.stringify({ success: false, message: "Ticket ID or Phone required" }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    let query = supabase
      .from("participants")
      .select("name, school, events, phone, ticket_id, checked_in");

    if (ticket_id) {
      query = query.eq("ticket_id", ticket_id);
    } else {
      query = query.eq("phone", phone);
    }

    const { data, error } = await query.single();

    if (error || !data) {
      return new Response(
        JSON.stringify({ success: false, message: "Participant not found" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    if (data.checked_in) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Already checked in",
          participant: data,
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    await supabase
      .from("participants")
      .update({ checked_in: true })
      .eq("ticket_id", data.ticket_id);

    return new Response(
      JSON.stringify({
        success: true,
        participant: data,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}