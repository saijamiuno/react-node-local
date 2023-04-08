import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./App.css";

export default function EditUser(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  const updateUserById = (id, userData) => {
    return axios
      .put(`/updateUserDetails/${id}`, userData)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  useEffect(() => {
    axios
      .get(`/getUserDetails/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Col span={24}>
      <Row>
        <Col span={22}>
          <div className="user-details-container">
            <div className="user-details-card">
              <div className="card-body">
                <h1 className="card-title"> Edit User Details</h1>
                <p>
                  <strong>Name:</strong> {user.firstName} {user.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {user.dob}
                </p>
                <p>
                  <strong>Designation:</strong> {user.designation}
                </p>
                <p>
                  <strong>Comments:</strong> {user.comments}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col span={2}>
          <Button
            style={{
              backgroundColor: "#0958d9",
              color: "#fff",
              marginTop: "12px",
            }}
            onClick={() => window.history.back(-1)}
          >
            BACK
          </Button>
        </Col>
      </Row>
    </Col>
  );
}