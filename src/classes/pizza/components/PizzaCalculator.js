import React from "react";
import PizzaQuestion from "./PizzaQuestion";
import PizzaForm from "./PizzaForm";
import PizzaAnswer from "./PizzaAnswer";
import "../style.css"


export default function PizzaCalculator() {
  return (
    <section>
      <PizzaQuestion />
      <PizzaForm />
      <hr />
      <PizzaAnswer />
    </section>
  );
}
