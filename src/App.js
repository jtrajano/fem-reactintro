import { createElement, Component } from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return createElement("div", {}, [
    createElement("h1", {}, name),
    createElement("h2", {}, animal),
    createElement("h2", {}, breed)
  ]);
};
class App extends Component {
  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    return createElement("div", {}, [
      createElement("h1", { onClick: this.handleTitleClick }, "Adopt Me!"),
      createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Cockatiel"
      }),

      createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "Mixed"
      })
    ]);
  }
}

render(createElement(App), document.getElementById("root"));
