
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React, { Component } from "react";

class shopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            datas: []
        }
    }
    componentDidMount = () => {
        axios.get('https://swapi.dev/api/starships/')
            .then((response) => {
                console.log(response.data.results)
                this.setState({ datas: response.data.results })
            })
    }

    render() {



        return (
            <div>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link ><Link to="/Home"> Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/store"><Link to="/store"> Store</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><Link to="/shopping">Shopping Chart </Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Logout
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Container>
                <Row className="justify-content-md-center" style={{ marginTop: '20px' }}>
                    
                        {
                            this.state.datas.map((product) =>
                            <div class="row">
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{product.name} <span>10</span></h5>
                                            <img src="https://via.placeholder.com/150" />
                                            <p class="card-text" align="center">$200</p>
                                            <button type="button" class="btn btn-primary">+</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )}
                    </Row>
                </Container>
            </div >
        )
    }
}

export default shopping;
