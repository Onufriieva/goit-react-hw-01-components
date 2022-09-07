import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
return (
<div>
<span>{isOnline}</span>
  <img src={avatar} alt={name} width="48" />
  <p>{name}</p>
</div>
 

 )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}