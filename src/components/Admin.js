import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Admin() {
  // Sample data for the table
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
      type: "User",
      amount: "100",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
      type: "Admin",
      amount: "200",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAccept = () => {
    // Add your logic for accepting the user here
    setShowModal(false);
  };

  const handleDecline = () => {
    // Add your logic for declining the user here
    setShowModal(false);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.type}</td>
              <td>{user.amount}</td>
              <td>
                <Button onClick={() => handleEditClick(user)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Once chosen it cannot be undone!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger btn-red" onClick={handleDecline}>
            Decline
          </Button>
          <Button variant="primary btn-grn" onClick={handleAccept}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admin;
