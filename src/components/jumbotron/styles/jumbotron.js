/* eslint-disable */
import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1280px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    position: absolute;
    top: 128px;
    width: 50%;
    margin-left: 120px;

    @media screen and (max-width: 768px) {
        width: 100%;
        
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        
    }
`;

export const Panes = styled.div``;

export const Title = styled.h1`
    /* Title */
    width: 509px;
    height: 34px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    /* identical to box height, or 142% */
    margin-bottom: 7px;

    letter-spacing: 0.3px;
    color: #000000;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 600px) {
        font-size: 18px;

    }
`;

export const SubTitle = styled.h2`
    /* SubTitle */
    max-width: 650px;
    height: 71px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    letter-spacing: 0.3px;
    color: #656974;

    @media (max-width: 768px) {
        font-size: 12px;
        max-width: 550px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        max-width: 400px;
    }
`;

export const Image = styled.img``;

export const Container = styled.div`
    margin-bottom: 22px;
`;