import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const dimple = require("../imgs/dimple.gif");
const apiBaseUrl = "https://capstone-be-ajm.vercel.app";

const Appointments = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [formattedDate, setFormattedDate] = useState();
  const token = localStorage.getItem("id_token");
  const decodedToken = jwtDecode(token);
  const userEmail = decodedToken.email;
  const [refreshKey, setRefreshKey] = useState(0);

  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/book");
  };

  const handleEdit = () => {
    navigate("/edit");
  };

  const handleDelete = () => {
    const fetchData = async () => {
      try {
        const response = await axios.delete(
          `${apiBaseUrl}/api/delete-appointment/${userEmail}`
        );

        setData(null);
        setRefreshKey(refreshKey + 1);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://capstone-be-ajm.vercel.app/api/get-appointment/${userEmail}`
        );

        setData(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [userEmail, refreshKey]);

  useEffect(() => {
    if (data) {
      const dateObj = new Date(data.data.result.appointmentDate);
      setFormattedDate(dateObj.toLocaleDateString("en-CA"));
    }
  }, [data]);

  return (
    <div style={{ marginBottom: "100px" }}>
      <GridWrap>
        <GridBox bgc olor="#67919b">
          <div
            style={{
              color: "#080c0d",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Upcoming appointment!
          </div>
          {data ? (
            <GridBox1>
              <div style={{ color: "black" }}>Date: {formattedDate}</div>
              <div
                style={{
                  color: "black",
                  display: "inline-block",
                  maxWidth: "30ch",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                }}
              >
                Details: "{data.data.result.reason}"
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  position: "absolute",
                  bottom: "5px",
                }}
              >
                <CustomEdit onClick={handleEdit} />

                <CustomDelete onClick={handleDelete} />
              </div>
            </GridBox1>
          ) : (
            <GridBoxButton onClick={handleBook}>Submit one here!</GridBoxButton>
          )}
        </GridBox>

        <img style={{ width: "250px" }} alt="dimple" src={dimple}></img>
      </GridWrap>
    </div>
  );
};

export default Appointments;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 2rem;
`;

const GridBox = styled.div`
  width: 800px;
  min-height: 300px;
  height: fit-content;
  padding: 1.8em;
  background: ${(props) => props.bgcolor || "#E0EAF8"};
  color: #35e718;
  font-weight: 500;
  font-size: 1.5em;
  border-radius: 3px;
  line-height: 110%;
  border: solid 3px #18393f;
  text-align: left;
`;

const GridBox1 = styled.div`
  position: relative;
  padding: 2em;
  background: ${(props) => props.bgcolor || "#E0EAF8"};
  color: #35e718;
  font-weight: 500;
  font-size: 1em;
  border-radius: 3px;
  border: solid 3px #3f6087;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CustomDelete = styled(MdDelete)`
  padding: 5px;
  color: black;
  border-radius: 40%;
  background: lightgrey;
  &:hover {
    background: #909893;
  }
`;

const CustomEdit = styled(MdModeEdit)`
  padding: 5px;
  color: black;
  border-radius: 40%;
  background: lightgrey;
  &:hover {
    background: #909893;
  }
`;

const GridBoxButton = styled.button`
  margin-top: 20px;
  position: relative;
  transition: all 0.2s ease-in;
  padding: 1em;
  color: #ffffff;
  background: #6262c5;
  font-weight: 500;
  font-size: 1.2em;
  border-radius: 3px;
  cursor: pointer;
  border: solid #313082;
  text-decoration: none;
  z-index: 5;
  text-align: center;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
