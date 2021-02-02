// TODO
let App = () => (
  <div>Hello World~!</div>
);

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items.map(
      groceryItem => <GroceryListItem item = {groceryItem} />
    );
    return <ul>{items}</ul>;
  }
}

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<li>{this.props.item}</li>);
  }

};


ReactDOM.render(<GroceryList items={['Cucumber', 'Kale']}/>, document.getElementById("app"));