import React from 'react';
import styled from 'styled-components';

function ChatOnline() {
  return (
    <ChatOnlineBox>
      <ChatOnlineFriend>
        <ChatOnlineImgContainer>
          <ChatOnlineImg
            src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <ChatOnlineBadge></ChatOnlineBadge>
        </ChatOnlineImgContainer>
        <ChatOnlineName>soso an</ChatOnlineName>
      </ChatOnlineFriend>
    </ChatOnlineBox>
  );
}
export default ChatOnline;
const ChatOnlineBox = styled.div``;

const ChatOnlineFriend = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  marigin-top: 10px;
`;
const ChatOnlineImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-filter: cover;
  border: 1px solid white;
  margin-left: 10px;
`;
const ChatOnlineBadge = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  top: 2px;
  right: 2px;
`;
const ChatOnlineImgContainer = styled.div`
  position: relative;
`;
const ChatOnlineName = styled.div``;
