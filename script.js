let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

const initFetch = () => {
  fetch(`./data.json`)
    .then((response) => response.json())
    .then((data) => {
      App(data);
    })
    .catch((error) => {});
};

const listeners = (data) => {
  daily.addEventListener("mouseover", () => {
    for (let i = 0; i < data.length; i++) {
      let title = data[i].title.toLowerCase().split(" ").join("");

      document.getElementById(
        title + "Hours"
      ).innerHTML = `${data[i].timeframes.daily.current}hrs`;
      document.getElementById(title + "Info").innerHTML = `Yesterday - 
        ${data[i].timeframes.daily.previous} hrs`;
    }
  });

  weekly.addEventListener("mouseover", () => {
    for (let i = 0; i < data.length; i++) {
      let title = data[i].title.toLowerCase().split(" ").join("");

      document.getElementById(
        title + "Hours"
      ).innerHTML = `${data[i].timeframes.weekly.current}hrs`;
      document.getElementById(title + "Info").innerHTML = `Last Week - 
        ${data[i].timeframes.weekly.previous} hrs`;
    }
  });
  monthly.addEventListener("mouseover", () => {
    for (let i = 0; i < data.length; i++) {
      let title = data[i].title.toLowerCase().split(" ").join("");

      document.getElementById(
        title + "Hours"
      ).innerHTML = `${data[i].timeframes.monthly.current}hrs`;
      document.getElementById(title + "Info").innerHTML = `Last Month - 
        ${data[i].timeframes.monthly.previous} hrs`;
    }
  });
};

const App = (data) => {
  for (let i = 0; i < data.length; i++) {
    let title = data[i].title.toLowerCase().split(" ").join("");
    let card = document.getElementById(title);
    card.classList.add(title);
    document.getElementById(title + "Title").innerHTML = data[i].title;
  }
  listeners(data);
};

initFetch();
