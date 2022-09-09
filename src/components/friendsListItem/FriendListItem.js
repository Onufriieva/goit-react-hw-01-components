import PropTypes from 'prop-types';
import {DivBox, ActivityBox, FriendsImg, FriendsName} from './FriendListItem.styled';


export default function FriendListItem({ avatar, name, isOnline }) {
return (
<DivBox>
<ActivityBox isOnline={isOnline}/>
  <FriendsImg src={avatar} alt={name} width="48" />
  <FriendsName>{name}</FriendsName>
</DivBox>
 )
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}