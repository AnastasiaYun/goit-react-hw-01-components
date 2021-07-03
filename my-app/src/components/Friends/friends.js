import React from 'react';
import {
  Container,
  ListFriends,
  ItemFriends,
  OnlineSpan,
  OfflineSpan,
} from './friends.style';


function Friends({ friends }) {
  return (
    <Container>
      <ListFriends>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <ItemFriends key={id}>
            {isOnline ? <OnlineSpan></OnlineSpan> : <OfflineSpan></OfflineSpan>}

            <img src={avatar} alt="{name}" width="48" />
            <p>{name}</p>
          </ItemFriends>
        ))}
      </ListFriends>
    </Container>
  );
}

export default Friends;

