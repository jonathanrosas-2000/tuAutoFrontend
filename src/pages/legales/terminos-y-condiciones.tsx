import React from 'react'
import Link from 'next/link';
import PrincipalLayout from '@/layout/PrincipalLayout';

function TermsAndConditions() {

    return (
        <PrincipalLayout>
            <section className="terminos-condiciones">
                <h1>Términos y Condiciones</h1>
                <p><strong>Última actualización:</strong> Julio 2025</p>

                <p>Bienvenido a <strong>TuAutoSeminuevo.com</strong>. Al acceder o utilizar nuestros servicios, ya sea a través de nuestro sitio web, teléfono, correo electrónico o en nuestras oficinas, aceptas cumplir con los siguientes términos y condiciones:</p>

                <h2>1. Objeto</h2>
                <p>TuAutoSeminuevo.com es una empresa dedicada a la compra y venta de vehículos seminuevos. Estos términos regulan el uso de nuestros servicios, ya sea como comprador o vendedor de vehículos.</p>

                <h2>2. Requisitos para usar el servicio</h2>
                <p>Para utilizar nuestros servicios, debes ser mayor de edad y tener capacidad legal para contratar. Si actúas en nombre de una empresa, garantizas tener autorización para representarla.</p>

                <h2>3. Proceso de compra y venta</h2>
                <ul>
                    <li>Los vehículos ofrecidos en el sitio están sujetos a disponibilidad.</li>
                    <li>La tasación de un vehículo que desees vender es orientativa hasta su revisión presencial.</li>
                    <li>El precio final será acordado por ambas partes y formalizado en un contrato de compraventa.</li>
                </ul>

                <h2>4. Responsabilidad del usuario</h2>
                <p>Garantizas que la información que proporcionas es veraz, completa y actualizada. Te comprometes a no utilizar nuestros servicios con fines fraudulentos o ilícitos.</p>

                <h2>5. Garantías</h2>
                <ul>
                    <li>Los vehículos vendidos por TuAutoSeminuevo.com pueden contar con una garantía limitada, la cual será especificada en el contrato.</li>
                    <li>No nos hacemos responsables por el mal uso del vehículo una vez entregado.</li>
                </ul>

                <h2>6. Protección de datos</h2>
                <p>El tratamiento de tus datos personales se realiza de acuerdo con nuestra <Link href="/legales/politica-privacidad">Política de Privacidad</Link>, la cual forma parte de estos Términos y Condiciones.</p>

                <h2>7. Propiedad intelectual</h2>
                <p>Todo el contenido del sitio web (textos, imágenes, logotipos, etc.) es propiedad de TuAutoSeminuevo.com o cuenta con licencia de uso. Está prohibida su reproducción sin autorización previa.</p>

                <h2>8. Modificaciones</h2>
                <p>Nos reservamos el derecho a modificar estos términos en cualquier momento. Los cambios entrarán en vigor una vez publicados en el sitio web.</p>

                <h2>9. Ley aplicable y jurisdicción</h2>
                <p>Estos términos se regirán por la legislación vigente en México y cualquier disputa se someterá a los tribunales competentes de Ciudad de México.</p>
            </section>

        </PrincipalLayout>
    );
};

export default TermsAndConditions
