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

    this.state = {
      done : false,
      hover: false
    };
  }

  GroceryListItemHandler(status) {
    this.setState({
      done : (status === 'click') ? !this.state.done : this.state.done,
      hover: (status === 'over' || status === 'leave') ? status === 'over' : this.state.hover
    });
  }

  render() {
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style = {style}
        onClick      = {() => this.GroceryListItemHandler('click')}
        onMouseOver  = {() => this.GroceryListItemHandler('over')}
        onMouseLeave = {() => this.GroceryListItemHandler('leave')}
      >
        {this.props.item}
      </li>
    );
  }

};


ReactDOM.render(<GroceryList items={['Cucumber', 'Kale']}/>, document.getElementById("app"));