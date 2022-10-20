import styled from 'styled-components';

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
    font-size: 1rem;
`
const CardPlace = styled.p`
    position: relative;
    height: 17px;
    background-color: #FFFFFF;
    font-size: 1.4rem;
`

export default function Card(){
    return(
        <CardWrap>
              <CardImg />
              <CardLocal>1</CardLocal>
              <CardPlace>1</CardPlace>
        </CardWrap>
    )
}