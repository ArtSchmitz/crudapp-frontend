import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse
`;

export const Icons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -30px;
`;

export const Button = styled.button`
    cursor: pointer;
    width: 40px;
    border: none;
    :hover{
        opacity: .85;
    }
`;