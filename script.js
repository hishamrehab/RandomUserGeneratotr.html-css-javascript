function fetchUser() {
    fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
        displayUser(data.results[0]);
    });
}

function displayUser(user) {
  const userDisplay = document.querySelector("#user");

  if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }

  userDisplay.innerHTML = `<div class="image">
  <img src="${user.picture.large}"></div>
            <h1 class="main">Random User Generator</h1>
            <button id="generate" class="title"  onClick={fetchUser()}>Generate User</button>
            <div class="info">
                <span class="name">Name: ${user.name.first}</span>
                <p class="email">Email: ${user.email}</p>
                <p class="Phone">Phone:${user.phone}</p>
                <p class="location">${user.location.city}
                ${user.location.country}
                </p>
                <p class="age">Age:${user.dob.age}</p>
            </div> 
            `;
}


fetchUser();
