import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide from './components/Slide';
import Card from './components/Card';

export interface PostProps {
  slidePx: number;
  buttonState?: string;
}

const Wrapper: any = styled.div`
  margin: 0 auto;
  width: 1920px;
  height: 250rem;
  background-color: white;
  overflow: hidden;
`
const WrapperHeader: any = styled.div`
  width: 192rem;
  height: 52rem;
  background-color: #f2f2f2;
  font-size: 100px;
  text-align: center;
`
const WrapperBody: any = styled.div`
  position: relative;
  left: 16rem;
  width: 176rem;
  height: 186.8rem;
  display: flex;
  flex-direction : column;
`
const WrapperFooter: any = styled.div`
  position: relative;
  width: 100%;
  height: 5.8rem;
  background-color: #f2f2f2;
  font-size: 3rem;
  text-align: center;
`
const Titles: any = styled.div`
  position: relative;
  width: 100%;
  height: 2.4rem;
  top: 5.6rem;
  margin-bottom: 3.2rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-contents: space-between;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: -0.0002em;

  color: #2D2D2D;
`
const BodyTitle: any = styled.div`
    width: 91.6%;
    height: 41.97%;
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
    width: 79rem;
    height: 65.2rem;
    background-color: white;
    font-size: 5rem;
    text-align: center

    background: #FFFFFF;
    box-shadow: 1px 2px 13px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem;
`
const Button: any = styled.button`
    width: 3rem;
`

const Home: NextPage = () => {
  const [slidePx, setSlidePx] = useState<PostProps['slidePx']>(0);
  const [buttonState, setButtonState] = useState<PostProps['buttonState']>("");
  const toNext = () => {
    if (slidePx < 1800) {
      setSlidePx(slidePx + 265);
    } else if (slidePx >= 1800) {
      setSlidePx(0);
      setButtonState("disabled");
    }
  }
  const toPrev = () => {
    if (slidePx < 1800) {
      setSlidePx(slidePx - 265);
    } else if (slidePx >= 1800) {
      setSlidePx(0);
    }
  }
  return (
    <Wrapper>
      <WrapperHeader>
        Header
      </WrapperHeader>
      <WrapperBody>
        <Titles>인기 있는 여행지 🔥</Titles>
        <BodyTitle>
          <BodayTitleGridLeft>
            {/* mapData */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </BodayTitleGridLeft>
          <BodayTitleGridRight>
            지도
          </BodayTitleGridRight>
        </BodyTitle>
        <Titles>
          <div>캠핑러들을 위한 장소 🏕️</div>
          <div>
            <Button onClick={() => toPrev()} disabled={!buttonState}>{'<<'}</Button>
            <Button onClick={() => toNext()}>{'>>'}</Button>
          </div>
        </Titles>
        <Slide slidePx={slidePx} />
        <Titles>
          <div>반려가족과 함께 즐길 수 있는 여행지 🐕</div>
          <div>
            <Button onClick={() => toPrev()}>{'<<'}</Button>
            <Button onClick={() => toNext()}>{'>>'}</Button>
          </div>
        </Titles>
        <Slide slidePx={slidePx} />
      </WrapperBody>
      <WrapperFooter>
        Footer
      </WrapperFooter>
    </Wrapper>
  )
}

export default Home
