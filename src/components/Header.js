import React, { Component, Fragment } from 'react';

class Header extends Component {
    render() {

        const { links } = this.props;

        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            links.map((l, i) => (
                                <li key={i} className="nav-item">
                                    <a className="nav-link" href="#" data-m="axios" onClick={ l.action } >{ l.name }</a>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                </nav>
            </Fragment>
        );
    }
}

export default Header;