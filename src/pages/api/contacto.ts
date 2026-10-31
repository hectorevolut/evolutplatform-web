import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

const limpiar = (v: FormDataEntryValue | null, max: number) => String(v ?? '').trim().slice(0, max);

export const POST: APIRoute = async ({ request, redirect }) => {
  const datos = await request.formData();

  // Robots: rellenan el campo trampa. Se responde como si todo fuera bien.
  if (limpiar(datos.get('web'), 200)) return redirect('/contacto/?enviado=1', 303);

  const nombre = limpiar(datos.get('nombre'), 120);
  const email = limpiar(datos.get('email'), 200);
  const tipo = limpiar(datos.get('tipo'), 60);
  const mensaje = limpiar(datos.get('mensaje'), 5000);
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!nombre || !emailValido || !mensaje || !datos.get('privacidad')) {
    return redirect('/contacto/?error=1', 303);
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACTO_DESTINO } = process.env;
  const texto = `Nombre: ${nombre}\nCorreo: ${email}\n${tipo ? `Tipo: ${tipo}\n` : ''}\n${mensaje}`;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Sin correo configurado (desarrollo): se muestra en la terminal.
    console.log('[contacto] SMTP sin configurar. Mensaje recibido:\n' + texto);
    return redirect('/contacto/?enviado=1', 303);
  }

  try {
    const transporte = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 465),
      secure: Number(SMTP_PORT ?? 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporte.sendMail({
      from: `Web <${SMTP_USER}>`,
      to: CONTACTO_DESTINO || SMTP_USER,
      replyTo: `${nombre} <${email}>`,
      subject: `Contacto web: ${nombre}${tipo ? ` (${tipo})` : ''}`,
      text: texto,
    });
    return redirect('/contacto/?enviado=1', 303);
  } catch (e) {
    console.error('[contacto] Error al enviar:', e);
    return redirect('/contacto/?error=1', 303);
  }
};
