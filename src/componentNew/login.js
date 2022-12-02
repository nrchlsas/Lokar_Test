

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import '../App.css';
import Login from './login';

import React, { Component } from "react";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: ''
        }
    }

    render() {

        return (
            
            <div class="login-page">
                <main>

                    <div class="login-block">

                        <form action="#">
                            <hr class="hr-xs" />

                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-envelope ti-email"></i></span>
                                    <input type="text" class="form-control" placeholder="Your email address" />
                                </div>
                            </div>

                            <hr class="hr-xs" />

                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-lock ti-unlock"></i></span>
                                    <input type="password" class="form-control" placeholder="Choose a password" />
                                </div>
                            </div>
                            <button class="btn btn-primary btn-block" type="submit"><Link to="/Home" replace>Login</Link> </button>

                        </form>
                    </div>


                </main>
            </div>
        )
    }
}

export default login;
