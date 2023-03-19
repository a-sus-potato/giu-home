let sendRun = () => {
  let name = document.getElementById("name").value;
  let link = document.getElementById("link").value;
  let chamber = document.getElementById("chamber").value;
  let id = document.getElementById("id").value;

  let team = document.getElementById("team");

  let selected = [...team.options]
    .filter((option) => option.selected)
    .map((option) => option.value);

  let params = {
    name: name,
    link: link,
    id: id,
    chamber: chamber,
    team: selected,
  };

  fetch("https://giu-run-submission.onrender.com/api/postDiscord", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR"));

  console.log(params);
};

document.getElementById("send").addEventListener("click", sendRun);
