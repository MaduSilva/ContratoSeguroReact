const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const UserList = document.getElementById('users');

// ler nome do usuario e sala da URL
const {username, room} = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});



const socket = io();

//Juntar-se a sala de chat
socket.emit('joinRoom', { username, room });

// ler sala e usuarios
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

//menssagem do servidor
socket.on('message', message => {
  console.log(message);
  outputMessage(message);

  // barra de rolagem
  chatMessages.schollTop = chatMessages.scrollHeight;
});

//envio de mensagem
chatForm.addEventListener('submit', e => {
  e.preventDefault();

  //le a mensagem de texto
  const msg = e.target.elements.msg.value;

  //emite mensagem para o servidor
  socket.emit('chatMessage', msg);

  // limpa a caixa de entrada
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

//mensagem de saida do DOM
function outputMessage(message){
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${message.username}  <span>${message.time}</span></p>
  <p class="text">
    ${message.text}
  </p>`;
  document.querySelector('.chat-messages').appendChild(div);
  
}

//adiciona uma sala ao DOM
function outputRoomName(room){
  roomName.innerText = room;

}

//add usuarios ao DOM
function outputUsers(users){
  UserList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}