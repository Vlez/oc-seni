import { run } from "holderjs/holder";
import { useEffect } from "react";

export default function Estructura() {
  useEffect(() => {
    run("estructura");
  });

  return (
    <div style={{ height: "100vh" }}>
      <img
        className="estructura"
        data-src="holder.js/100px586?text=Estructura Organizacional&bg=1f5496"
        alt="estructura organizacional"
      />
    </div>
  );
}
