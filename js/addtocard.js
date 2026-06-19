const mytitle = [
  { slry: "838", del: "986", icon: "img/case-3.webp", title: "Redragon REFLECT FLOW CA606 ATX Gaming PC Case" },
  { slry: "838", del: "986", icon: "img/GAMEPAD-1.webp", title: "SCALPEL GC-623 ATX Side Glass Gaming PC Case" },
  { slry: "838", del: "986", icon: "img/GAMEPAD-2.webp", title: "PAKTIS 2 GC-540 M-ATX Gaming PC Case" },
  { slry: "838", del: "986", icon: "img/HEADSET-3.webp", title: "Redragon H510 Zeus-X RGB Pink Wired Gaming Headset - 7.1 Surround Sound - 53MM Audio Drivers in Memory Foam Ear Pads w/Durable Fabric Cover- Multi Platforms Headphone - USB Powered for PC/PS4/NS" },
  { slry: "838", del: "986", icon: "img/HEADSET-4.webp", title: "Redragon H868 Gaming Headset, RGB, 2.4GHz/BT/Wired, Black" },
  { slry: "838", del: "986", icon: "img/case-6.webp", title: "Redragon MC211 ITX Gaming PC Case, M-ATX Computer Chassis w/ 2 Tempered Glass Panels & High Airflow Perforated Panels, 240mm Radiator Support, Rhythm Sync Lighting Bar, Easy Cable Management, White" },
  { slry: "838", del: "986", icon: "img/case-7.webp", title: "Redragon EB211 Mini-ITX Gaming PC Case, Small Form Factor Computer Chassis w/ Vented Honeycomb Acrylic Transparent Panels, Triple-Slot GPU and 360 Degree Accessibility, White" },
  { slry: "838", del: "986", icon: "img/compo-4.webp", title: "Redragon S101-1 Gaming Keyboard Mouse Combo, RGB LED Backlit 104 Keys USB Wired Ergonomic Wrist Rest Keyboard, Programmable 6 Button Mouse for Windows PC Gamer - [Keyboard Mouse Set]" },
  { slry: "838", del: "986", icon: "img/Keyboard_1_540x.webp", title: "Redragon K686 PRO SE 98 Keys Wireless Gasket RGB Gaming Keyboard" },
  { slry: "838", del: "986", icon: "img/Keyboard_2_540x.webp", title: "Redragon ECLIPSE K720 PRO 81 keys CNC Aluminum Gaming Keyboard" },
  { slry: "838", del: "986", icon: "img/muose-8.webp", title: "Redragon M616 TRIDENT RGB 10000 DPI Wired Optical Mouse" },
  { slry: "838", del: "986", icon: "img/muose-9.webp", title: "Redragon K1NG MAX M918 PRO 1K Hz 3-Mode Wireless Gaming Mouse" },
];

const card = JSON.parse(localStorage.getItem("itm")) || [];
const lest = document.querySelector("tbody");
const mytitles = document.querySelector(".myjs");

function addtocard(addindx) {
  const prodact = {
    img: mytitle[addindx].icon,
    cardName: mytitle[addindx].title,
    proQty: 1,
    total: mytitle[addindx].slry,
    delet: mytitle[addindx].del,
  };
  let brodacts = card.find((pro) => pro.cardName === mytitle[addindx].title);
  if (brodacts) {
    brodacts.proQty++;
    localStorage.setItem("itm", JSON.stringify(card));
    getcardlinth();
    todocard();
  } else {
    card.push(prodact);
    localStorage.setItem("itm", JSON.stringify(card));
    getcardlinth();
  }
}

let cardlenth = document.querySelector(".card-linth");
function getcardlinth() {
  cardlenth.innerText = card.length;
  localStorage.setItem("itm", JSON.stringify(card));
}

getcardlinth();

mytitle.forEach((titl, num) => {

  mytitles.innerHTML += `
    <div class="bg-[#111111] text-white rounded-[15px] w-full h-full flex flex-col overflow-hidden">
      <img src="${titl.icon}" class="w-full object-cover " alt="">
      <div class="p-4 flex flex-col flex-1 gap-2">
        <h6 class="text-[#e60012] font-semibold">🔥 15% Off with Code 'BTS15'</h6>
        <h5 class="font-semibold text-white ">
          (Only Keycaps) Redragon X LTC PBT 108 Keycaps Set, Thick PBT Keycaps for Mechanical Keyboard (Christmas Limited Edition)
        </h5>
        <p class="text-gray-300 test">${titl.title}</p>
        <div class="flex gap-2">
                <img src="img/Stars.png" alt="" class="w-24">
        <span class="text-sm text-gray-400">(5)</span>
        </div>

        <h5 class="py-3 font-semibold text-white">
          <span class="pr-4">EL ${titl.slry} EGP</span>
          <del class="text-[17px] text-[#ccc]">EL ${titl.del} EGP</del>
        </h5>
        <!-- ✅ btn btn-primary w-100 → w-full py-[10px] bg-[#e60012] hover:bg-[#a10101] -->
        <a
          class="w-full py-[10px] text-center bg-[#e60012] text-white border-none cursor-pointer hover:bg-[#a10101] transition-colors rounded-sm no-underline"
          onclick="addtocard(${num})"
        >
          Add to card <i class="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </div>
  `;
});

getcardlinth();

const pes = document.getElementsByClassName("test");
let mLength = 40;
for (let i = 0; i < pes.length; i++) {
  let myTest = pes[i].textContent;
  if (myTest.length > mLength) {
    pes[i].textContent = myTest.substring(0, mLength) + "...";
  }
}


const mytitle1 = [
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8.16 17.365c-2.504.137-4.516 1.93-4.762 4.425C3.186 23.94 3 26.973 3 31s.186 7.061.398 9.21c.246 2.495 2.258 4.288 4.763 4.425C11.382 44.812 16.562 45 24 45s12.618-.188 15.84-.365c2.504-.137 4.516-1.93 4.762-4.425c.212-2.149.398-5.183.398-9.21s-.186-7.061-.398-9.21c-.246-2.495-2.258-4.288-4.763-4.425C36.618 17.188 31.438 17 24 17s-12.618.188-15.84.365M18 39h12M11 24.5h2m-2 7h2m6-7h2m-2 7h2m6-7h2m-2 7h2m6-7h2m-2 7h2M24 16v-2.568a4 4 0 0 1 3.392-3.954l6.216-.956A4 4 0 0 0 37 4.568V3"/></svg>`, title: "KEYBOARD", link: "kebords.html" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 15 15"><path fill="currentColor" d="M2.5 6a2.5 2.5 0 0 0-1.414.438a6.502 6.502 0 0 1 12.828 0A2.5 2.5 0 0 0 12.5 6A1.5 1.5 0 0 0 11 7.5v4a1.5 1.5 0 0 0 .947 1.395A1.5 1.5 0 0 1 10.5 14H8v1h2.5a2.5 2.5 0 0 0 2.458-2.042A2.5 2.5 0 0 0 15 10.5v-3a7.5 7.5 0 0 0-15 0v3A2.5 2.5 0 0 0 2.5 13A1.5 1.5 0 0 0 4 11.5v-4A1.5 1.5 0 0 0 2.5 6"/></svg>`, title: "HEADSET", link: "HEADSET.html" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-5 -2 24 24"><path fill="currentColor" d="M6 14a1 1 0 0 0 2 0h3c.729 0 1.412-.195 2-.535V18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.535c.588.34 1.271.535 2 .535zm2-1v-3a1 1 0 1 0-2 0v3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3zM5 3H3q-.519.002-1 .126V1.5a1.5 1.5 0 0 1 3 0zm7 .126A4 4 0 0 0 11 3H9V1.5a1.5 1.5 0 0 1 3 0z"/></svg>`, title: "Gaming Backpack" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M8 6.5a3.5 3.5 0 1 0-7 0V10a3.5 3.5 0 1 0 7 0zM1 7h7"/><path d="M4.5 7V2.75A2.25 2.25 0 0 1 6.75.5v0A2.25 2.25 0 0 1 9 2.75V3a2 2 0 1 0 4 0V1.5"/></g></svg>`, title: "Mouse", link: "maus.html" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M469.333 448.003V170.669H298.667v277.334zM362.667 149.336v-64h-320v234.667h138.666v42.666h-32v42.667H256v-42.667h-32v-42.666h53.333V149.336zm-21.334 64h85.334v42.667h-85.334zm0 64v128h85.334v-128zm64 85.333v-42.666h-42.666v42.666z" clip-rule="evenodd"/></svg>`, title: "GAMING CASE", link: "case.html" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><mask id="lineMdMinusSquareFilled0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M4 12v-7c0-0.55 0.45-1 1-1h14c0.55 0 1 0.45 1 1v14c0 0.55-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M7 12h10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="12;0"/></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdMinusSquareFilled0)"/></svg>`, title: "Accessories", link: "Accessories.html" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M7.97 16L5 19c-.33.3-.77.5-1.25.5A1.75 1.75 0 0 1 2 17.75v-.25l1-7.38A4.524 4.524 0 0 1 7.5 6h9c2.36 0 4.29 1.81 4.5 4.12l1 7.38v.25a1.75 1.75 0 0 1-1.75 1.75c-.48 0-.92-.2-1.25-.5l-2.97-3zM7 8v2H5v1h2v2h1v-2h2v-1H8V8zm9.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m-1.75 1.75a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m3.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75M16.5 11.5a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75"/></svg>`, title: "Gamepad", link: "GAMEPAD.html" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9a1 1 0 0 1 1 1a8 8 0 0 1-6.999 7.938L13 20h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-2.062A8 8 0 0 1 4 10a1 1 0 1 1 2 0a6 6 0 0 0 12 0a1 1 0 0 1 1-1m-7-8a4 4 0 0 1 4 4v5a4 4 0 1 1-8 0V5a4 4 0 0 1 4-4"/></svg>`, title: "Microphone" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2zM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2" clip-rule="evenodd"/></svg>`, title: "Gaming monitor" },
  { icon: `<svg class="px-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><defs><mask id="ipTSpeaker0"><g fill="#555555" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path d="M38 2H10a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M24 38a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-20a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSpeaker0)"/></svg>`, title: "Speaker", link: "SPEAKER.html" },
];

const mytitles1 = document.querySelector(".titles");
if (mytitles1) {
  mytitle1.forEach((titl, num) => {
    mytitles1.innerHTML += `
      <li class="col-span-3">
        <a onclick="add(${num})" href="${titl.link || '#'}" class="flex items-center text-[#ccc] no-underline hover:text-[#e60012]">
          ${titl.icon}
          ${titl.title}
        </a>
      </li>
    `;
  });
}