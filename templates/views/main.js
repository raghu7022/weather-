// const submitBtn = document.getElementById('submitBtn');
// const cityName = document.getElementById('cityName');
// const city_name = document.getElementById('city_name');
// //const temp_status = document.getElementById('temp_status');
// const temp_real_val = document.getElementById('temp_real_val');
// const datahide = document.querySelector('.middle_layer');

// const getInfo = async (event) => {
//     event.preventDefault();
//     const cityVal = cityName.value;
//     if (cityVal === "") {
//         city_name.innerText = `Plz write the name before search`;
//         datahide.classList.add('data_hide');
//     }
//     else {
//         try {
//             let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ba9161097fc144798e928aed2ba24b89`;
//             const response = await fetch(url);
//             const data = await response.json();
//             const arrData = [data];

//             city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
//             temp_real_val.innerText = arrData[0].main.temp;
//             //temp_status.innerText = arrData[0].weather[0].main;
//             datahide.classList.remove('data_hide');
//         }
//         catch {
//             city_name.innerText = `Plz enter valid city name`;
//             datahide.classList.add('data_hide');
//         }

//     }

// }

// submitBtn.addEventListener('click', getInfo);

// const getCurrentDay = () => {
//     let weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Satarday"

//     let currentTime = new Date();
//     days = weekday[currentTime.getDay()];
//     let day = document.getElementById('day');

//     day.innerText = days;
// };
// getCurrentDay();




// // const submitBtn = document.getElementById('submitBtn');
// // const cityName = document.getElementById('cityName');
// // const city_name = document.getElementById('city_name');

// // const getInfo = async (event) => {
// //     event.preventDefault();
// //     let cityVal = cityName.value;
// //     if (cityVal === "") {
// //         city_name.innerText = `Plz enter valid city name`;
// //     }
// //     else {
// //         let url = `http://api.openweathermap.org/data/2.5/weather?q=bidar&appid=ba9161097fc144798e928aed2ba24b89`;
// //         const response = await fetch(url);

// //     }

// // }

// // submitBtn.addEventListener('click', getInfo);

// // console.log('js loaded');




// // //condition to check sunny or cloudy
// // if (tempMood == "Clear") {
// //     temp_status.innerHTML =
// //         "<i class = 'fas fa-sun' style ='color:#fff;></i>";
// // } else if (tempMood == "Clouds") {
// //     temp_status.innerHTML =
// //         "<i class = 'fas fa-cloud' style ='color: #f1f2f6;></i>";
// // } else if (tempMood = "Rain") {
// //     temp_status.innerHTML =
// //         "<i class = 'fas fa-cloud-rain' style ='color:#a4b0be;></i>";
// // } else {
// //     temp_status.innerHTML =
// //         "<i class = 'fas fa-sun' style ='color:#f1f2f6;></i>";
// // }