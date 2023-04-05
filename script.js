var container = document.createElement("div");
container.classList.add("container");
var row = document.createElement("div");
row.classList.add("row");

container.append(row);
document.body.append(container);

async function getData() {
  var res = await fetch("https://restcountries.com/v2/all");
  var res1 = await res.json();
  console.log(res1);
  for (let i = 0; i < res1.length; i++) {
    try {
      row.innerHTML += `<div class="col-md-4 my-4"><div class="card" style="width: 21rem;">
      <img src="${
        res1[i].flag
      }" class="card-img-top" style="height:250px;" alt="...">
      <div class="card-body">
        <h4 class="card-title"><b>${res1[i].name}</b></h4>
        <h5 class="card-title">Capital: <b>${res1[i].capital}</b></h5>
        <h6 class="card-title">Region: <b>${res1[i].region}</b></h6>
        <p class="card-text">Temperature<b>: ${await weatherFinder(
          res1[i].latlng[0],
          res1[i].latlng[1]
        )}</b></p>
      </div>
    </div></div>`;
    } catch (error) {
      console.log(error);
    }
  }
}
async function weatherFinder(lat, lon) {
  try {
    if (lat === "undefined") throw new error();
    var res2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d833dc87e378e9a18340fc46558470bb`
    );
    var res3 = await res2.json();
    return res3.main.temp;
  } catch (error) {
    console.log(error);
  }
}
getData();
