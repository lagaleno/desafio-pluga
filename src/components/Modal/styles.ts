import styled from "styled-components";

export const ModalStyle = styled.div`
    display: block;
    margin: auto;
`;

export const ModalContent = styled.div`
    .iconStyle {
        background-color: ${props => props.color};
        border-radius: 50%;
    }
`;