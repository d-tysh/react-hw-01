import styled from "@emotion/styled";

export const Table = styled.table`
    margin: 0 auto;
    width: 450px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: 14px;

    td {
        padding: 8px 0;
        width: calc(100% / 3);
    }
`;

export const Thead = styled.thead`
    background-color: aqua;
    font-size: 16px;

    th {
        padding: 8px 0;
    }
`;

export const Tbody = styled.tbody`
    font-weight: 500;
    opacity: .7;

    tr, td {
        border: 1px solid seashell;
    }

    tr:nth-of-type(2n+2) {
        background-color: beige; 
    }
`;