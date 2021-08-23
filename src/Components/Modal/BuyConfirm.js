import React, { Component, useState } from "react";
import { Button, Modal } from 'react-bootstrap';

const BuyConfirm = (props) => {
    console.log(props);
    
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    //console.log(show);
    //props.show === true ? handleShow() : handleClose()

    
return (
    <>
        <Modal
            show={props} onHide={handleClose} 
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

export default BuyConfirm;