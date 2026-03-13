import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, ticket_id } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
  from: process.env.SMTP_USER,
  to: email,
  subject: "Your IT Fest Ticket 🎫",
  html: `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background: #f0f4f8; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 15px; padding: 30px; color: #fff; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">
        
        <!-- Logo -->
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://drive.google.com/uc?export=view&id=1_chdfVBrAvc5bnXn89-lhCWYvNnEK0-i" alt="IT Fest Logo" style="height: 80px; object-fit: contain;" />
        </div>
        
        <!-- Greeting -->
        <h2 style="text-align: center; font-size: 26px; margin-bottom: 10px;">Hi ${name}!</h2>
        <p style="text-align: center; font-size: 16px; margin-bottom: 20px;">Your registration for <strong>IT Fest</strong> is confirmed.</p>
        
        <!-- Ticket ID -->
        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <p style="font-size: 18px; margin: 0;">🎟️ Ticket ID:</p>
          <h3 style="font-size: 24px; margin: 5px 0; color: #ffdd57;">${ticket_id}</h3>
        </div>
        
        <!-- QR Code -->
        <div style="text-align: center; margin-bottom: 25px;">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ticket_id}" style="border-radius: 15px; border: 3px solid #fff;" />
        </div>
        
        <!-- Footer -->
        <p style="text-align: center; font-size: 16px; font-weight: bold; color: #ffd700;">11 April, 2026 - SCPSC</p>
        <p style="text-align: center; font-size: 16px; font-weight: bold; color: #ffd700;">See you at IT Fest! 🚀</p>
        
      </div>
    </div>
  `,
};

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: err.message });
  }
}