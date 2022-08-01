import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import userApi from '../../api/user/userApi';
function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null); // 원래 null인데 ''으로 바꿈
  console.log('대화창맴버들', conversation.members);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log('친구아이디:', friendId);
    userApi.findUserInfo(friendId).then((res) => {
      setUser(res.data);
    });
  }, [currentUser, conversation]);
  console.log('친구 :', user);

  return (
    <ConversationBox className="conversation">
      <ConversationImg
        className="conversationImage"
        src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <ConversationName>{user?.nickName}</ConversationName>
    </ConversationBox>
  );
}
export default Conversation;

const ConversationBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

const ConversationImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const ConversationName = styled.span`
  font-weight: 500;
`;
