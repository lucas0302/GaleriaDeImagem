import axios from "axios"
import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddImagePage() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const navigate = useNavigate()

  function addImage(e) {
    e.preventDefault()// Tira o comportamento default do form de att a pagina
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images", {// No post tem 2 parametro o primeiro e a url da api e o segundo e os dados que vc vai madar para a api
      name: name,
      description: description,
      url: url
    })
      .then(res => navigate("/"))
      .catch((err) =>{
         alert(err.response.data.mensagem)
         console.log(err.response.data)

      })
  }

  return (
    <div>
      <Wrapper>
        <form onSubmit={addImage}>
          <InputGroup>
            <Title htmlFor="name">Nome</Title>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Title htmlFor="description">Descrição</Title>
            <input
              id="description"
              type="text"
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Title htmlFor="url">URL da Imagem</Title>
            <input
              id="url"
              type="text"
              required
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </InputGroup>

          <SaveButton type="submit">Adicionar Imagem</SaveButton>
        </form>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`
const SaveButton = styled.button`
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 5px;
  background-color: #3da7e4;
  color: white;
  cursor: pointer;
  font-size: 20px;;
  &:hover {
    filter: brightness(0.9);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  input {
    padding: 8px;
    border: 1px solid #bbb;
    border-radius: 5px;
  }
`
const Title = styled.label`
  margin-bottom: 5px;
  font-size: 22px;
`
