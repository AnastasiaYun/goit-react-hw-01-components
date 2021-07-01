export default function Profile(props) {
  const { avatar, name, tag, location } = props;
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
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};
