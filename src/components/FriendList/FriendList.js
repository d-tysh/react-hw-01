import PropTypes from "prop-types";

import { List } from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend => <FriendListItem key={friend.id} friend={friend} />)}
        </List>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}