import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const ToHome = styled.div`
  position: absolute;
  width: 7%;
  height: 7%;
  top: 5%;
  left: 12%;
  z-index: 3;
`;

function GoHome() {
  const navigate = useNavigate();
  const { user } = useParams();
  let homePath: string;

  if (user) {
    homePath = `/user/${user}/`;
  } else {
    homePath = "/";
  }

  const handleNavigate = () => {
    localStorage.removeItem("promptText");
    navigate(homePath);
  };

  return <ToHome onClick={handleNavigate}></ToHome>;
}

export default GoHome;
