import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    padding: 5px 10px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;

    :not(:last-of-type) {
        margin-bottom: 12px;
    }
`;

export const Status = styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${props => {
        if (props.isOnline) {
            return 'green';
        }

        return 'red';
    }};
`;

export const Avatar = styled.img`
    display: block;
    width: 48px;
    border: 1px solid grey;
    border-radius: 4px;
`;

export const Name = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin: 0;
    padding: 0;
`;