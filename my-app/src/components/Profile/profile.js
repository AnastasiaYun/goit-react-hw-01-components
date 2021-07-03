
export default function Profile(props) {
  const { avatar, name, tag, location, followers, views,likes } = props;
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="Аватар пользователя" class="avatar" />
        <p name={name}>{name}</p>
        <p tag={tag}>{tag}</p>
        <p location={location}>{location}</p>
      </div>

      <ul stats={props.stats}>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
