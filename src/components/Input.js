import React, {Component} from 'react';

import TextArea from 'components/TextArea';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Dropdown from 'components/Dropdown';

import 'styles/form.css';

const defaultProps = {
  emailreminder: ['gmail.com','qq.com']
}

class Input extends Component{

  state = {
    email: "",
    emaillist: [],
    emailReminderVisibility: false
  }

  componentWillMount() {
    if (this.props.emailreminder) {
      this.setState({
        emaillist: this.renderEmailList()
      })
    }
  }

  remindEmail= (e)=>{

    this.setState({
      email: e.target.value
    },()=>{
      if (this.state.email && this.state.email.indexOf("@")===-1) {
        //input email has value,but not include "@"
        this.setState({
          emailReminderVisibility: true,
          emaillist: this.renderEmailList()
        })
      } else{
        //input no value or has "@"
        this.setState({
          emailReminderVisibility: false
        });
      }
    });
  }

  renderEmailList= () =>{
    let emailList = [];
    if (this.props.emailreminder) {
      emailList = this.props.emailreminder.map((emailname) => this.state.email+"@"+emailname);
    }
    return emailList;
  }

  selectedEmail = (selected) =>{
    this.setState({
      email: selected,
      emailReminderVisibility: false
    })
  }

  render(){
    const {type="text" ,placeholder,defaultValue,size,emailreminder} = this.props;
    let classNames = "input";

    if ( size &&( size==="lg" || size=="sm")) {
      classNames += " input-" + size;
    }

    if (type==="search") {
      return(
        <span className="input-search-container">
          <input className={classNames} type="text" placeholder={placeholder} defaultValue={defaultValue} />
          <Button className="input-search-button" text={<Icon type="search1" />} />
        </span>
      );
    } else if (type==="email") {

      if (this.state.selectedEmail) {
        return(
          <span className="input-email-container">
            <input onChange={this.remindEmail} className={classNames} placeholder={placeholder} defaultValue={defaultValue} onchange={this.handleChange} value={this.state.email} type="text"/>
          </span>
        )
      }else{
        return(
          <span className="input-email-container">
            <input onChange={this.remindEmail} className={classNames} placeholder={placeholder} defaultValue={defaultValue} value={this.state.email} type="text"/>
            <Dropdown className="input-email-reminer" visibility={this.state.emailReminderVisibility} items={this.state.emaillist} handleSelect={this.selectedEmail}   />
          </span>
        );
      }

    } else{
      return(
        <input className={classNames} type={type} placeholder={placeholder} defaultValue={defaultValue} />
      );
    }
  }
}

export default Input;
