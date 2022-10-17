import type { NextPage } from 'next'
import styled from 'styled-components';

const Wrapper: any = styled.div`
  margin: 0 auto;
  width: 1920px;
  height: 2500px;
  background-color: white;
  overflow: hidden;
`
const WrapperHeader: any = styled.div`
  width: 100%;
  height: 540px;
  background-color: #f2f2f2;
  font-size: 100px;
  text-align: center;
`
const WrapperBody: any = styled.div`
  position: relative;
  left: 160px;
  width: 1760px;
  height: 1868px;
  display: flex;
  flex-direction : column;
`
const WrapperFooter: any = styled.div`
  position: relative;
  width: 1920px;
  height: 64px;
  background-color: #f2f2f2;
  font-size: 30px;
  text-align: center;
`
const Titles: any = styled.div`
  position: relative;
  height: 24px;
  top: 56px;
  margin-bottom: 32px;
  background-color: #ffffff;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.0002em;

  color: #2D2D2D;
`
const BodyTitle: any = styled.div`
    width: 1760px;
    height: 734px;
    margin-top: 56px;
    display: flex;
    flex-direction: row;
`
const BodayTitleGridLeft: any = styled.div`
    width: 810px;
    height: 734px;
    display: flex;
    flex-wrap: wrap;
`
const BodayTitleGridRight: any = styled.div`
    width: 790px;
    height: 652px;
    background-color: white;
    font-size: 50px;
    text-align: center

    background: #FFFFFF;
    box-shadow: 1px 2px 13px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
`
const CardWrap = styled.div`
    width: 250px;
    height: 339px;
    margin-right: 17px;
    flex-shrink:0;
`
const CardImg = styled.div`
    position: relative;
    height: 286px;

    background: #ffffff;
    box-shadow: 1px 2px 13px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
`
const CardLocal = styled.p`
    position: relative;
    height: 12px;
    background-color: #FFFFFF;
    margin-bottom: 8px;
    font-size: 10px;
`
const CardPlace = styled.p`
    position: relative;
    height: 17px;
    background-color: #FFFFFF;
    font-size: 14px;
`
const SlideWrap = styled.div`
    position: relative;
    width: 100%;
    height: 360px;
    top: 48px;
    margin-bottom: 58px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
`


const Home: NextPage = () => {
  return (
    <Wrapper>
      <WrapperHeader>
        Header
      </WrapperHeader>
      <WrapperBody>
        <Titles>인기 있는 여행지 🔥</Titles>
        <BodyTitle>
          <BodayTitleGridLeft>
            <CardWrap>
              <CardImg />
              <CardLocal>1</CardLocal>
              <CardPlace>1</CardPlace>
            </CardWrap>
            <CardWrap>
              <CardImg />
              <CardLocal>2</CardLocal>
              <CardPlace>2</CardPlace>
            </CardWrap>
            <CardWrap>
              <CardImg />
              <CardLocal>3</CardLocal>
              <CardPlace>3</CardPlace>
            </CardWrap>
            <CardWrap>
              <CardImg />
              <CardLocal>4</CardLocal>
              <CardPlace>4</CardPlace>
            </CardWrap>
            <CardWrap>
              <CardImg />
              <CardLocal>5</CardLocal>
              <CardPlace>5</CardPlace>
            </CardWrap>
            <CardWrap>
              <CardImg />
              <CardLocal>6</CardLocal>
              <CardPlace>6</CardPlace>
            </CardWrap>
          </BodayTitleGridLeft>
          <BodayTitleGridRight>
            지도
          </BodayTitleGridRight>
        </BodyTitle>
        <Titles>캠핑러들을 위한 장소 🏕️</Titles>
        <SlideWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>1</CardLocal>
            <CardPlace>1</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>2</CardLocal>
            <CardPlace>2</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>3</CardLocal>
            <CardPlace>3</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>4</CardLocal>
            <CardPlace>4</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>5</CardLocal>
            <CardPlace>5</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>6</CardLocal>
            <CardPlace>6</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>7</CardLocal>
            <CardPlace>7</CardPlace>
          </CardWrap>
        </SlideWrap>
        <Titles>반려가족과 함께 즐길 수 있는 여행지 🐕</Titles>
        <SlideWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>1</CardLocal>
            <CardPlace>1</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>2</CardLocal>
            <CardPlace>2</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>3</CardLocal>
            <CardPlace>3</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>4</CardLocal>
            <CardPlace>4</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>5</CardLocal>
            <CardPlace>5</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>6</CardLocal>
            <CardPlace>6</CardPlace>
          </CardWrap>
          <CardWrap>
            <CardImg />
            <CardLocal>7</CardLocal>
            <CardPlace>7</CardPlace>
          </CardWrap>
        </SlideWrap>
      </WrapperBody>
      <WrapperFooter>
        Footer
      </WrapperFooter>
    </Wrapper>
  )
}

export default Home
