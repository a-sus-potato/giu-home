let currentChamber = document.getElementsByClassName('active')[0];
console.log(document.referrer);

let navLinks = document.getElementsByClassName('nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', changeChamber)
}

// Get Initial Data for page Clicked
fetch(`https://giu-run-submission.onrender.com/api/get${currentChamber.id}`)
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
                    newCell.innerHTML = `${i + 1}`
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
                    <a href=${InitialData[i].link} target="_blank">
                        <i class="bi bi-link-45deg"></i>
                    </a>`
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
    fetch(`https://giu-run-submission.onrender.com/api/get${currentChamber.id}`)
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
                        newCell.innerHTML = `${i + 1}`
                    }
                    else if (j === 1) {
                        newCell.innerHTML = `${InitialData[i].time}s`
                    }
                    else if (j === 2) {
                        newCell.innerHTML = `${InitialData[i].name}`
                    }
                    else if (j === 3) {
                        newCell.innerHTML = `
                    <a href=${InitialData[i].link} target="_blank">
                        <i class="bi bi-link-45deg"></i>
                    </a>`
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