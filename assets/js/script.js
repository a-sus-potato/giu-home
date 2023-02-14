let currentChamber = document.getElementsByClassName('active')[0];
console.log(document.referrer);

let navLinks = document.getElementsByClassName('nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', changeChamber)
}

// load initial chamber on start
changeChamber();

// function to change leaderboard
function changeChamber(event) {

    if (event) {
        currentChamber.classList.remove("active");
        currentChamber = event.target;
        event.target.classList.add("active");
    }

    // add loader after saving table
    let loader = `
        <div id="loader-wrapper">
            <div id="loader"></div>
        </div>
    `
    document.getElementById('table').innerHTML = loader;


    // Call fetch on api
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

            // Create new table
            let tableHtml = `
            <table class="table">
                <thead>
                    <tr>
                        <th style="width: 110px;color: rgb(255,255,255);">#</th>
                        <th style="width: 150px;color: rgb(255,255,255);">Time</th>
                        <th style="width: 220px;color: rgb(255,255,255);">Name</th>
                        <th style="width: 200px;color: rgb(255,255,255);">Link</th>
                        <th style="color: rgb(255,255,255);">Team</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            `;
            document.getElementById('table').innerHTML = tableHtml;

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