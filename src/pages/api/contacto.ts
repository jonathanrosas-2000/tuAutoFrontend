import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { FormData } from "@/types/formularios";

type Data = {
  success: boolean;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }

  const data: FormData = req.body;

  const { car, user, extras } = data;

  if (!user.nombre || !user.email || !car.marca) {
    return res.status(400).json({ success: false, error: 'Faltan campos obligatorios' });
  }

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
    subject: `Nuevo formulario de ${user.nombre} ${user.apellidos}`,
    html: `
      <h2>Información del vehículo</h2>
      <ul>
        <li><strong>Marca:</strong> ${car.marca}</li>
        <li><strong>Modelo:</strong> ${car.modelo}</li>
        <li><strong>Año:</strong> ${car.year}</li>
        <li><strong>Kilometraje:</strong> ${car.kilometraje}</li>
        <li><strong>Precio:</strong> ${car.precio}</li>
        <li><strong>Combustible:</strong> ${car.combustible}</li>
        <li><strong>Transmisión:</strong> ${car.transmision}</li>
        <li><strong>Color:</strong> ${car.color}</li>
        <li><strong>Estado:</strong> ${car.estado}</li>
      </ul>

      <h2>Información del usuario</h2>
      <ul>
        <li><strong>Nombre completo:</strong> ${user.nombre} ${user.apellidos}</li>
        <li><strong>Teléfono:</strong> ${user.telefono}</li>
        <li><strong>Email:</strong> ${user.email}</li>
        <li><strong>Dirección:</strong> ${user.address}</li>
      </ul>

      <h2>Extras</h2>
      <ul>
        <li><strong>Motivo de venta:</strong> ${extras.motivoDeVenta}</li>
        <li><strong>Comentarios:</strong> ${extras.comentarios}</li>
        <li><strong>Acepta términos:</strong> ${extras.aceptaTerminos ? 'Sí' : 'No'}</li>
        <li><strong>Papeleo:</strong> ${extras.papeleo.length > 0 ? extras.papeleo.join(', ') : 'Ninguno'}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error al enviar el correo:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
