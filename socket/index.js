// import io from "socket.io-client";
// const socketClient = io("http://localhost:3000");

// socketClient.on("connect", () => {
//   console.log("connection server");
// });

let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
  console.log(users);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

// 사용자랑이야기 하는 다른 사람을 찾는 법
const getUser = (userId) => {
  console.log("가져온유저아이디:", userId);
  console.log(users);
  return users.find((user) => user.userId === userId);
};

const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log("소캣 열렸다!");
  //유저아이디와 소캣 아이디를 가져와야 함 // 소캣아이디와 유저아이디를 같이 클라에 보냄
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });
  // 메세지 보내기
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    console.log("보낸사람:", senderId);
    console.log("받는사람", receiverId);
    const user = getUser(receiverId);

    console.log("sendMessage:", user);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  socket.on("disconnection", (socket) => {
    console.log("이유저는 삭제하기");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
