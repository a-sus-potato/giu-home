let currentChamber = document.getElementsByClassName('active')[0];

let navLinks = document.getElementsByClassName('nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', changeChamber)
}

// Get Initial Data for 12-1-1
fetch(`https://cuddly-southern-bell.glitch.me/api/get12-1-1`)
    .then(res => {
        if (res.ok) {
            //console.log('success')
        } else {
            console.log('not successful')
        }
        return res.json()
    })
    .then(InitialData => {
        //console.log(InitialData)
        let tableRef = document.getElementsByTagName('tbody')[0];

        for (let i = 0; i < InitialData.length; i++) {
            let newRow = tableRef.insertRow();
            for (let j = 0; j < 5; j++) {
                let newCell = newRow.insertCell(-1);

                if (j === 0) {
                    newCell.innerHTML = `${i+1}`
                }
                else if (j === 1) {
                    // let time = document.getElementsByTagName('td')[1];
                    // let timeInSeconds = document.createElement('a');

                    // time.append(timeInSeconds);
                    newCell.innerHTML = `${InitialData[i].time}s`
                }
                else if (j === 2) {
                    newCell.innerHTML = `${InitialData[i].name}`
                }
                else if (j === 3) {
                    newCell.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                        <a xlink:href=${InitialData[i].link} target="_blank">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </a>
                    </svg>`
                }
                else if (j === 4) {

                    for (let k = 0; k < InitialData[i].team.length; k++) {
                        
                        let icons = document.createElement('img');
                        icons.src = `assets/img/character-icon2/${InitialData[i].team[k]}.png`;
                        icons.width = '64';
                        icons.height = '64';
                        newCell.append(icons);
                    }

                }

            }
        }
    })
    .catch((error) => {
        console.log(error);
    })

function changeChamber(event) {
    currentChamber.classList.remove("active");
    currentChamber = event.target;
    event.target.classList.add("active");

    //Create new table
    fetch(`https://cuddly-southern-bell.glitch.me/api/get${currentChamber.id}`)
    .then(res => {
        if (res.ok) {
            //console.log('success')
        } else {
            console.log('not successful')
        }
        return res.json()
    })
    .then(InitialData => {
        //console.log(InitialData)

        // Wipe Table

        let new_tbody = document.createElement('tbody');
        
        let tableRef = document.getElementsByTagName('tbody')[0];
        

        for (let i = 0; i < InitialData.length; i++) {
            let newRow = new_tbody.insertRow();
            for (let j = 0; j < 5; j++) {
                let newCell = newRow.insertCell(-1);

                if (j === 0) {
                    newCell.innerHTML = `${i+1}`
                }
                else if (j === 1) {
                    newCell.innerHTML = `${InitialData[i].time}s`
                }
                else if (j === 2) {
                    newCell.innerHTML = `${InitialData[i].name}`
                }
                else if (j === 3) {
                    newCell.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                        <a xlink:href=${InitialData[i].link} target="_blank">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </a>
                    </svg>`
                }
                else if (j === 4) {
                    for (let k = 0; k < InitialData[i].team.length; k++) {
                        
                        let icons = document.createElement('img');
                        icons.src = `assets/img/character-icon2/${InitialData[i].team[k]}.png`;
                        icons.width = '64';
                        icons.height = '64';
                        newCell.append(icons);
                    }

                }

            }
        }
        tableRef.parentElement.replaceChild(new_tbody, tableRef);
        
    })
    .catch((error) => {
        console.log(error);
    })
}




// Get
// fetch(`https://cuddly-southern-bell.glitch.me/api/get${currentChamber.id}`)
//     .then(res => {
//         if (res.ok) {
//             console.log('success')
//         } else {
//             console.log('not successful')
//         }
//         return res.json()
//     })
//     .then(data => console.log(data))
//     .catch((error) => {
//         console.log(error);
//     })




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
