import styled from "styled-components";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicDatePicker from "./BasicDatePicker";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import axios from "axios";

const office = require("../imgs/office2.png");
const apiBaseUrl = "https://capstone-be-ajm.vercel.app";

const BookAppointment = () => {
  const navigate = useNavigate(null);
  const token = localStorage.getItem("id_token");
  const decodedToken = jwtDecode(token);
  const [startDate, setStartDate] = useState(null);
  const [reason, setReason] = useState(null);
  const [data, setData] = useState(null);
  const [submitCheck, setSubmitCheck] = useState(false);
  const [result, setResult] = useState(false);

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleSubmitForm = async () => {
    const data = {
      email: decodedToken.email,
      appointmentDate: startDate.toDate(),
      reason: reason,
    };

    try {
      const response = await axios.post(
        `${apiBaseUrl}/api/book-appointment`,
        data
      );
      setData(response);
      setResult(true);
      console.log("Appointment sent!", response);
    } catch (error) {
      console.error("Error found", error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <FormContainer>
          <CustomBackArrow
            onClick={() => {
              navigate("/dashboard");
            }}
          />
          <form onSubmit={handleSubmitForm}>
            <h1>Reigen Arataka's Appointmnent Page </h1>
            <Inputs>
              <Label htmlFor="email">Email Address</Label>
              <Input
                htmlFor="email"
                disabled={true}
                placeholder={decodedToken.email}
              ></Input>
              <Label htmlFor="date">Date</Label>
              <BasicDatePicker value={startDate} onChange={handleDateChange} />
              <Label htmlFor="reason">
                Please explain your experience with spirits
              </Label>
              <ReasonInput
                required
                id="reason"
                onChange={handleReasonChange}
                rows={10}
              />
            </Inputs>
          </form>
          <button
            type="button"
            onClick={() => {
              console.log(startDate.toDate());
            }}
          >
            test date
          </button>
          <button
            type="button"
            onClick={() => {
              console.log(reason);
            }}
          >
            test reason
          </button>
          <GridBoxButton
            type="submit"
            onClick={handleSubmitForm}
            disabled={submitCheck || !reason || !startDate || result}
          >
            Submit
            <CustomArrow />
          </GridBoxButton>
          {result && (
            <AppointmentResult>
              {data.data.message} Feel free to head back to the dashboard.
            </AppointmentResult>
          )}
        </FormContainer>
        <img
          className="joe"
          src={office}
          style={{
            position: "absolute",
            zIndex: "10",
            right: "0",
            bottom: "0",
            width: "20%",
          }}
        ></img>
      </Container>
    </Wrapper>
  );
};

export default BookAppointment;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 100;
`;
const Inputs = styled.div`
  display: grid;
`;

const Label = styled.label`
  font-weight: bold;
  margin: 5px;
`;

const Input = styled.input`
  margin: 10px;
  max-width: 150px;
  padding: 0.4em;
`;

const Wrapper = styled.div`
  background: #978eb3;
`;

const FormContainer = styled.div`
  position: relative;
  padding: 100px 100px;
  box-shadow: 20px 18px #52496d;
  background: #ebfafc;
  border-radius: 5px;
`;

const ReasonInput = styled.textarea`
  padding: 30px 20px;
  resize: vertical;
  max-width: 100%;
  min-width: 100%;
  border-radius: 4px;
  font-size: 1em;
`;

const GridBoxButton = styled.button`
  margin-top: 20px;
  position: relative;
  transition: all 0.2s ease-in;
  padding: 1em;
  color: #ffffff;
  background: ${(props) => (props.disabled ? "#565658" : "#6262c5")};
  font-weight: 500;
  font-size: 1.2em;
  border-radius: 3px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: ${(props) => (props.disabled ? "solid darkgrey" : "solid #313082")};
  text-decoration: none;
  z-index: 5;
  text-align: center;
  width: 100%;
`;

const CustomArrow = styled(RiSendPlaneFill)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const CustomBackArrow = styled(IoMdArrowRoundBack)`
  position: absolute;
  font-size: 2em;
  top: 40px;
  left: 40px;
  transition: all 0.2s ease-out;

  &:hover {
    background: #7ea4ac;
    border-radius: 50%;
  }
`;

const AppointmentResult = styled.div`
  font-weight: bold;
  font-size: 1.3em;
`;
