/* eslint-disable */
import styled from 'styled-components/macro';

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-content: center;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    bottom: 0;
    width: 100%;
    padding: 20px;
    
`;

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
`;

export const Group = styled.div`
    display: flex;
    flex: 1;
    height: 10px;
    align-items: center;
`;

export const Row = styled.div`
`;

export const Right = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100px;
    min-width: 7vw;
    right: 0;

    svg {
        font-size: 40px;
        margin-right: 5vw;

        &:last-of-type {
            color: #4A00CD !important;
        }
    }

    @media (max-width: 1000px) {
        padding: 0 40px;
    }
`;

export const Left = styled.div`
    position: absolute;
    display: flex;
    max-width: 100px;
    justify-content: space-between;
    align-items: center;
    min-width: 10vw;
    color: #656974 !important;

    svg {
        font-size: 25px;
    }

    ${Link} {
        &:first-of-type {
            color: #A2A5AE !important;
        }
        
        &:last-of-type {
            color: #4A00CD !important;
        }
    }


    @media (max-width: 1000px) {
        min-width: 10vw;
    }

    @media (max-width: 600px) {
        min-width: 20vw;
    }
`;

export const Text = styled.p`
    
`;