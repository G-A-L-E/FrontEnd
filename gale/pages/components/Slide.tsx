import styled from 'styled-components';
import Card from './Card';

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

export default function Slide() {
    console.log();
    return (
        <SlideWrap>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </SlideWrap>
    )
}