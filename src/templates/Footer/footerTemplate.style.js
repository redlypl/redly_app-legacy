import styled from "styled-components";
import { theme } from "../../utils/theme/theme";
import { Container, Col } from "react-bootstrap";

import FooterCircle1 from '../../assets/svg/FooterCircle1';
import FooterCircle2 from '../../assets/svg/FooterCircle2';

export const FooterWrapper = styled.div`
    color: ${ theme.colors.white };
`;
export const FooterTitleWrapper = styled.div`
    width: 60%;
    padding-top: 100px;
    margin-right: auto;
    margin-left: auto;
    position: relative;

    @media ${ theme.device.laptop } {
        width: 70%;
    }
    @media ${ theme.device.tablet } {
        width: 90%;
    }
    @media ${ theme.device.mobileL } {
        width: 100%;
        padding-top: 30px;
    }
`;
export const FooterBigTitle = styled.h1`
    font-size: ${ theme.fontSize.DG_58 };
    font-family: 'Poppins-SemiBold';
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    position: relative;
    z-index: 40;

    @media ${ theme.device.laptop } {
        font-size: ${ theme.fontSize.DGG_58 };
    }
    @media ${ theme.device.mobileL } {
        font-size: ${ theme.fontSize.MG_58 };
    }
`;
export const FooterUnderTitle = styled.h2`
    font-size: ${ theme.fontSize.DC_18 };
    font-family: 'Poppins-Light';
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    padding-top: 5px;

    @media ${ theme.device.mobileL } {
        font-size: ${ theme.fontSize.MC_18 };
    }
`;
export const DecoCircle1 = styled(FooterCircle1)`
    background-size: 100%;
    position: absolute;
    right: 50px;
    top: 50px;
    width: 150px;
    height: 150px;
    z-index: 1;

    @media ${ theme.device.tablet } {
        right: 30px;
    }
    @media ${ theme.device.mobileL } {
        left: -65px;
        top: 20px;
        width: 130px;
        height: 130px;
    }
`;
export const DecoCircle2 = styled(FooterCircle2)`
    position: absolute;
    height: 400px;
    bottom: 0;

    @media ${ theme.device.mobileL } {
        display: none;
    }
`;
export const FooterFooterSection = styled(Container)`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`;
export const FooterTitle = styled.p`
    font-family: 'Poppins-Light';
    font-size: ${ theme.fontSize.DA_15 };
    margin: 0;
    width: 100%;
    text-align: right;

    @media ${ theme.device.mobileL } {
        text-align: center;
    }
`;
export const SingleFooterLine = styled.div`
    background-color: ${ theme.colors.gray };
    height: 25px;
    width: 1px;

    @media ${ theme.device.mobileL } {
        opacity: 0;
    }
`;
export const ColLeftFooterA = styled(Col)`
    padding: 0;
`;
export const ColCenterFooterB = styled(Col)`
    width: 50%;
    flex: 0;
`;
export const ColRightFooterC = styled(Col)`
    padding: 0;
`;
export const BtnWrapperFooterClass = styled.div`
    width: 35%;

    @media ${ theme.device.mobileL } {
        width: 45%;
        margin-top: 80px;
    }
    @media ${ theme.device.mobileMscale } {
        width: 50%;
    }
    @media ${ theme.device.mobileMscalePlus } {
        width: 65%;
    }
    @media ${ theme.device.mobileS } {
        width: 75%;
    }
`;
export const BtnFooterWrapperTop = styled.div`
    display: none;

    @media ${ theme.device.laptop } {
        display: unset;
    }
`;