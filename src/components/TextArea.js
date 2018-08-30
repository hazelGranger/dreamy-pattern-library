import React, {Component} from 'react';

class TextArea extends Component{
  state = {
    rows: this.props.minRows,
    scrollHeight: 0
  }

  componentDidMount(){

  }

  handleChange = (e) =>{
    // let pdt = parseFloat(window.getComputedStyle(e.target,null).getPropertyValue("padding-top"));
    // let pdb = parseFloat(window.getComputedStyle(e.target,null).getPropertyValue("padding-bottom"));
    let scrollHeight = e.target.scrollHeight;
    if (this.state.scrollHeight===0) {
      // initialization
      this.setState({
        scrollHeight: scrollHeight
      });
    }else{

      if (scrollHeight > this.state.scrollHeight) {
        this.setState({
          scrollHeight: scrollHeight,
          rows: (this.state.rows + 1)<=this.props.maxRows?(this.state.rows + 1):this.state.rows
        })
      }
    }
  }

  render(){
    return(
      <textarea className="textarea" name={this.props.name} id={this.props.id} maxLength={this.props.maxLength}
        rows={this.state.rows} defaultValue={this.props.children} onChange={this.handleChange}></textarea>
    );
  }
}

export default TextArea;
