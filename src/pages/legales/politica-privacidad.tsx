import PrincipalLayout from '@/layout/PrincipalLayout';
import React from 'react'

function PrivacyPolitic() {

    return (
        <PrincipalLayout>
            <section className="politica-privacidad">
                <h1>Política de Privacidad</h1>
                <p><strong>Última actualización:</strong> Julio 2025</p>

                <p>En <strong>TuAutoSeminuevo.com</strong> nos tomamos muy en serio la protección de tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información.</p>

                <h2>1. Responsable del tratamiento</h2>
                <p>
                    <strong>Nombre de la empresa:</strong> TuAutoSeminuevo.com
                </p>
                <p>
                    <strong>Correo de contacto:</strong><a href="mailto:tuautoseminuevo@gmail.com">tuautoseminuevo@gmail.com</a>
                </p>
                <p>
                    <strong>Dirección:</strong> Av. Aquiles Serdán 565, Centro de Azcapotzalco, Azcapotzalco, 02000 Ciudad de México, CDMX
                </p>


                <h2>2. Qué datos recopilamos</h2>
                <ul>
                    <li>Datos de contacto: nombre, correo electrónico, teléfono.</li>
                    <li>Datos del vehículo: marca, modelo, matrícula, estado general.</li>
                    <li>Datos de identificación: número de documento o licencia, cuando sea necesario.</li>
                    <li>Información financiera, solo si se formaliza una compraventa.</li>
                </ul>

                <h2>3. Finalidad del tratamiento</h2>
                <p>Tratamos tus datos para:</p>
                <ul>
                    <li>Gestionar la compraventa de vehículos.</li>
                    <li>Contactarte para ofrecerte tasaciones, presupuestos o vehículos disponibles.</li>
                    <li>Cumplir con obligaciones legales (fiscales, contables, etc.).</li>
                    <li>Mejorar nuestros servicios.</li>
                </ul>

                <h2>4. Base legal</h2>
                <p>El tratamiento se basa en:</p>
                <ul>
                    <li>Tu consentimiento (cuando rellenas un formulario o nos contactas).</li>
                    <li>La ejecución de un contrato.</li>
                    <li>Obligaciones legales aplicables.</li>
                </ul>

                <h2>5. Conservación de datos</h2>
                <p>Conservaremos tus datos durante el tiempo necesario para cumplir con las finalidades descritas o durante el plazo exigido por la ley.</p>

                <h2>6. Destinatarios</h2>
                <p>No compartiremos tus datos con terceros salvo:</p>
                <ul>
                    <li>Autoridades competentes, si es requerido por ley.</li>
                    <li>Empresas colaboradoras (ej. gestorías o aseguradoras), cuando sea necesario para prestar el servicio.</li>
                </ul>

                <h2>7. Tus derechos</h2>
                <p>Puedes ejercer los siguientes derechos:</p>
                <ul>
                    <li>Acceder a tus datos.</li>
                    <li>Rectificarlos si son incorrectos.</li>
                    <li>Solicitar su supresión.</li>
                    <li>Oponerte al tratamiento.</li>
                    <li>Solicitar la limitación del tratamiento.</li>
                    <li>Portabilidad de los datos.</li>
                </ul>
                <p>Para ejercer estos derechos, contáctanos en <a href="mailto:tuautoseminuevo@gmail.com">tuautoseminuevo@gmail.com</a>.</p>

                <h2>8. Seguridad</h2>
                <p>Aplicamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados, pérdida o alteración.</p>

                <h2>9. Cambios en la política</h2>
                <p>Podremos modificar esta política en cualquier momento. La versión actualizada estará siempre disponible en nuestro sitio web.</p>
            </section>

        </PrincipalLayout>
    )
}

export default PrivacyPolitic;
