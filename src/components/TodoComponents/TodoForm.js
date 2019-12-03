import React, {Component} from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        }
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        })
    }
    handelSubmit = e => {
        e.preventDefault();
        console.log("its working");
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: '' });

    }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <form onSubmit= {this.handelSubmit} >
          <input type="text" name="item" value={this.state.newItem} onChange={this.handleChanges}/>
          <button> Add</button>
      </form>
    );
  }
}

export default TodoForm;