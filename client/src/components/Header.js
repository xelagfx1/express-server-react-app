import React from 'react';
import logo from '../logo.svg';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Header extends React.Component {
    componentDidMount() {
        const options = {};
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    }
    render() {
        return (
            <div >
                <nav>
                    <div className="nav-wrapper container">
                        <a href="#!" className=" brand-logo">EMaily</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/surveys">Surveys</a></li>
                            <li><a href="/auth/google">Login</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav right" id="mobile-demo">
                    <li><a href="/surveys">Surveys</a></li>
                    <li><a href="/auth/google">Login</a></li>

                </ul>
            </div>
        );
    }
}



export default Header;