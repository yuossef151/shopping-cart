
const mytitle = [
  {
    icon: "img/Keyboard_1_540x.webp",
    title: "Redragon K686 PRO SE 98 Keys Wireless Gasket RGB Gaming Keyboard",
  },
  {
    icon: "img/Keyboard_2_540x.webp",
    title: "Redragon ECLIPSE K720 PRO 81 keys CNC Aluminum Gaming Keyboard",
  },
  {
    icon: "img/Keyboard_3_540x.webp",
    title: " Redragon ARTEMIS K719 PRO Anime Keyboard w/Smart Display & Knob",
  },
  {
    icon: "img/Keyboard_4_540x.webp",
    title: "Redragon URANUS K737 PRO TKL CNC Aluminum Keyboard (Black Contour Side Print Keycap)",
  },
  {
    icon: "img/Keyboard_5_540x.webp",
    title: "Redragon GALATIN PRO K719 95 Keys OEM Profile Gasket RGB Gaming Keyboard w/Smart Display & Knob",
  },
  {
    icon: "img/Keyboard_6_540x.webp",
    title: "Redragon ARTEMIS K719 PRO Anime Keyboard w/Smart Display & Knob",
  },
  {
    icon: "img/Keyboard_7_540x.webp",
    title: "Redragon ANTONIUM K728 PRO SE Anime Keyboard",
  },
  {
    icon: "img/Keyboard_8_540x.webp",
    title: "Redragon K617 FIZZ 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/ White & Grey Mixed-Colored Keycaps, Linear Red Switch, Pro Driver Support",
  },
  {
    icon: "img/Keyboard_9_540x.webp",
    title: "Redragon K618 Horus Wireless RGB Mechanical Keyboard, Bluetooth/2.4Ghz/Wired Tri-Mode Ultra-Thin Low Profile Gaming Keyboard w/No-Lag Cordless Connection",
  },
];


const mytitles = document.querySelector(".myjs");
         
mytitle.forEach((titl, num) => {
  mytitles.innerHTML += `
    <div class="kebord rounded-[20px] bg-black  flex flex-col justify-between px-3 pb-3 border border-transparent transition-all duration-700 hover:border-[#e10800]">
      <img class="w-full h-[75%]  py-5 object-contain" src="${titl.icon}" alt="">
      <p class="pb-3 text-[#ccc] test">${titl.title}</p>
      <button class="w-full rounded-[8px] text-[#dcdcdc] border-none bg-[#444444] opacity-0 py-2 hover:bg-[#e10800] transition-all duration-700">
        Learn More
      </button>
    </div>
      `;
  console.log(mytitle);
  
});




const pes = document.getElementsByClassName("test"); // بيرجع مجموعة عناصر

let mLength = 85; // الحد الأقصى لعدد الحروف

for (let i = 0; i < pes.length; i++) {
  let myTest = pes[i].textContent; // النص اللي جوه العنصر الحالي

  if (myTest.length > mLength) {
    pes[i].textContent = myTest.substring(0, mLength) + "..."; // قص النص
  }
}







const mytitle1 = [
  {
    icon: `  <svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                        viewBox="0 0 48 48">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="3"
                                            d="M8.16 17.365c-2.504.137-4.516 1.93-4.762 4.425C3.186 23.94 3 26.973 3 31s.186 7.061.398 9.21c.246 2.495 2.258 4.288 4.763 4.425C11.382 44.812 16.562 45 24 45s12.618-.188 15.84-.365c2.504-.137 4.516-1.93 4.762-4.425c.212-2.149.398-5.183.398-9.21s-.186-7.061-.398-9.21c-.246-2.495-2.258-4.288-4.763-4.425C36.618 17.188 31.438 17 24 17s-12.618.188-15.84.365M18 39h12M11 24.5h2m-2 7h2m6-7h2m-2 7h2m6-7h2m-2 7h2m6-7h2m-2 7h2M24 16v-2.568a4 4 0 0 1 3.392-3.954l6.216-.956A4 4 0 0 0 37 4.568V3" />
                                    </svg>`,
    title: "KEYBOARD",
    link: "kebords.html",
  },
  {
    icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                        viewBox="0 0 15 15">
                                        <path fill="currentColor"
                                            d="M2.5 6a2.5 2.5 0 0 0-1.414.438a6.502 6.502 0 0 1 12.828 0A2.5 2.5 0 0 0 12.5 6A1.5 1.5 0 0 0 11 7.5v4a1.5 1.5 0 0 0 .947 1.395A1.5 1.5 0 0 1 10.5 14H8v1h2.5a2.5 2.5 0 0 0 2.458-2.042A2.5 2.5 0 0 0 15 10.5v-3a7.5 7.5 0 0 0-15 0v3A2.5 2.5 0 0 0 2.5 13A1.5 1.5 0 0 0 4 11.5v-4A1.5 1.5 0 0 0 2.5 6" />
                                    </svg>
    `,
    title: "HEADSET",
    link: "HEADSET.html",
  },

  {
    icon: `
    <svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                        viewBox="0 0 14 14">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="1">
                                            <path d="M8 6.5a3.5 3.5 0 1 0-7 0V10a3.5 3.5 0 1 0 7 0zM1 7h7" />
                                            <path
                                                d="M4.5 7V2.75A2.25 2.25 0 0 1 6.75.5v0A2.25 2.25 0 0 1 9 2.75V3a2 2 0 1 0 4 0V1.5" />
                                        </g>
        </svg>`,
    title: "Mouse",
    link: "maus.html",
  },
  {
    icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M469.333 448.003V170.669H298.667v277.334zM362.667 149.336v-64h-320v234.667h138.666v42.666h-32v42.667H256v-42.667h-32v-42.666h53.333V149.336zm-21.334 64h85.334v42.667h-85.334zm0 64v128h85.334v-128zm64 85.333v-42.666h-42.666v42.666z"
                                            clip-rule="evenodd" />
                                    </svg>`,
    title: "GAMING CASE",
    link: "case.html",
  },
  {
    icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="60" height="60"
                                        viewBox="0 0 512 512">
                                        <path fill="#819096"
                                            d="M79.098 254.454h-14c0-28.365 3.564-54.231 10.307-74.802c7.534-22.984 18.618-38.782 32.946-46.954c21.216-12.102 43.911-3.853 59.213 5.197c5.16 3.051 8.223 2.576 10.08 1.951c10.565-3.556 20.046-26.799 29.215-49.277c14.515-35.585 30.967-75.918 64.396-82.662c24.648-4.969 53.613 9.605 88.564 44.556l-9.9 9.899c-30.942-30.943-56.468-44.65-75.896-40.732c-26.069 5.259-41.015 41.899-54.201 74.226c-11.307 27.718-21.071 51.656-37.712 57.257c-6.898 2.323-14.19 1.256-21.672-3.169c-17.613-10.417-32.803-12.128-45.15-5.086c-22.324 12.733-36.19 54.727-36.19 109.596" />
                                        <path fill="#adb8bc"
                                            d="M84.916 293.948H59.279c-6.767 0-12.253-5.486-12.253-12.253v-25.637c0-6.767 5.486-12.253 12.253-12.253h25.637c6.767 0 12.253 5.486 12.253 12.253v25.637c0 6.767-5.485 12.253-12.253 12.253" />
                                        <path fill="#c5cfd1"
                                            d="M444.836 507.858H24.377c-12.357 0-22.375-10.018-22.375-22.375V294.438c0-12.357 10.018-22.375 22.375-22.375h420.46c12.357 0 22.375 10.018 22.375 22.375v191.046c-.001 12.356-10.019 22.374-22.376 22.374" />
                                        <path fill="#597b91"
                                            d="M351.971 444.517v25.135a7.293 7.293 0 0 1-7.293 7.293H124.387a7.293 7.293 0 0 1-7.293-7.293v-25.135a7.293 7.293 0 0 1 7.293-7.293h220.292a7.293 7.293 0 0 1 7.292 7.293M84.665 372.368H59.53a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.293 7.293 0 0 0-7.293-7.293m65.004 0h-25.135a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.294 7.294 0 0 0-7.293-7.293m65.003 0h-25.135a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.293 7.293 0 0 0-7.293-7.293m65.003 0H254.54a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.293 7.293 0 0 0-7.293-7.293m65.004 0h-25.135a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.294 7.294 0 0 0-7.293-7.293m65.003 0h-25.135a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.293 7.293 0 0 0-7.293-7.293m-325.017-63.31H59.53a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.293 7.293 0 0 0-7.293-7.293m65.004 0h-25.135a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.294 7.294 0 0 0-7.293-7.293m65.003 0h-25.135a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.293 7.293 0 0 0-7.293-7.293m65.003 0H254.54a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.293 7.293 0 0 0-7.293-7.293m65.004 0h-25.135a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.294 7.294 0 0 0-7.293-7.293m65.003 0h-25.135a7.293 7.293 0 0 0-7.293 7.293v25.135a7.293 7.293 0 0 0 7.293 7.293h25.135a7.293 7.293 0 0 0 7.293-7.293v-25.135a7.293 7.293 0 0 0-7.293-7.293" />
                                        <path fill="#adb8bc"
                                            d="M459.543 64.167c61.513 61.513 55.816 99.656 28.775 126.696s-66.205 31.716-126.696-28.775C327.65 128.115 322.03 78.654 349.07 51.614s76.501-21.42 110.473 12.553" />
                                        <path fill="#819096"
                                            d="M452.924 58.067c-4.797 10.986-15.62 30.356-38.967 54.19l-62.765-62.766l-4.244 4.245l62.757 62.758c-19.084 18.685-35.212 29.194-45.519 34.744a116 116 0 0 1-8.663 4.23a111 111 0 0 0 4.959 5.432c12.31-5.68 32.226-17.526 56.287-41.588c24.061-24.061 35.908-43.977 41.587-56.287a111 111 0 0 0-5.432-4.958" />
                                        <path fill="#1c4c5a"
                                            d="m398.159 98.273l-2.431 2.431c-4.458 4.458-11.686 4.458-16.144 0l-17.368-17.368c-4.458-4.458-4.458-11.686 0-16.144l2.431-2.431c4.458-4.458 11.686-4.458 16.144 0l17.368 17.368c4.458 4.457 4.458 11.685 0 16.144" />
                                    </svg>`,
    title: "COMPO",
    link: "compo.html",
  },
  {
    icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M7.97 16L5 19c-.33.3-.77.5-1.25.5A1.75 1.75 0 0 1 2 17.75v-.25l1-7.38A4.524 4.524 0 0 1 7.5 6h9c2.36 0 4.29 1.81 4.5 4.12l1 7.38v.25a1.75 1.75 0 0 1-1.75 1.75c-.48 0-.92-.2-1.25-.5l-2.97-3zM7 8v2H5v1h2v2h1v-2h2v-1H8V8zm9.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m-1.75 1.75a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m3.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75M16.5 11.5a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75" />
                                    </svg>`,
    title: "Gamepad",
    link: "GAMEPAD.html",
  },

];

const mytitles1 = document.querySelector(".titles");
mytitle1.forEach((titl, num) => {
  mytitles1.innerHTML += `
      <li class="col-span-3">
        <a href="${titl.link}" class="flex items-center p-0 text-[#ccc] no-underline hover:text-[#e10800]">
          ${titl.icon}
          ${titl.title}
        </a>
      </li>
  `;
});

  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
