export async function POST(req) {
  const { username, password } = await req.json();

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "itfest2026";

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    return Response.json({
      success: true,
      token: "admin_logged_in",
    });
  }

  return Response.json({
    success: false,
    message: "Invalid credentials",
  });
}