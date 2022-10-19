import type { NextPage } from 'next'
import { useState } from 'react';
import styled from 'styled-components';
import Slide from './components/Slide';
import Card from './components/Card';

const Wrapper: any = styled.div`
  margin: 0 auto;
  width: 1920px;
  height: 2500px;
  background-color: white;
  overflow: hidden;
`
const WrapperHeader: any = styled.div`
  width: 100%;
  height: 21.6%;
  background-color: #f2f2f2;
  font-size: 100px;
  text-align: center;
`
const WrapperBody: any = styled.div`
  position: relative;
  left: 8.33%;
  width: 91.6%;
  height: 74.72%;
  display: flex;
  flex-direction : column;
`
const WrapperFooter: any = styled.div`
  position: relative;
  width: 100%;
  height: 2.56%;
  background-color: #f2f2f2;
  font-size: 30px;
  text-align: center;
`
const Titles: any = styled.div`
  position: relative;
  height: 1.24%;
  top: 56px;
  margin-bottom: 32px;
  background-color: #ffffff;

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
    width: 41%;
    height: 652px;
    background-color: white;
    font-size: 5rem;
    text-align: center

    background: #FFFFFF;
    box-shadow: 1px 2px 13px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
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
    transform : translateX();
`

const Home: NextPage = () => {
  const [sildePx , setSlidePx] = useState(0);
  const toNext = () =>{
    if(sildePx > 0){
      setSlidePx(sildePx + 500);
      console.log(sildePx);
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </BodayTitleGridLeft>
          <BodayTitleGridRight>
            지도
          </BodayTitleGridRight>
        </BodyTitle>
        <Titles>캠핑러들을 위한 장소 🏕️</Titles>
        <Slide/>
        <button onClick={()=>toNext()}>{'>>'}</button>
        <Titles>반려가족과 함께 즐길 수 있는 여행지 🐕</Titles>
        <Slide/>
      </WrapperBody>
      <WrapperFooter>
        Footer
      </WrapperFooter>
    </Wrapper>
  )
}

export default Home
