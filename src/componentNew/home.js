
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { Component } from "react";

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            show: false,
            name: '',
            email: '',
            telpon: '',
            alamat: ''
        }
    }

    handleClose = () => {
        this.setState({ show: !this.state.show })
    }

    submit = () => {
        this.setState({ show: !this.state.show })
    }
    OnNama = (e) => {
        this.setState({ name: e.target.value })
    }
    OnEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    OnTelepon = (e) => {
        this.setState({ telepon: e.target.value })
    }
    OnAlamat = (e) => {
        this.setState({ alamat: e.target.value })
    }



    render() {

        return (
            <div className='container'>
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

                <Form style={{ marginTop: '40px' }}>
                    <Container>
                        <Row className="justify-content-md-center" style={{ marginTop: '20px' }}>
                            <Col xs lg="2">
                                Name
                            </Col>
                            <Col md="3">
                                : {this.state.name}
                            </Col>

                        </Row>
                        <Row className="justify-content-md-center" style={{ marginTop: '20px' }}>
                            <Col xs lg="2">
                                Email
                            </Col>
                            <Col md="3">
                                : {this.state.email}
                            </Col>

                        </Row>
                        <Row className="justify-content-md-center" style={{ marginTop: '20px' }}>
                            <Col xs lg="2">
                                Telpon
                            </Col>
                            <Col md="3">
                                : {this.state.telepon}
                            </Col>

                        </Row>
                        <Row className="justify-content-md-center" style={{ marginTop: '20px' }}>
                            <Col xs lg="2">
                                Alamat
                            </Col>
                            <Col md="3">
                                : {this.state.alamat}
                            </Col>

                        </Row>
                        <Row className="justify-content-md-center" style={{ marginTop: '50px' }}>
                            <Col xs lg="3">
                                <Button variant="primary" onClick={this.handleClose}>Lengkapi Data Diri Anda</Button>{' '}
                            </Col>

                        </Row>
                    </Container>
                </Form>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="email" onChange={this.OnNama} placeholder="Masukan Nama Anda" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={this.OnEmail}  placeholder="Masukan Email Anda" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nomor</Form.Label>
                            <Form.Control type="text" onChange={this.OnTelepon} placeholder="Masukan Nomor Anda" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control type="text" onChange={this.OnAlamat}  placeholder="Masukan Alamat Anda" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.submit} className="justify-content-md-center">
                            Submit
                        </Button>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default home;
