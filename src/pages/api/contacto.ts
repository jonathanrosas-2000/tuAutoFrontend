import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, error: 'Método no permitido' });
    }

    const { name,
        lastname,
        email,
        phone,
        interest,
        message,
    } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Faltan campos obligatorios' });
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `Contacto - Solicitud de contacto de ${name}`,
        html: `
            <h2>Solictud de contacto de ${name} ${lastname}</h2>

            <p>Hola, tuAutoSeminuevo, estoy interesado en ${interest}<p>
            <p>${message}</p>
            <p>Puedes contactarme al ${phone}</p>
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
};