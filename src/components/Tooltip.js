import React, {Component} from 'react';

import "styles/tooltip.css";

class Tooltip extends Component {
  render() {
    let classNames = "tooltip__content tooltip__content-" + this.props.type;
    return(
      <div className="tooltip">
        <div className={classNames}>
          <div className="tooltip__arrow"></div>
          {this.props.text}
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Tooltip;
