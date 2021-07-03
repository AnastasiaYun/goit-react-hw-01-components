  
import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  border: 1px solid black;
`;

export const ListFriends = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  padding-left: 0px;
`;

export const ItemFriends = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const OnlineSpan = styled.span`
  background-color: green;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const OfflineSpan = styled.span`
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
`;