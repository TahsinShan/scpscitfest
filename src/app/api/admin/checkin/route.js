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
    // Select all fields we need
    let query = supabase
      .from("participants")
      .select(`
        ticket_id,
        name,
        school,
        class_category,
        phone,
        events,
        tshirt_size,
        payment_status,
        checked_in
      `);

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

    // Update checked_in status
    const { error: updateError } = await supabase
      .from("participants")
      .update({ checked_in: true })
      .eq("ticket_id", data.ticket_id);

    if (updateError) {
      return new Response(
        JSON.stringify({ success: false, message: "Failed to update check-in" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // Return updated participant
    return new Response(
      JSON.stringify({
        success: true,
        participant: { ...data, checked_in: true },
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