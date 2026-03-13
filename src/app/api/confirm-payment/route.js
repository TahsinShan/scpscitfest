import { supabase } from "@/lib/supabase";
import axios from "axios";

export async function POST(req) {
  const { tran_id } = await req.json();

  if (!tran_id) {
    return new Response(
      JSON.stringify({ success: false, message: "tran_id missing" }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // ✅ DEV MODE (sandbox testing)
    if (process.env.NODE_ENV !== "production") {
      // mark payment paid
      const { error } = await supabase
        .from("participants")
        .update({ payment_status: "paid" })
        .eq("id", tran_id);

      if (error) throw new Error(error.message);

      // get participant info
      const { data: participant } = await supabase
        .from("participants")
        .select("name,email,ticket_id")
        .eq("id", tran_id)
        .single();

      // send ticket email
await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-ticket`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: participant.name,
    email: participant.email,
    ticket_id: participant.ticket_id,
  }),
});

      return new Response(
        JSON.stringify({
          success: true,
          payment: { status: "SANDBOX_BYPASS" },
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ PRODUCTION VALIDATION
    const store_id = "scpsc69b3ae1965004";
    const store_passwd = "scpsc69b3ae1965004@ssl";

    const validation_url = `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?tran_id=${tran_id}&store_id=${store_id}&store_passwd=${store_passwd}&v=1&format=json`;

    const { data } = await axios.get(validation_url);

    if (data.status === "VALID" || data.status === "VALIDATED") {
      // mark payment paid
      const { error } = await supabase
        .from("participants")
        .update({ payment_status: "paid" })
        .eq("id", tran_id);

      if (error) throw new Error(error.message);

      // get participant info
      const { data: participant } = await supabase
        .from("participants")
        .select("name,email,ticket_id")
        .eq("id", tran_id)
        .single();

      // send ticket email
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-ticket`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: participant.name,
          email: participant.email,
          ticket_id: participant.ticket_id,
        }),
      });

      return new Response(
        JSON.stringify({ success: true, payment: data }),
        { headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, payment: data }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}