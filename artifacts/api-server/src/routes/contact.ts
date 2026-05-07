import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body ?? {};

  if (!firstName || !lastName || !phone || !email || !message) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(String(email))) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    req.log.error("RESEND_API_KEY is not set");
    res.status(503).json({ error: "Email service is not configured yet." });
    return;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "The Sahel Initiative Contact Form <onboarding@resend.dev>",
    to: ["support@thesahelinitiative.org"],
    replyTo: String(email),
    subject: `New message from ${firstName} ${lastName}`,
    html: `
      <table style="font-family:sans-serif;font-size:15px;color:#222;max-width:600px;width:100%;border-collapse:collapse;">
        <tr><td style="padding:32px 0 8px;font-size:22px;font-weight:700;color:#0099b0;">
          New contact form submission
        </td></tr>
        <tr><td style="padding:8px 0;border-top:1px solid #e5e7eb;">
          <strong>Name:</strong> ${firstName} ${lastName}
        </td></tr>
        <tr><td style="padding:8px 0;border-top:1px solid #e5e7eb;">
          <strong>Email:</strong> <a href="mailto:${email}" style="color:#0099b0;">${email}</a>
        </td></tr>
        <tr><td style="padding:8px 0;border-top:1px solid #e5e7eb;">
          <strong>Phone:</strong> ${phone}
        </td></tr>
        <tr><td style="padding:8px 0 24px;border-top:1px solid #e5e7eb;">
          <strong>Message:</strong><br/><br/>
          ${String(message).replace(/\n/g, "<br/>")}
        </td></tr>
      </table>
    `,
  });

  if (error) {
    req.log.error({ err: error }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
    return;
  }

  res.json({ ok: true });
});

export default router;
