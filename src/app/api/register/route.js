import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const { name, school, class_category, phone, email, events, tshirt_size } =
    body;

  const ticket_id = uuidv4(); // generate ticket id

  const { data, error } = await supabase
    .from("participants")
    .insert([
      {
        name,
        school,
        class_category,
        phone,
        email,
        events,
        tshirt_size,
        ticket_id,
        payment_status: "pending",
        checked_in: false,
      },
    ])
    .select()
    .single();



// inside POST
if (error) {
  return NextResponse.json({ success: false, error: error.message });
}

return NextResponse.json({
  success: true,
  participant_id: data.id,
  ticket_id: data.ticket_id,
});

  return Response.json({
    success: true,
    participant_id: data.id,
    ticket_id: data.ticket_id,
  });
}