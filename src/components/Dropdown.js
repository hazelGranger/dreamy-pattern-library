import React, { Component } from 'react';

class Dropdown extends Component{
  state = {
    listItems: this.props.items instanceof Array? this.props.items : []
  }

  componentWillReceiveProps(nextProps){

    this.setState({
        listItems: nextProps.items instanceof Array? nextProps.items : []
    })
  }


  render(){
    const listItems = this.state.listItems.map((item) =>
    <li key={item}>
      {item}
    </li>);

    return(
      <ul className={this.props.className} >
        { listItems }
      </ul>
    );
  }
}

export default Dropdown;
