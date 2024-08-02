import logo from "../assets/logo.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <Container>
      <Header>
        <Logo>
          <Link to="/">
            <img src={logo} />
          </Link>

          ShutterCamp
        </Logo>

        <Link to="/adicionar-imagens">
          <AddPictureButton className="add-picture">+</AddPictureButton>
        </Link>

      </Header>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid #ddd;
`
const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  font-size: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
  width: 80px;
  border-radius: 50%;
  margin-right: 10px;
}
`
const AddPictureButton = styled.button`
  background-color: #3da7e4;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, .2);
  &:hover {
    filter: brightness(0.9);
  }
`
