document.getElementById("submit").addEventListener('click', submitRun);

function submitRun() {
    let name = document.getElementById('name').value;
    let time = document.getElementById('time').value;
    let link = document.getElementById('link').value;
    let chamber = document.getElementById('chamber').value;
    let version = document.getElementById('version').value;

    let params = {
        name: name,
        uid: 000,
        time: time,
        link: link,
        abyssVersion: version,
        chamber: chamber
    }

    fetch('https://cuddly-southern-bell.glitch.me/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'))

        console.log(params);
}

// Post
// fetch('https://cuddly-southern-bell.glitch.me/api/submit', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "Lilac",
//         uid: 600044174,
//         time: 15,
//         link: "https://streamable.com/9os7z2",
//         abyssVersion: 3.3,
//         chamber: "12-2-2"
//     })
// })
//     .then(res => {
//         return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))