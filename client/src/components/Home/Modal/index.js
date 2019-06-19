import React, { Fragment } from "react";
import { Button, Modal } from 'reactstrap';
function index({ show, title, handleModalClose, className }) {
  return (
    <Fragment>
      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className={className}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={handleModalClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
export default index;