import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// class App extends React.Component {
//   handleTitleClick() {
//     alert("you clicked the title");
//   }

//   // render() {
//   //   return React.createElement("div", {}, [
//   //     React.createElement(
//   //       "h1",
//   //       { onClick: this.handleTitleClick },
//   //       "Adopt Me!"
//   //     ),
//   //     React.createElement(Pet, {
//   //       name: "Luna",
//   //       animal: "dog",
//   //       breed: "Havanese"
//   //     }),
//   //     React.createElement(Pet, {
//   //       name: "Pepper",
//   //       animal: "bird",
//   //       breed: "Cockatiel"
//   //     }),

//   //     React.createElement(Pet, {
//   //       name: "Doink",
//   //       animal: "cat",
//   //       breed: "Mixed"
//   //     })
//   //   ]);
//   // }

// }
const App = () => {
  return (
    <div>
      <h1 id="somthing-important"> Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
