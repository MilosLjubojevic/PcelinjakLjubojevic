"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = "milos.ljubojevic36@gmail.com"

type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  message: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function sendContactEmail(data: ContactFormData) {
  const { firstName, lastName, email, message } = data

  if (!firstName || !lastName || !email || !message) {
    return { success: false, error: "Sva polja su obavezna." }
  }

  try {
    await resend.emails.send({
      from: "Pčelinjak Ljubojević <kontakt@pcelinjakljubojevicbijeljina.com>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nova poruka od ${escapeHtml(firstName)} ${escapeHtml(lastName)} — Pčelinjak Ljubojević`,
      html: `
        <h2>Nova poruka sa sajta</h2>
        <p><strong>Ime:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    return { success: true }
  } catch (err) {
    console.error("[Contact] Failed to send email:", err)
    return { success: false, error: "Greška pri slanju poruke. Pokušajte ponovo." }
  }
}
