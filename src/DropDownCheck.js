import React, { Component } from 'react';

class DropDownCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listVisible: false,
            selected: this.props.list[0]
        }
        this.select = this.select.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.renderListItems = this.renderListItems.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ listVisible: !this.state.listVisible })
    }

    select = (e, item) => {
        this.setState({listVisible: false,
                 selected: item})
    }

    closeMenu = () => {
        this.setState({ listVisible: false })
        document.addEventListener('click', this.closeMenu)
    }
    renderListItems = () => {
        return this.props.list.map((item, i) => (
            <div onClick={((e) => this.select(e, item))} key={i} className="selectedVariant">
                <span style={{ color: item.hex }}>{item.name}</span>
            </div>
        ))
    }
    render() {
        return (
            <React.Fragment>
                <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")} onClick={this.toggleMenu}>
                    <div className="dropdown-display" >
                        <span style={{ color: this.state.selected.hex }}>{this.state.selected.name}</span><span className="caret">&#8744; </span>
                    </div>
                    <div className="dropdown-list">
                        <div>
                            {this.renderListItems()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DropDownCheck;
