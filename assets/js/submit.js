let sendButton = document.getElementById("send");
console.log(sendButton);
sendButton.addEventListener('click', send);

function send() {
    let name = document.getElementById('name').value;
    let time = document.getElementById('time').value;
    let link = document.getElementById('link').value;

    let params = {
        name: name,
        time: time,
        link: link,
        uid: 0,
        abyssVersion: 3.3
    }
}