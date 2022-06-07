import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { run } from "holderjs/holder";

export default function QuienesSomos() {
  useEffect(() => {
    run("imagen-alta");
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ maxHeight: "100vh" }}>
        <img
          className="imagen-alta"
          data-src="holder.js/300x100p?text=Imagen alta&bg=1f5496"
          alt="imagen alta"
        />
      </div>
      <Accordion
        defaultActiveKey="0"
        style={{ flexGrow: 1, marginLeft: "20px" }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>Creación</strong>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              El Organismo Coordinador del Sistema Eléctrico Nacional
              Interconectado (OC) fue creado el 29 de octubre de 1998, mediante
              la Resolución N° 235 de la Secretaría de Estado de Industria y
              Comercio para coordinar la operación de las instalaciones de las
              empresas de generación, transmisión y distribución de electricidad
              que pertenecen al Sistema Eléctrico Nacional Interconectado (SENI)
              de la República Dominicana.
            </p>
            <p>
              Posteriormente, la Ley General de Electricidad N°125-01,
              promulgada el 26 de julio de 2001, establece que las empresas
              eléctricas de generación, transmisión, distribución y
              comercialización, así como los autoproductores y cogeneradores que
              venden sus excedentes a través del SENI, deben coordinar la
              operación de sus instalaciones para prestar el mejor servicio al
              mínimo costo, y que para ello deben constituir e integrar un
              organismo que coordine la operación de los sistemas de generación,
              transmisión, distribución y comercialización en el SENI,
              denominado Organismo Coordinador (OC).
            </p>
            <p>
              El Reglamento para la Aplicación de la Ley General de
              Electricidad, emitido mediante Decreto N°555-02 del 19 de julio de
              2002, y modificado por los Decretos N° 749-02 y N° 494-07,
              reglamenta las funciones del OC y establece que debe estar
              constituido a los fines de obtener personalidad jurídica propia
              como una asociación sin fines de lucro.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>Constitución legal</strong>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              El 30 de abril de 2008 se realiza la Asamblea Constitutiva a
              partir de la cual se declaró constituido el Organismo Coordinador
              del Sistema Eléctrico Nacional Interconectado de la República
              Dominicana, de acuerdo a los términos establecidos en el
              Reglamento para la Aplicación de la Ley General de Electricidad.
            </p>
            <p>
              Posteriormente, la Resolución N° 34 del 11 de junio de 2008 de la
              Procuraduría General de la República aprueba su incorporación como
              institución sin fines de lucro, de conformidad a la Ley de
              Regulación y Fomento de las Asociaciones Sin Fines de Lucro N°
              122-05 del 8 de abril de 2005.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <strong>Política de calidad</strong>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Estamos comprometidos con la planificación y coordinación de la
              operación, asi como la determinación de las transacciones
              económicas del Sistema Eléctrico Nacional Interconectado de la
              República Dominicana, de manera que cumplan o excedan las
              expectativas de nuestros clientes, atendiendo sus necesidades y
              requerimientos a través de:
            </p>
            <ul>
              <li>
                El mejoramiento continuo del Sistema de Gestión de la Calidad.
              </li>
              <li>El cumplimiento de la legislación y normativa aplicable.</li>
              <li>
                La gestión de los recursos necesarios para asegurar el
                funcionamiento de sus operaciones.
              </li>
              <li>El aseguramiento de personal competente.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <strong>Misión y Visión</strong>
          </Accordion.Header>
          <Accordion.Body>
            <article>
              <h3>Visión</h3>
              <p>
                Ser reconocida en el sector eléctrico latinoamericano como una
                institución de excelencia operacional.
              </p>
            </article>
            <article>
              <h3>Misión</h3>
              <p>
                Planificar y coordinar la operación del sistema eléctrico
                nacional interconectado para un abastecimiento de energía
                seguro, a mínimo costo y determinar las transacciones
                económicas, conforme a la normativa, con una organización
                interdependiente y uso efectivo de los recursos.
              </p>
            </article>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <strong>Valores</strong>
          </Accordion.Header>
          <Accordion.Body>
            <article>
              <h3>Valores</h3>
              <p>
                El OC ejerce sus funciones en apego a los siguientes valores
                núcleo:
              </p>
              <ul>
                <li>Vocación de servicio</li>
                <li>Integridad</li>
                <li>Compromiso</li>
                <li>Transparencia</li>
              </ul>
            </article>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
