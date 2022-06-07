import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { run } from "holderjs/holder";

export default function Resena() {
  useEffect(() => {
    run("imagen-alta");
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Accordion
        defaultActiveKey="0"
        style={{ flexGrow: 1, marginRight: "20px", marginBottom: "20px" }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <strong>Creación del Organismo Coordinador</strong>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              El Organismo Coordinador (OC) fue creado el 29 de octubre de 1998,
              mediante la Resolución N° 235 de la Secretaría de Estado de
              Industria y Comercio que estableció el marco regulatorio de
              operación del subsector eléctrico para coordinar la operación de
              las instalaciones de las empresas de generación, transmisión y
              distribución de electricidad que pertenecen al Sistema Eléctrico
              Nacional Interconectado (SENI) de la República Dominicana.
            </p>
            <p>
              Posteriormente, la Ley General de Electricidad No. 125-01,
              promulgada el 26 de julio del año 2001, estableció que las
              empresas eléctricas de generación, transmisión, distribución y
              comercialización, así como los auto productores y cogeneradores
              que venden sus excedentes a través del SENI, deben coordinar la
              operación de sus instalaciones para prestar el mejor servicio al
              mínimo costo y que para ello deben constituir e integrar un
              organismo que coordine la operación de los sistemas de generación,
              transmisión, distribución y comercialización en el SENI,
              denominado Organismo Coordinador (OC).
            </p>
            <p>
              El Reglamento para la Aplicación de la Ley General de
              Electricidad, emitido mediante Decreto N° 555-02 del 19 de julio
              de 2002, y modificado por los Decretos N° 749-02 y N° 494-07,
              reglamenta las funciones del OC y establece que debe estar
              constituido a los fines de obtener personalidad jurídica propia
              como una asociación sin fines de lucro.
            </p>
            <p>
              El 30 de abril de 2008 se realizó la Asamblea Constitutiva a
              partir de la cual se declaró constituido el Organismo Coordinador
              del Sistema Eléctrico Nacional Interconectado de la República
              Dominicana, de acuerdo a los términos establecidos en el
              Reglamento para la Aplicación de la Ley General de Electricidad.
            </p>
            <p>
              Posteriormente, la Resolución No. 34 del 11 de junio de 2008 de la
              Procuraduría General de la República aprobó su incorporación como
              institución sin fines de lucro, de conformidad con la Ley de
              Regulación y Fomento de Asociaciones Sin Fines de Lucro No.122-05
              del 8 de abril 2005.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <strong>Estructura del mercado eléctrico</strong>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              El sector eléctrico dominicano funcionó desde el 1955 hasta 1999
              en una estructura verticalmente integrada, bajo el control y
              administración exclusiva de la estatal Corporación Dominicana de
              Electricidad (CDE).
            </p>
            <p>
              En agosto de 1999 se llevó a cabo la reestructuración del sector
              eléctrico dominicano. La reforma consistió en la desintegración y
              separación de las actividades de la industria, en generación,
              transmisión y distribución. La incorporación de la inversión
              privada se limitó a las áreas de generación térmica y de
              distribución, a través del esquema de capitalización mediante la
              asociación Estado sector privado para constituir nuevas empresas
              con participación accionaria igualitaria (50% cada uno).
            </p>
            <p>
              El Mercado Eléctrico Mayorista (MEM) en el cual interactúan las
              Empresas Eléctricas de Generación, Transmisión y Distribución y
              Comercialización, así como los Usuarios No Regulados, comprando,
              vendiendo y transportando electricidad. El MEM es un mercado de
              <strong> competencia mayorista</strong>, donde existe competencia
              en la actividad de generación, comprende el Mercado de Contratos y
              el Mercado Spot.
            </p>
            <ul>
              <li>
                <strong>Mercado de Contratos</strong>: es el mercado de
                transacciones de compra y venta de electricidad basada en
                contratos de suministro libremente pactados.
              </li>
              <li>
                <strong>Mercado Spot</strong>: es el mercado de transacciones de
                compra y venta de electricidad de corto plazo no basado en
                contratos a término cuyas transacciones económicas se realizan
                al costo marginal de corto plazo de energía y al costo marginal
                de potencia.
              </li>
            </ul>
            <p>
              El Organismo Coordinador es el encargado de planificar y coordinar
              la operación de las centrales generadoras, de los sistemas de
              transmisión, distribución y comercialización y calcular y
              valorizar las transacciones de energía, potencia, servicios
              auxiliares y el peaje de transmisión.
            </p>
            <p>
              El Organismo Coordinador inicia en el año 2000 la supervisión y
              coordinación de los recursos y procesos para la planificación y
              elaboración de la programación de las operaciones del SENI en el
              corto, mediano y largo plazo y la ejecución de los programas de
              mantenimiento, con el fin de procurar la operación con seguridad,
              calidad y mínimo costo. También inician los procesos de medición
              comercial, el cálculo de las transacciones económicas y la emisión
              de los informes de transacciones, con el fin de cuantificar y
              presentar los montos, balances y saldos económicos entre los
              distintos Agentes del MEM.
            </p>
            <p>
              Con una visión de largo plazo: Ser reconocida en el sector
              eléctrico latinoamericano como una institución de excelencia
              operacional, apoyado en sus valores y recursos humanos, a lo largo
              de la historia el Organismo Coordinador ha cumplido con su misión,
              posicionándose como el ente que garantiza la calidad en la
              planificación y coordinación de la operación económica del SENI
              para el desarrollo sustentable del Sector Eléctrico y de la
              República Dominicana.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div style={{ height: "75vh" }}>
        <img
          className="imagen-alta"
          data-src="holder.js/300x100p?text=Imagen alta&bg=179e40"
          alt="imagen alta"
        />
      </div>
    </div>
  );
}
