import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    right: 0;
    width: 100%;
    max-width: 100%
    box-sizing: border-box;
    
`;

export const Frame = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    margin: 22.5px 24.5px;
    box-sizing: border-box;

    svg {
        font-size: 25px !important;
    }
`;

export const Left = styled.div`
    position: absolute;
    display: flex;

    svg {
        font-size: 25px;
        color: #4A00CD;
    }
`;

export const Right = styled.div`
    position: absolute;
    display: flex;
    min-width: 20vw;
    max-width: 300px;
    left: 1080px;
    right: 0;
    justify-content: space-between;

    svg {
        &:first-of-type {
            padding-right: 40px;
        }

        &:last-of-type {
            padding-left: 40px;
        }
    }

    @media screen and (max-width: 1280px) {
        display: flex;
        left: 720px;
        min-width: 25vw;
        justify-content: space-between;

        svg {
            &:first-of-type {
                padding-right: 40px;
            }

            &:last-of-type {
                padding-left: 40px;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        display: flex;
        left: 500px;
        min-width: 35vw;
        justify-content: space-between;

        svg {
            &:first-of-type {
                padding-right: 40px;
            }

            &:last-of-type {
                padding-left: 30px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        left: 270px;
        min-width: 40vw;
        justify-content: space-between;

        svg {
            &:first-of-type {
                padding-right: 30px;
            }

            &:last-of-type {
                padding-left: 30px;
            }
        }
    }

    @media screen and (max-width: 600px) {
        display: flex;
        min-width: 45vw;
        left: 140px;

        svg {
            &:first-of-type {
                padding-right: 20px;
            }

            &:last-of-type {
                padding-left: 20px;
            }
        }
    }
`;

export const FarRight = styled.div`
    position: absolute;
    justify-content: space-between;
    display: flex;
    left: 1380px;
    right: 0;

    svg {
        &:first-of-type {
            padding-right: 40px;
        }

        &:last-of-type {
            padding-left: 0px;
        }
    }

    @media screen and (max-width: 1280px) {
        display: flex;
        left: 980px;
        justify-content: space-between;

        svg {
            &:first-of-type {
                padding-right: 10px;
            }

            &:last-of-type {
                padding-left: 20px;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        display: flex;
        left: 850px;
        justify-content: space-between;

        svg {
            &:first-of-type {
                padding-right: 10px;
            }

            &:last-of-type {
                padding-left: 10px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        left: 520px;
        min-width: 10vw;
        justify-content: space-between;

        svg {
            &:first-of-type {
                padding-right: 20px;
            }

            &:last-of-type {
                padding-left: 20px;
            }
        }
    }

    @media screen and (max-width: 600px) {
        display: flex;
        min-width: 7vw;
        left: 350px;
        justify-content: space-between;

        svg {
            &:first-of-type {
                padding-right: 10px;
            }

            &:last-of-type {
                padding-left: 20px;
            }
        }
    }
`;

export const Group = styled.div`
    display: flex;
`;

export const Link = styled.a`
    cursor: pointer;
`;