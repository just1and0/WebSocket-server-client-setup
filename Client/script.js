// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:9000');

// Connection opened
socket.addEventListener('open', function (event) {
    // socket.send('connected to server successfully')
});

// Listen for messages
socket.addEventListener('message', function (event) {
    if (event.data) { 
        console.log(event.data)
            const widgetParent = document.getElementById('countContainer');
            widgetParent.innerHTML = event.data
    }
});

const onNumberClick = () => {
    socket.send('Hello From Client1!');
}