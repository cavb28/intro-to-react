const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "my-id" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Peppet",
      animal: "Cat",
      breed: "Car Breed",
    }),
    React.createElement(Pet, { name: "Sun", animal: "Bird", breed: "Colibri" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
