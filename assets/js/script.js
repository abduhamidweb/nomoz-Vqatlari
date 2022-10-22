// console.log(regions);
// console.log(provencie);
let select = $("#select");
provencie.forEach((item) => {
  let option = document.createElement("option");
  option.setAttribute("class", "bg-dark");
  option.textContent = item;
  select.appendChild(option);
});

select.addEventListener("change", () => {
  $(".txt").innerHTML = select.value + " viloyati";
});
let thisday = $("#thisDay");
// Data
function data() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const myData = new Date();
  thisday.innerHTML = `${myData.getDate()}-${
    monthNames[myData.getMonth()]
  }  ${myData.getFullYear()}-yil  `;
  $("#time").innerHTML = `${myData.getHours()}:${myData.getMinutes()}:${myData.getSeconds()} `;
}
setInterval(() => {
  data();
}, 500);


// soat qo'yib beradigan function

async function selectRegion(select = "Toshkent") {
  const response = await fetch(
    `https://islomapi.uz/api/present/day?region=${select}`
  );
  const result = await response.json();
  renderData(result);
}

selectRegion();

$("#select").addEventListener("change", (e) => {
  switch (e.target.value.toLowerCase()) {
    case "qashqadaryo":
      selectRegion("qarshi");
      break;
    case "farg'ona":
      selectRegion("qo'qon");
      break;
    case "sirdaryo":
      selectRegion("guliston");
      break;
    case "jizzax":
      selectRegion("jizzax");
      break;
    case "surxandaryo":
      selectRegion("termiz");
      break;
    case "buxoro":
      selectRegion("Buxoro");
      break;
    case "andijon":
      selectRegion("andijon");
      break;
    case "navoiy":
      selectRegion("Navoiy");
      break;
    case "samarqand":
      selectRegion("Samarqand");
      break;
    case "toshkent":
      selectRegion("toshkent");
      break;
  }
});

function renderData(result) {
  const {
    times: { asr, hufton, peshin, quyosh, shom_iftor, tong_saharlik },
  } = result;
  $a("h3")[0].textContent = tong_saharlik;
  $a("h3")[1].textContent = quyosh;
  $a("h3")[2].textContent = peshin;
  $a("h3")[3].textContent = asr;
  $a("h3")[4].textContent = shom_iftor;
  $a("h3")[5].textContent = hufton;
}