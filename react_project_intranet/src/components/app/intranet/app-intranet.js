import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Nav from "./nav";
import Left from "./left"
import Main from "./main";
import Right from "./right"
import Footer from "./footer";

let style2 = {
    padding: "0px",/*
    position: "fixed",*/
    left: "0",
    marginBottom: "60px",
    height: "200px",
    width: "100%",
};

class AppIntranet extends Component {
    state = {
        categorySelected: 0
    };

    onCategoryChange = selectedCat => {
        console.log("selected category = " + selectedCat);
        this.setState({
            categorySelected:selectedCat
        })
    };

    render() {
        return (
            <Fragment>
                <Router>
                    <div className='tc code bg-lightest-blue'>
                        <Nav selectedCat={this.state.categorySelected} onSelect={this.onCategoryChange}/>
                    </div>
                </Router>

                <div className='fl w-100'>
                    <Left/>
                    <Main/>
                    <Right/>
                </div>

                <div className='fl w-100 bg-light-pink bw2 shadow-5 cf' style={style2}>
                    DAS CHAT
                </div>

                <Footer/>
            </Fragment>
        )
    }
};

export default AppIntranet;