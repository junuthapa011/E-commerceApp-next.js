"use client";
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

function PasswordErrorModal({ isOpen, onRequestClose }: any) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div>
          <h3>Password Criteria not met</h3>
          <p>Your password must meet the specified criteria</p>
          <button onClick={onRequestClose}>Close</button>
        </div>
      </Modal>
    </>
  );
}

export default PasswordErrorModal;
