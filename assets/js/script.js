let currentChamber = document.getElementsByClassName('active')[0];

let navLinks = document.getElementsByClassName('nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', changeChamber)
}

// Get Initial Data for 12-1-1
fetch(`https://cuddly-southern-bell.glitch.me/api/get12-1-1`)
    .then(res => {
        if (res.ok) {
            console.log('success')
        } else {
            console.log('not successful')
        }
        return res.json()
    })
    .then(InitialData => {
        console.log(InitialData)
        let tableRef = document.getElementsByTagName('tbody')[0];

        for (let i = 0; i < InitialData.length; i++) {
            let newRow = tableRef.insertRow();
            for (let j = 0; j < 5; j++) {
                let newCell = newRow.insertCell(-1);

                if (j === 0) {
                    newCell.innerHTML = `${i + 1}`
                }
                else if (j === 1) {
                    newCell.innerHTML = `${InitialData[i].time}s`
                }
                else if (j === 2) {
                    newCell.innerHTML = `${InitialData[i].name}`
                }
                else if (j === 3) {
                    newCell.innerHTML = `${InitialData[i].link}`
                }
                else if (j === 4) {
                    let teams = document.getElementsByTagName('td');
                    for (let k = 0; k < InitialData[i].team.length; k++) {

                        let icons = document.createElement('img');
                        icons.src = `assets/img/character-icon2/${InitialData[i].team[k]}.png`;
                        icons.width = '50';
                        icons.height = '50';
                        teams[teams.length - 1].append(icons);
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
                console.log('success')
            } else {
                console.log('not successful')
            }
            return res.json()
        })
        .then(InitialData => {
            console.log(InitialData)

            // Wipe Table

            let new_tbody = document.createElement('tbody');

            let tableRef = document.getElementsByTagName('tbody')[0];


            for (let i = 0; i < InitialData.length; i++) {
                let newRow = new_tbody.insertRow();
                for (let j = 0; j < 5; j++) {
                    let newCell = newRow.insertCell(-1);

                    if (j === 0) {
                        newCell.innerHTML = `${i + 1}`
                    }
                    else if (j === 1) {
                        newCell.innerHTML = `${InitialData[i].time}`
                    }
                    else if (j === 2) {
                        newCell.innerHTML = `${InitialData[i].name}`
                    }
                    else if (j === 3) {
                        newCell.innerHTML = `${InitialData[i].link}`
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
