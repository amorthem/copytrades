import React, { Component, useState } from "react";
import { Card, Button, Modal } from 'react-bootstrap';
import BuyConfirm from './Modal/BuyConfirm';




const BuyAssets = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        
      <>
      
        <Card className="cardBuy">
          <Card.Title className="card-header goldenBack">
            <div class="d-flex justify-content-between">
                <select className="form-control goldenBack" id="fundId" style={{ textAlignLast: "center" }}>
                    <option value="1" selected>PolarbearX Fund01</option>
                    <option value="2">PolarbearX Fund02</option>
                    <option value="3">PolarbearX Fund03</option>
                </select>
            </div>
          </Card.Title>
          <Card.Body>
            <small className="text-light">Assets.</small>
            <input type="hidden" id="selectSymbolValue" readonly />
                <div className="dropdown">
                    <Button type="button" className="btn btn-warning w-100 goldenBack btnBuy dropdown-toggle" data-toggle="dropdown">
                      <img src="https://pancakeswap.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.svg" id="symbolSelectDefultimg" height="35" /> <strong id="symbolSelectDefult">BNB</strong>
                    </Button>
                  <div className="dropdown-menu w-100" id="selectSymbolList">
                    <span className="dropdown-item" onclick="selectSymbolList('CAKE', '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82');" >
                      <img src="https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.svg" height="35" /> <strong>CAKE</strong>
                    </span>
                    <span className="dropdown-item" onclick="selectSymbolList('LINK', '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd');" >
                      <img src="https://pancakeswap.finance/images/tokens/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd.svg" height="35" /> <strong>LINK</strong>
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                <small className="text-light">Amount.</small>
                <small className="text-light">Total.16$</small>
              </div>
              <p><input type="number" className="form-control" value="" min="0.01" step="0.01" placeholder="Amount" /></p>
          </Card.Body>
          <Card.Footer>
          <p class="d-flex justify-content-center">
              <button className="btn btn-dark btn-md">0%</button>&nbsp;
              <button className="btn btn-dark btn-md">25%</button>&nbsp;
              <button className="btn btn-dark btn-md">50%</button>&nbsp;
              <button className="btn btn-dark btn-md">75%</button>&nbsp;
              <button className="btn btn-dark btn-md">100%</button>
            </p>
            <p className="text-center">
              <button 
                className="btn btn-warning btn-lg w-50 goldenBack btnBuy" 
                style={{padding: "15px", fontSize: "24px", fontWeight: "bold", border: "none"}}
                onClick={handleShow}
                >
              BUY / Invest</button>
            </p>
          </Card.Footer>
        </Card>
        <br/>
        
        <Modal
            show={show} onHide={handleClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered>
        <Modal.Header>
          <Modal.Title>
            <h4 className="modal-title text-center">Invest Assets</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="modal-body text-center">
                <p><img src="https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.svg" height="50" /> <h5>amount(n)</h5></p>
                <p>
                ||<br/>
                V
                </p>
                <p><img src="https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.svg" height="50" /> <h5>amount(n)</h5></p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }

export default BuyAssets;