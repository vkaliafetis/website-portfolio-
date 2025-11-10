// Server action to handle contact form submissions. This action runs
// exclusively on the server. If a Resend API key and contact email are
// provided in your environment variables, it sends an email via the
// Resend SDK. Otherwise, it returns a fallback mailto link.

// Declare this file as a Server Action. This directive must appear
// at the top level of the module, not inside a function. See:
// https://nextjs.org/docs/app/api-reference/functions/server-actions
"use server";

export async function sendEmail(formData: FormData) {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
    // Import the Resend SDK. See docs: https://resend.com/docs/send-with-nodejs
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY as string);
    try {
      await resend.emails.send({
        from: `${name} <${email}>`,
        to: [process.env.CONTACT_EMAIL as string],
        subject: `Contact form message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
      });
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: 'Failed to send email' };
    }
  }
  // Fallback: return mailto link for client to open
  return {
    success: false,
    fallback: true,
    mailto: `mailto:${process.env.CONTACT_EMAIL || 'hello@vankaliafetis.com'}?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`
  };
}