import PropTypes from 'prop-types';
import FriendListItem from '../friendsListItem/FriendListItem';
import {FriendsListBox, ListItemBox} from './FriendList.styled'

export default function FriendList({ friends }) {
    return (
        <FriendsListBox>
            {friends.map(({id, name, avatar, isOnline}) => (
                <ListItemBox key={id}>
                <FriendListItem
                name={name}
                avatar={avatar}
                isOnline={isOnline}
                />
                </ListItemBox>
            )
        )}        
        </FriendsListBox>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};