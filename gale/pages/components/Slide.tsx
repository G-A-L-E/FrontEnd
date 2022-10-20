import styled from 'styled-components';
import Card from './Card';
import { PostProps } from '../index';
import { useEffect } from 'react';

const SlideWrap = styled.div<{slidePx: number}>`
    position: relative;
    width: 100%;
    height: 360px;
    top: 48px;
    margin-bottom: 58px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    transform: translateX(${(props)=>(props.slidePx)}px);
    transition: 0.5s;
`
function Slide(slidePx: PostProps) {
    console.log(slidePx.slidePx)
    return (
            <SlideWrap slidePx={slidePx.slidePx}>
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

export default Slide;