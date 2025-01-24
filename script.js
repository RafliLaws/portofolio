function _(e) {
  return document.getElementById(e);
}
let e = document.createElement("span");
let v = document.createTextNode(" v");
e.appendChild(v);

let pcList = document.querySelectorAll(".pc");
pcList.forEach((element) => {
  let li = document.createElement("div");
  li.innerHTML = element.innerHTML;
  li.style.textAlign = "center";
  li.setAttribute("class", "mobile-menu");
  li.setAttribute("onclick", "toggleMenu()");
  let box = document.querySelector("#mobile-option-box div");
  box.appendChild(li);
});

let deco = _("deco");
let circle = _("circle");
let nama = _("intro-name");
let sunFade = document.querySelector(".sunFade");
let bioSunFade = document.querySelector(".bio-sunFade");
deco.addEventListener("click", function (e) {
  switch (e.target.id) {
    case "deco-cyan":
      circle.style.backgroundImage =
        "linear-gradient(to bottom, cyan, rgb(77, 64, 252))";
      sunFade.style.backgroundImage =
        "linear-gradient(to bottom, cyan, rgb(77, 64, 252))";
      bioSunFade.style.backgroundImage =
        "linear-gradient(to top, rgb(247, 0, 255), cyan)";
      circle.style.color = "blue";
      break;
    case "deco-magenta":
      circle.style.backgroundImage =
        "linear-gradient(to bottom, rgb(65, 17, 141), rgb(77, 64, 252))";
      sunFade.style.backgroundImage =
        "linear-gradient(to bottom, rgb(65, 17, 141), rgb(77, 64, 252))";
      bioSunFade.style.backgroundImage =
        "linear-gradient(to top, rgb(247, 0, 255), rgb(65, 17, 141))";
      circle.style.color = "purple";
      break;
    case "deco-orange":
      circle.style.backgroundImage =
        "linear-gradient(to top,rgb(255, 123, 0),rgb(255, 238, 0))";
      sunFade.style.backgroundImage =
        "linear-gradient(to top,rgb(255, 123, 0),rgb(255, 238, 0))";
      bioSunFade.style.backgroundImage =
        "linear-gradient(to top, rgb(247, 0, 255), rgb(255, 123, 0))";
      circle.style.color = "rgb(160,32,0)";
      break;
    case "deco-green":
      circle.style.backgroundImage =
        "linear-gradient(to bottom,rgb(144, 214, 15),rgb(0, 255, 55))";
      sunFade.style.backgroundImage =
        "linear-gradient(to bottom,rgb(144, 214, 15),rgb(0, 255, 55))";
      bioSunFade.style.backgroundImage =
        "linear-gradient(to top, rgb(247, 0, 255), rgb(144, 214, 15))";
      circle.style.color = "green";
      break;
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let width = window.innerWidth > 0 ? window.innerWidth : screen.width;

  if (width > 800) {
    if (
      document.documentElement.scrollTop >= 700 ||
      document.body.scrollTop >= 700
    ) {
      let pp = _("pp-title");
      pp.classList.add("active");
      let ke = _("ke-title");
      ke.classList.remove("active");
      console.log("halo");
    } else {
      let pp = _("pp-title");
      pp.classList.remove("active");
      let ke = _("ke-title");
      ke.classList.add("active");
      console.log("hapus");
    }
  } else {
    if (
      document.documentElement.scrollTop >= 2200 ||
      document.body.scrollTop >= 2200
    ) {
      let pp = _("pp-title");
      pp.classList.add("active");
      let ke = _("ke-title");
      ke.classList.remove("active");
      console.log("halo");
    } else {
      let pp = _("pp-title");
      pp.classList.remove("active");
      let ke = _("ke-title");
      ke.classList.add("active");
      console.log("hapus");
    }
    console.log("its mobile!!");
    let activeList = document.querySelector(".active a");
    let mobileList = _("mobile-list");
    mobileList.innerHTML = activeList.innerHTML;

    console.log(mobileList);
  }

  console.log(document.body.scrollHeight);
}

function toggleMenu() {
  let mobileMenu = document.querySelectorAll(".mobile-option-list");
  console.log(mobileMenu);
  mobileMenu.forEach((element) => {
    element.classList.toggle("disabled");
  });
}

function removeMenu() {
  let mobileMenu = document.querySelectorAll(".mobile-option-list");
  console.log(mobileMenu);
  mobileMenu.forEach((element) => {
    element.classList.add("disabled");
  });
}

// Sun Animation
const sun = document.querySelector(".sun");
const bioSun = document.querySelector(".bio-sun");

let waktu = 1000;
let waktuHapus = 7000;
let temout = waktu;
for (let i = 0; i < 1000; i++) {
  setTimeout(() => {
    const newDiv = document.createElement("div");
    const isi = document.createTextNode(" ");
    newDiv.appendChild(isi);
    newDiv.classList.add("line");
    newDiv.setAttribute("id", "line-" + i);
    sun.appendChild(newDiv);
  }, temout);
  setTimeout(() => {
    const newDiv = document.createElement("div");
    const isi = document.createTextNode(" ");
    newDiv.appendChild(isi);
    newDiv.classList.add("bio-line");
    newDiv.setAttribute("id", "line-" + i);
    bioSun.appendChild(newDiv);
  }, temout);
  temout += waktu;
  setTimeout(() => {
    const lineHapus = document.querySelectorAll(`#line-${i}`);
    lineHapus.forEach((element) => {
      element.remove();
    });
  }, waktuHapus);
  waktuHapus += waktu;
}

//Biography selector
const bioText = _("bio-content");
const bioSelect = document.querySelectorAll(".bio-select");
bioSelect.forEach((element) => {
  element.addEventListener("click", function () {
    switch (element.id) {
      case "about-me":
        bioText.innerHTML =
          "A full-of-curiosity 23 years old boy that lives in South Jakarta.Some say a weird and funky boy, and some a cold and calm boy. Have hobbies around exercising especially Calisthenics and sometimes spend my times just playing games. Needless to say, thank you forchecking out my portofolio website! I've put every knowledge I know about Vanilla HTML and CSS to build this.";
        break;
      case "education":
        bioText.innerHTML =
          "<ul><li style='font-weight: bolder; margin-top: 30px'>Universitas Pamulang (<span class='cyan'>2020</span> -<span class='orange'>OnGoing</span>)</li>Teknik Informatika<li style='font-weight: bolder; margin-top: 30px'>SMKN 43 Jakarta (<span class='cyan'>2016 - 2019</span>)</li>Teknik Komputer Jaringan</ul>";
        break;
      case "experiences":
        bioText.innerHTML =
          "<ul><li style='font-weight: bolder; margin-top: 30px'>PT. Aksara Nusantara Ynovasi <br />(<span class='cyan'>3</span> Years <span class='orange'>11</span> Months)</li>Technical Support Engineer<li style='font-weight: bolder; margin-top: 30px'>PPPA Daarul Qur'an (<span class='orange'>6</span> Months)</li>IT Support Intern.</ul>";
        break;
      default:
        bioText.innerHTML = "About me";
        break;
    }
  });
});

// Failed attempt of Disco Words :(
// let container = document.querySelectorAll(".skill-card");
// let trigger = 0;
// let interval = "";
// let timeoutStart = "";
// let timeoutEnd = "";
// let vWaktu, awal;
// let waktu;
// let habis;

// container.forEach((element) => {
//   element.addEventListener("mouseenter", function (s) {
//     let isi = s.target.querySelector(".vertical-text").innerHTML.split("");
//     let elenya = s.target.querySelector(".vertical-text");
//     awal = elenya.innerHTML;
//     vWaktu = 200;
//     waktu = vWaktu;
//     habis = waktu * 2;
//     let y = isi.length;

//     interval = setInterval(() => {
//       for (let i = 0; i < isi.length; i++) {
//         let before = isi[i];
//         timeoutStart = setTimeout(() => {
//           isi[i] = "<span style='color: purple;'>" + isi[i] + "</span>";
//           elenya.innerHTML = isi.join("");
//         }, waktu);
//         timeoutEnd = setTimeout(() => {
//           isi[i] = before;
//           elenya.innerHTML = isi.join("");
//         }, habis);
//         waktu += vWaktu;
//         habis += vWaktu;
//       }
//       y++;
//     }, 400);
//   });

//   element.addEventListener("mouseleave", function (s) {
//     clearInterval(interval);
//     clearTimeout(timeoutEnd);
//     clearTimeout(timeoutStart);
//     let ele = s.target.querySelector(".vertical-text");
//     ele.innerHTML = awal;
//     vWaktu = 0;
//   });
// });
