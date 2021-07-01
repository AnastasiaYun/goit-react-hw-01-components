// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App.jsx";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import ReactDom from 'react-dom';
import user from './components/data/user.json';

// const data = {

//   "name": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308

// }
// }

function Profile(props) {
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

const profile = user[0];

ReactDom.render(
  <Profile
    avatar={user.avatar}
    name={user.name}
    tag={user.tag} />,

  document.querySelector('#root'),
);
