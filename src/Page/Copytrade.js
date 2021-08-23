import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';


const ROBOFund = (idNumber, tokenInvest) => {
    return( 
        <Card className="goldenBack" style={{ marginBottom: "25px"}}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png" style={{ height: "50px", width: "50px" }}/>
                    <div>ROBOFund {idNumber} - {tokenInvest}
                    <br/>
                    <div className="d-flex justify-content-end text-success bg-light"><h1>+ {(Math.random() * 100 + 10).toFixed(2)}%</h1></div>
                    </div>
                </Card.Title>
                <Card.Text>
                    <Card.Img src="https://www.newsbtc.com/wp-content/uploads/2018/06/bullishchart.jpg" style={{ height: "150px", width: "100%" }} />
                </Card.Text>
                <strong>{(Math.floor(Math.random() * 100) + 10)} Follower</strong>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <Button variant="success">Copy</Button>
                <Button variant="warning">10 PBX</Button>
                <Button variant="info">Withdraw</Button>
            </Card.Footer>
        </Card>
    )
}
const Fundmanager = () => {
    return( 
        <Card className="bg-light text-dark" style={{ marginBottom: "25px"}}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png" style={{ height: "50px", width: "50px" }}/>
                    <div>To da Moon
                    <br/>
                    <div className="d-flex justify-content-end text-success"><h2>+ {(Math.random() * 10 + 10).toFixed(2)}%</h2></div>
                    </div>
                </Card.Title>
                <Card.Text>
                    <Card.Img src="https://www.newsbtc.com/wp-content/uploads/2018/06/bullishchart.jpg" style={{ height: "150px", width: "100%" }} />
                </Card.Text>
                <strong>{(Math.floor(Math.random() * 20) + 10)} Follower</strong>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <Button variant="success">Copy</Button>
                <Button variant="warning">10 PBX</Button>
                <Button variant="info">Withdraw</Button>
            </Card.Footer>
        </Card>
    )
}

export default class Copyright extends React.Component {
    
    render(){
        return(
            <>
                <div className="text-center">
                    <hr/>
                    <h1>PolarBear ROBOT</h1>
                    <br />
                    <hr/>
                    <Container fluid>
                        <Row>
                            <Col lg="3">{ROBOFund(1, "BTC")}</Col>
                            <Col lg="3">{ROBOFund(2, "ETH")}</Col>
                            <Col lg="3">{ROBOFund(3, "BTC")}</Col>
                            <Col lg="3">{ROBOFund(4, "ETH")}</Col>
                        </Row>
                        <hr/>
                        <h1>Fundmanager</h1>
                        <br/>
                        <Row>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="3">{Fundmanager()}</Col>
                            <Col lg="12"><Button variant="info" style={{ width: "100%", height: "60px", fontSize: "24px"}}>More</Button></Col>
                        </Row>
                    </Container>
                    <hr/>
                </div>
            </>
        );
    }
}