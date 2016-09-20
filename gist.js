import Inferno from 'inferno';
import Component from 'inferno-component';
// import InfernoDOM from 'inferno-dom';
import {render} from 'inferno-dom';

const storage = {
    counter: 0
};

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  cUpdate() {
      console.log(this.props.store.counter);
      // cannot read property 'counter' of undefined
  }

  render() {
    // this.props.counter.counter displays properly
    return (
      <div>
        <div>Counter is at: {this.props.store.counter}</div>
        <button onClick={this.cUpdate}>Update</button>
      </div>
    )
  }
}

// InfernoDOM.render(<MyComponent counter={store}/>, document.getElementById('app'));
render(<MyComponent store={storage}/>, document.getElementById('app'));
