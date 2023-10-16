import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Donation() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ewasteType, setEwasteType] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const userAccessToken = localStorage.getItem("accessToken");

  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Token from URL:", token);

    try {
      const response = await axios.post(
        "http://localhost:5000/donations/create",
        {
          phoneNumber,
          ewasteType,
          donationAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Donation Response:", response);

      if (response.status === 201) {
        setShowSuccessModal(true);
        // Redirect to another page on success
        window.location.href = "/success-page"; // Replace with your desired success page URL
      } else {
        console.error("Donation failed. Server returned an error status.");
      }
    } catch (error) {
      console.error("Donation error:", error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="container p-5 mt-5 mb-5">
        <h1>Donation Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phoneNumber">
              <h3>Phone Number</h3>
            </label>
            <input
              type="text"
              className="form-control txtField"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ewasteType">
              <h3>What type of Ewaste?</h3>
            </label>
            <input
              type="text"
              className="form-control txtField"
              id="ewasteType"
              value={ewasteType}
              onChange={(e) => setEwasteType(e.target.value)}
              placeholder="(e.g., phone, cd, etc)"
            />
          </div>
          <div className="form-group">
            <label>
              <h3>Donation Amount</h3>
            </label>
            <div className="d-flex flex-column">
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  value="1pc"
                  checked={donationAmount === "1pc"}
                  onChange={() => setDonationAmount("1pc")}
                />
                1pc
              </label>
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  value="2pc"
                  checked={donationAmount === "2pc"}
                  onChange={() => setDonationAmount("2pc")}
                />
                2pc
              </label>
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  value="3pc"
                  checked={donationAmount === "3pc"}
                  onChange={() => setDonationAmount("3pc")}
                />
                3pc+
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Donate
          </button>
        </form>

        {/* Success Modal */}
        <Modal
          show={showSuccessModal}
          onHide={() => setShowSuccessModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Your donation will now be checked!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Donation;
