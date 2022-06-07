import CustomCarousel from "../components/Carousel";

const images = [
  {
    size: "100px400",
    text: "Ejemplo 1",
    bg: "1f5496",
    number: "1",
  },
  {
    size: "100px400",
    text: "Ejemplo 2",
    bg: "179e40",
    number: "2",
  },
  {
    size: "100px400",
    text: "Ejemplo 3",
    bg: "ba1f3b",
    number: "3",
  },
];

export default function Homepage() {
  return (
    <div>
      <CustomCarousel items={images} interval={2000} />
    </div>
  );
}
