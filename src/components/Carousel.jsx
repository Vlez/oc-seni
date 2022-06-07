import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { run } from "holderjs/holder";

export default function CustomCarousel(props) {
  const { items, interval } = props;
  useEffect(() => {
    run("image-class-name");
  }, []);

  return (
    <Carousel>
      {items.map((item) => {
        const url = `holder.js/${item.size}?text=${item.text}&bg=${item.bg}`;
        return (
          <Carousel.Item
            interval={interval}
            key={item.text.toLowerCase().split(" ").join("-")}
          >
            <img
              className="image-class-name"
              data-src={url}
              alt={`imagen ${item.number}`}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
