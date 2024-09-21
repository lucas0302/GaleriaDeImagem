import styled from "styled-components";
import axios from "axios";
import GifAnimacoa from "../assets/circle-9360_256.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const [imagens, setImagens] = useState([]);

  // executa a funcão  1 vez em um momento determinado  se o [] estiver vazio e se estiver com um estado vai executar quando o estado att
  useEffect(() => {
    //url da api
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images";
    const promise = axios.get(url) // fazendo a solicitação dos dados para a api

    promise.then((res) => { //resposta da api
      setImagens(res.data) // os dados que precisa vem em forma de array de obj 
      console.log(res.data) //Ex
    })

    promise.catch((err) => { // erros que pode acontecer
      console.log(err.response.data)
    })
  }, [])

  if (imagens.length === 0) {
    return <div>Carregando<Gif src={GifAnimacoa} /></div>
  }

  return (
    <div>
      <Wrapper>
        <Images>
          {imagens.map((img) => (
            <Link to={`/imagem/${img.id}`} key={img.id}>   {/* to={`/imagem/${img.id}`} serve para apontar para qual rota deve ir para cada card */}
              <Image>
                <img src={img.url} />
                <div>
                  <div>{img.name}</div>
                </div>
              </Image>
            </Link>
          ))}
        </Images>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Images = styled.div`
 width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
`

const Gif = styled.img`
 width: 20px;
  height: 20px;
  margin-left: 5px;
`
const Image = styled.div`
  width: 100%;
  max-width: 380px;
  height: 216px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, .2);
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover{
    opacity: 1;
  }
  div {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, .2) 40%);
    padding: 20px;
    color: white;
    display: flex;
    align-items: flex-end;
    div {
      margin-bottom: -10px;
      text-shadow: 1px 1px 4px 3px rgba(0, 0, 0, 1);
    }
    &:hover{
      opacity: 1;
    }
  }
`