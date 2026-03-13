import { NextResponse } from "next/server";
import axios from "axios";
import qs from "querystring";

export async function POST(request) {
  const body = await request.json();
  const { participant_id, name, email, phone } = body;

  const store_id = "scpsc69b3ae1965004";
  const store_passwd = "scpsc69b3ae1965004@ssl";

  const data = {
    store_id,
    store_passwd,
    total_amount: 350,
    currency: "BDT",
    tran_id: participant_id,

    // ✅ IMPORTANT: include tran_id in success_url
success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?tran_id=${participant_id}`,
fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/register`,

    cus_name: name,
    cus_email: email,
    cus_phone: phone,

    product_name: "SCPSC IT Fest Registration",
    product_category: "Event",
    product_profile: "general",
  };

  try {
    const response = await axios.post(
      "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.data.status === "SUCCESS") {
      return NextResponse.json({
        success: true,
        GatewayPageURL: response.data.GatewayPageURL,
      });
    } else {
      console.error("SSLCommerz failed:", response.data);
      return NextResponse.json({ success: false });
    }
  } catch (err) {
    console.error("Payment error:", err);
    return NextResponse.json({ success: false });
  }
}