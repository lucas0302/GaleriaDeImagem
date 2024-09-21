import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";

export default function ImagePage() {
  const [image, setimage] = useState(undefined)
  const [error, setError] = useState(undefined)
  const { idImagem } = useParams() // serve para pegar o parametro que esta na url dependendo do que vc configuro la na rota arquivo -> app.js

  useEffect(() => {

    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images/${idImagem}`)// coloco o ${idImagem} para poder chamar o id que eu quero (id relativo de cada card...)
      .then(
        (res) => {
          setimage(res.data)
        }).catch(
          (err) => {
            setError(err.response.data)
          })
  }, []);

  if (image === undefined) {
    return <div>Carregando..</div>
  }
  return (
    <div>
      <Wrapper>
        <TopSection>
          <Image>
            <img src={image.url} />
          </Image>

          <Info>
            <Title>{image.name}</Title>
            <div>{image.description}</div>
          </Info>
        </TopSection>
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
const TopSection = styled.div`
  display: flex;
  flex: 0;
`
const Image = styled.div`
  width: 800px;
  max-height: 600px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, .2);
  a{
    width: 100%;
    max-width: 380px;
  }
`
const Info = styled.div`
  padding: 0 20px;
  width: 400px;
`
const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`
