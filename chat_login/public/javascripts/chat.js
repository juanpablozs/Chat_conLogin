const socket = io();
const form = document.getElementById("form-chat");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const chatContainer = document.getElementById("chat-container");


const username = chatContainer.getAttribute("data-username");
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(input.value){
        socket.emit("chat", { message: input.value, username: username});
        input.value = "";
    }
});
socket.on("chat", (data) =>{
    const item = document.createElement("li");
    item.textContent = `${data.username}: ${data.message}`;
    messages.appendChild(item);
    chatContainer.scrollTop = chatContainer.scrollHeight;
});