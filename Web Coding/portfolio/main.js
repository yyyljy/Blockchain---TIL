const API_KEY = "";

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cityTemp = document.querySelector(".cityTemp");
        const weatherIcon = document.querySelector(".weatherIcon");

        cityTemp.innerText = data.name + ", " + parseInt(data.main.temp) + "℃";
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
  },
  () => alert("Location access not allowed.")
);

const introduceArray = [
  "안녕하세요, 프론트엔드 개발자 ABCDE입니다.",
  `I'm </br> A  Boy Can Do Everything`,
  "도전하는 것을 좋아합니다. 잘 부탁드립니다!",
];
let introduceIndex = 0;

function onClickIntroduce() {
  const introduceMessage = document.querySelector(".introduceMessage");

  introduceIndex++;

  if (introduceIndex === introduceArray.length) {
    introduceIndex = 0;
  }

  introduceMessage.innerHTML = introduceArray[introduceIndex];
}
