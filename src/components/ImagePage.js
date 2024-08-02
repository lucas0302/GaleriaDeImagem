import styled from "styled-components"

export default function ImagePage() {
  return (
    <div>
      <Wrapper>
        <TopSection>
          <Image>
            <img src="https://catracalivre.com.br/wp-content/uploads/2018/07/mirante-do-mangabeiras-suzana-montandon-pbh.jpg" />
          </Image>

          <Info>
            <Title>Belo Horizonte, a melhor cidade do Brasil</Title>
            <div>Foto tirada do Mirante do Mangabeiras, localizado na melhor cidade do Brasil no melhor estado no Brasil.</div>
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
