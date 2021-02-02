// TODO
let App = () => (
  <div>Hello World~!</div>
);

let GroceryList = () => (
  <ul>
    <GroceryListItem item="Cucumber" />
    <GroceryListItem item="Kale" />
  </ul>
);

let GroceryListItem = (props) => (
  <li>{props.item}</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));