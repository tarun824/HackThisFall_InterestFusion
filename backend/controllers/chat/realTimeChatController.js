// // const { io } = require("../../index");

// const { io } = require("../../index");

// async function RealTimeChatController() {
//   try {
//     console.log("going inside the io");

//     io.on("connection", (socket) => {
//       console.log("User connected ", socket.id);
//       socket.on("message", (message) => {
//         io.emit("receive_message", message);
//       });
//     });

//     // io.on("connection", (socket) => {
//     //   console.log("new user connected", socket.id);
//     //   socket.on("join-chat", (userId1, userId2) => {
//     //     const channel = `chat_${userId1}_${userId2}`;
//     //     socket.join(channel);
//     //     console.log(`User ${userId1} joined channel: ${channel}`);
//     //   });
//     //   socket.on("sendMessage", (message, userId1, userId2) => {
//     //     const channel = `chat_${userId1}_${userId2}`;
//     //     io.to(channel).emit("receiveMessage", message);
//     //   });
//     //   socket.on("disconnect", () => {
//     //     console.log("Client disconnected");
//     //   });
//     // });
//   } catch (e) {
//     console.log("error at socket");
//     console.log(e);
//   }
// }
// module.exports = RealTimeChatController;
