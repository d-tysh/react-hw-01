import styled from "@emotion/styled";

export const ProfileItem = styled.div`
    display: block;
    margin: 50px auto;
    width: 300px;
    border: 2px solid grey;
    border-radius: 16px;
    overflow: hidden;
`;

export const Description = styled.div`
    padding: 24px 0;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 50%;
    object-fit: cover;
    padding: 10px;
    cursor: pointer;
`;

export const Username = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`

export const Tag = styled.p`
    text-align: center;
    font-weight: 500;
    opacity: .5;
    cursor: pointer;
`;

export const Location = styled.p`
    text-align: center;
    font-weight: 500;
    opacity: .5;
`;

export const ProfileStats = styled.div`
    display: flex;
    list-style: none;
    border-top: 1px solid grey;
    padding: 20px 0;
    background-color: bisque; 
`;

export const StatsItem = styled.li`
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    &:not(:last-of-type) {
        border-right: 1px solid grey;
    }
`;

export const Label = styled.span`
    font-weight: 500;
    opacity: .5;
`;

export const Quantity = styled.span`
    font-weight: 700;
`;