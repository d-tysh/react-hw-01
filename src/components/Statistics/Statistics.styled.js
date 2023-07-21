import styled from "@emotion/styled";

export const StatisticSection = styled.section`
    display: block;
    margin: 30px auto;
    width: 400px;
    border: 1px solid grey;
`;

export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    opacity: .6;
`;

export const StatList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

export const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100% / 5);
    padding: 20px 0;
    text-align: center;
    background-color: ${() => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`};
`;

export const Label = styled.span`
    color: #fff;
    margin-bottom: 4px;
`;

export const Percentage = styled.span`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
`;