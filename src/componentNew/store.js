
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import React, { Component } from "react";

class store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            datas: [],
            disbutton: false,
            newDatas:[],
            newData:[]
        }
    }
    componentDidMount = () => {
        axios.get('https://swapi.dev/api/films/')
            .then((response) => {
                console.log(response.data.results)
                this.setState({ datas: response.data.results })
            })
    }

    handlebutton = (title) => {
        console.log(title)
        let ndt = this.state.datas.filter(el => el.title === title)
            ndt.forEach(data => {
            
                this.setState(prevState => {
                    let dt = prevState.datas
                    dt = dt.map(row => ((row.title === data.title ? { ...data, validasiPembayaran: row.validasiPembayaran !== true ? true : (row.validasiPembayaran === false  ? true : false) } : row)))
                    return { datas: dt }
                })
            },)

        console.log(this.state.datas)
        this.setState({disbutton: !this.state.disbutton})


    }

    render() {



        return (
            <div class="login-page">
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
                                    <div class="col-3 m-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <img src="https://via.placeholder.com/150" />
                                                <h5 class="card-title p-2">{product.title}</h5>

                                                {(product.validasiPembayaran !== true) ? 
                                                    <button type="button" class="btn btn-primary" style={{width:'100%'}} onClick={() => this.handlebutton(product.title)}>+</button> 
                                                    : 
                                                    <button type="button" class="btn btn-primary" style={{width:'100%'}} onClick={() => this.handlebutton(product.title)}>hapus</button> 
                                                    }

                                                
                                            </div>
                                        </div>
                                    </div>
                            )}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default store;
