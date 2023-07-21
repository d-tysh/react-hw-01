import PropTypes from "prop-types";

import { Avatar, Item, Name, Status } from "./FriendListItem.styled";

export const FriendListItem = ({friend: {name, avatar, isOnline}}) => {
    return (
        <Item>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name + ' avatar'} />
            <Name>{name}</Name>
        </Item>
    );
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired
}