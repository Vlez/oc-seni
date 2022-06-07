import { run } from "holderjs/holder";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function Etica() {
  useEffect(() => {
    run("image-class-name");
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        className="image-class-name"
        src="holder.js/1024x386?text=Imagen línea de ética&bg=ba1f3b"
        alt="imagen línea de ética"
      />
      <br />
      <Card
        bg="primary"
        style={{
          width: "50%",
          textAlign: "center",
          border: "none",
          borderRadius: "0",
        }}
      >
        <Card.Header style={{ color: "white" }}>
          <strong>Documentos de interés</strong>
        </Card.Header>
        <Card.Body style={{ backgroundColor: "white", display: "flex" }}>
          <Col xs={5}>
            <Button
              as={"a"}
              href="https://www.dropbox.com/s/y6i0etgquhhywl3/C%C3%B3digo%20de%20%C3%89tica%20y%20Conducta%20Institucional%20Res%20OC-19-2018.100.pdf?dl=0"
              target="_blank"
            >Código de ética</Button>
          </Col>
          <Col xs={2}></Col>
          <Col xs={5}>
            <Button
              as={"a"}
              href="https://www.dropbox.com/s/2jdz8rbsjxz3n4o/Pol%C3%ADtica%20Conflictos%20de%20Intereses.pdf?dl=0"
              target="_blank"
            >Política de conflictos de intereses</Button>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
}
