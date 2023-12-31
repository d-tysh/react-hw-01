import PropTypes from "prop-types";

import { Avatar, Description, Label, Location, ProfileItem, ProfileStats, Quantity, StatsItem, Tag, Username } from "./Profile.styled";

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <ProfileItem>
            <Description>
                <Avatar
                    src={avatar}
                    alt={username}
                />
                <Username>{username}</Username>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <ProfileStats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsItem>
            </ProfileStats>
        </ProfileItem>
    );
}

Profile.propType = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired
}