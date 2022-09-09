import PropTypes from 'prop-types'
import { ContainerProfile, ImageProfile, NameProfile, TagProfile, ListProfile, ItemListProfile,
   ContainerImg, LocationProfile, CategorySpan, QuantitySpan } from './Profile.styled'

 
export default function Profile ({ username, tag, location, avatar, stats: { followers, views, likes } }) {
return (

  <ContainerProfile>

    <ContainerImg>
      <ImageProfile     
        src={avatar}
        alt={username}
      />   

      <NameProfile>{username}</NameProfile>
      <TagProfile>@{tag}</TagProfile>
      <LocationProfile>{location}</LocationProfile>  
    </ContainerImg>  
      

    <ListProfile>
      <ItemListProfile>
        <CategorySpan>Followers</CategorySpan>
        <QuantitySpan>{followers}</QuantitySpan>
      </ItemListProfile>
      <ItemListProfile>
        <CategorySpan>Views</CategorySpan>
        <QuantitySpan>{views}</QuantitySpan>
      </ItemListProfile>
      <ItemListProfile>
        <CategorySpan>Likes</CategorySpan>
        <QuantitySpan>{likes}</QuantitySpan>
      </ItemListProfile>
    </ListProfile> 

   

  </ContainerProfile>
)
}

Profile.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.exact({
       followers: PropTypes.number.isRequired,
       views: PropTypes.number.isRequired,
       likes: PropTypes.number.isRequired,
    })
}
