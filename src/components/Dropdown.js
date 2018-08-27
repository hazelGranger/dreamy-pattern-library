import React, { Component } from 'react';

class Dropdown extends Component{
  state = {
    listItems: this.props.items instanceof Array? this.props.items : [],
    visibility: false,
    selected: ""
  }

  componentWillReceiveProps(nextProps){

    this.setState({
        listItems: nextProps.items instanceof Array? nextProps.items : [],
        visibility: nextProps.visibility
    })
  }

  handleClick(item) {
    this.setState({selected: item});
    this.props.handleSelect(item);
  }

  hide() {
    this.setState({visibility: false})
  }

  show(){
    this.setState({visibility: true})
  }

  render(){
    const listItems = this.state.listItems.map((item) =>
    <li key={item} onClick={this.handleClick.bind(this,item)}>
      {item}
    </li>);

    return(
      <ul className={"dropdown "+this.props.className} style={this.state.visibility?{display: 'block'}:{display: 'none'}}>
        { listItems }
      </ul>
    );
  }
}

export default Dropdown;
