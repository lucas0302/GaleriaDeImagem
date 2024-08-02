import styled from "styled-components"

export default function AddImagePage() {
  return (
    <div>
      <Wrapper>
        <InputGroup>
          <Title>Nome</Title>
          <input type="text" />
        </InputGroup>

        <InputGroup>
          <Title>Descrição</Title>
          <input type="text" />
        </InputGroup>

        <InputGroup>
          <Title>URL da Imagem</Title>
          <input type="text" />
        </InputGroup>

        <SaveButton disabled={true}>Adicionar Imagem</SaveButton>
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
const Title = styled.div`
  margin-bottom: 5px;
  font-size: 22px;
`
