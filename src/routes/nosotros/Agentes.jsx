import { run } from "holderjs/holder";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const agentes = [
  {
    size: "100px153",
    text: "Agente 1",
    bg: "1f5496",
    number: "1",
    url: "agente-1",
  },
  {
    size: "100px153",
    text: "Agente 2",
    bg: "179e40",
    number: "2",
    url: "agente-2",
  },
  {
    size: "100px153",
    text: "Agente 3",
    bg: "ba1f3b",
    number: "3",
    url: "agente-3",
  },
  {
    size: "100px153",
    text: "Agente 4",
    bg: "1f5496",
    number: "4",
    url: "agente-4",
  },
  {
    size: "100px153",
    text: "Agente 5",
    bg: "179e40",
    number: "5",
    url: "agente-5",
  },
  {
    size: "100px153",
    text: "Agente 6",
    bg: "ba1f3b",
    number: "6",
    url: "agente-6",
  },
  {
    size: "100px153",
    text: "Agente 7",
    bg: "1f5496",
    number: "7",
    url: "agente-7",
  },
  {
    size: "100px153",
    text: "Agente 8",
    bg: "179e40",
    number: "8",
    url: "agente-8",
  },
  {
    size: "100px153",
    text: "Agente 9",
    bg: "ba1f3b",
    number: "9",
    url: "agente-9",
  },
  {
    size: "100px153",
    text: "Agente 10",
    bg: "1f5496",
    number: "10",
    url: "agente-10",
  },
  {
    size: "100px153",
    text: "Agente 11",
    bg: "179e40",
    number: "11",
    url: "agente-11",
  },
  {
    size: "100px153",
    text: "Agente 12",
    bg: "ba1f3b",
    number: "12",
    url: "agente-12",
  },
  {
    size: "100px153",
    text: "Agente 13",
    bg: "1f5496",
    number: "13",
    url: "agente-13",
  },
  {
    size: "100px153",
    text: "Agente 14",
    bg: "179e40",
    number: "14",
    url: "agente-14",
  },
  {
    size: "100px153",
    text: "Agente 15",
    bg: "ba1f3b",
    number: "15",
    url: "agente-15",
  },
  {
    size: "100px153",
    text: "Agente 16",
    bg: "1f5496",
    number: "16",
    url: "agente-16",
  },
  {
    size: "100px153",
    text: "Agente 17",
    bg: "179e40",
    number: "17",
    url: "agente-17",
  },
  {
    size: "100px153",
    text: "Agente 18",
    bg: "ba1f3b",
    number: "18",
    url: "agente-18",
  },
  {
    size: "100px153",
    text: "Agente 19",
    bg: "1f5496",
    number: "19",
    url: "agente-19",
  },
  {
    size: "100px153",
    text: "Agente 20",
    bg: "179e40",
    number: "20",
    url: "agente-20",
  },
  {
    size: "100px153",
    text: "Agente 21",
    bg: "ba1f3b",
    number: "21",
    url: "agente-21",
  },
  {
    size: "100px153",
    text: "Agente 22",
    bg: "1f5496",
    number: "22",
    url: "agente-22",
  },
  {
    size: "100px153",
    text: "Agente 23",
    bg: "179e40",
    number: "23",
    url: "agente-23",
  },
  {
    size: "100px153",
    text: "Agente 24",
    bg: "ba1f3b",
    number: "24",
    url: "agente-24",
  },
  {
    size: "100px153",
    text: "Agente 25",
    bg: "1f5496",
    number: "25",
    url: "agente-25",
  },
  {
    size: "100px153",
    text: "Agente 26",
    bg: "179e40",
    number: "26",
    url: "agente-26",
  },
  {
    size: "100px153",
    text: "Agente 27",
    bg: "ba1f3b",
    number: "27",
    url: "agente-27",
  },
  {
    size: "100px153",
    text: "Agente 28",
    bg: "1f5496",
    number: "28",
    url: "agente-28",
  },
  {
    size: "100px153",
    text: "Agente 29",
    bg: "179e40",
    number: "29",
    url: "agente-29",
  },
  {
    size: "100px153",
    text: "Agente 30",
    bg: "ba1f3b",
    number: "30",
    url: "agente-30",
  },
];

export default function Agentes() {
  useEffect(() => {
    run("image-class-name");
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {agentes.map((agente) => {
        const url = `holder.js/${agente.size}?text=${agente.text}&bg=${agente.bg}`;

        return (
          <Card
            style={{ width: "20%", margin: "2.5%", padding: 0 }}
            key={agente.text.toLowerCase().split(" ").join("-")}
          >
            <Card.Img
              variant="top"
              data-src={url}
              className="image-class-name"
            />
            <Card.Body>
              <Card.Title>{agente.text}</Card.Title>
              <Card.Text>
                Este es el agente número {agente.number}.
                <br />
                Agregue una descripción.
              </Card.Text>
              <Button
                href={`https://www.example.com/${agente.url}`}
                target="_blank"
              >
                Ir al sitio web
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
