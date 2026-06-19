const card = JSON.parse(localStorage.getItem("itm")) || [];
let cardlenth = document.querySelector(".card-linth");

function getcardlinth() {
  cardlenth.innerText = card.length;
  localStorage.setItem("itm", JSON.stringify(card));
}
getcardlinth();
const lest = document.querySelector("#todo-list");
const mobileCart = document.querySelector("#mobile-cart");
function todocard() {
    lest.innerHTML = "";
  mobileCart.innerHTML = "";
  card.forEach((el, indx) => {
    lest.innerHTML += `
      <tr class="border-b border-[#333] odd:bg-[#1a1a1a] even:bg-[#111111]">

        <!-- ✅ td: w-100 d-flex align-items-center → w-full flex items-center -->
        <td class="w-full px-[30px] py-4">
          <div class="flex items-center gap-4">
            <!-- ✅ w-25 h-25 → w-24 h-24 -->
            <img class="w-24 h-24 object-cover" src="${el.img}" alt="">
            <div class="mt-5">
              <p class="w-3/4 text-white">
                (Only Keycaps) Redragon X LTC PBT 108 Keycaps Set, Thick PBT Keycaps
                for Mechanical Keyboard (Christmas Limited Edition)
              </p>
              <p class="text-red-600">
                <svg class="inline pr-2" width="20" style="color: #ccc;"
                  viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                  <path fill="currentColor" fill-rule="evenodd"
                    d="M7 0h3a2 2 0 0 1 2 2v3a1 1 0 0 1-.3.7l-6 6a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4l6-6A1 1 0 0 1 7 0m2 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
                    clip-rule="evenodd"></path>
                </svg>
                Cart Special
              </p>
            </div>
          </div>
        </td>

        <td class="px-[30px] py-4 flex justify-center ">
          <!-- ✅ d-flex align-items-center → flex items-center -->
          <div class="flex items-center gap-4">

            <!-- ✅ pls: flex items-center text-center px-[10px] gap-[30px] border border-[#ccc] rounded-[4px] -->
            <!-- ✅ mt-5 → mt-5 -->
            <div class="flex items-center text-center px-[10px] py-[10px] gap-[30px] border border-[#ccc] rounded-[4px] mt-5">

              <!-- ✅ mybtn: bg-transparent border-0 text-white cursor-pointer -->
              <button
                class="bg-transparent border-0 text-white cursor-pointer"
                onclick="dele(${indx})"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                </svg>
              </button>

              <!-- ✅ pls p: mt-0 mb-0 → m-0 -->
              <p class="m-0 text-white">${el.proQty}</p>

              <button
                class="bg-transparent border-0 text-white cursor-pointer"
                onclick="add(${indx})"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/>
                </svg>
              </button>

            </div>

            <!-- ✅ mt-5 ms-2 → mt-5 ml-2 text-white cursor-pointer -->
            <a onclick="deletCard(${indx})" class="mt-5 ml-2 text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path fill="currentColor" d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0m-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1"/>
              </svg>
            </a>

          </div>
        </td>

        <td class="px-[30px] py-4 text-center">
          <p class="mt-5 text-white">EL ${el.total * el.proQty}</p>
          <p class="text-[#ccc]"><del>EL ${el.delet * el.proQty}</del></p>
        </td>

      </tr>
    `;
    mobileCart.innerHTML += `
<div class="bg-[#1a1a1a] rounded-xl p-4 border border-[#333]">

  <div class="flex gap-3">
    <img
      src="${el.img}"
      class="w-24 h-24 object-cover rounded-lg"
      alt=""
    >

    <div class="flex-1">
      <h3 class="text-white text-sm line-clamp-3">
        ${el.cardName}
      </h3>

      <p class="text-red-500 text-sm mt-2">
        Cart Special
      </p>
    </div>
  </div>

  <div class="flex justify-between items-center mt-5">

    <div
      class="flex items-center gap-4 border border-[#555]
      px-3 py-2 rounded-lg"
    >
      <button
        onclick="dele(${indx})"
        class="text-white text-xl"
      >
        -
      </button>

      <span class="text-white">
        ${el.proQty}
      </span>

      <button
        onclick="add(${indx})"
        class="text-white text-xl"
      >
        +
      </button>
    </div>

    <div class="text-right">
      <p class="text-white font-semibold">
        EL ${el.total * el.proQty}
      </p>

      <del class="text-gray-500 text-sm">
        EL ${el.delet * el.proQty}
      </del>
    </div>

  </div>

  <button
    onclick="deletCard(${indx})"
    class="w-full mt-4 bg-red-600 py-2 rounded-lg text-white"
  >
    Remove Item
  </button>

</div>
`;
  });
}
todocard();

const mytitle = [
  { slry: "838", del: "986", icon: "https://www.redragonzone.com/cdn/shop/products/RedragonGS590WirelessRGBDesktopSpeakers_1_540x.png?v=1677047853", title: "Redragon GS590 Wireless RGB Desktop Speakers, 2.0 PC Computer Stereo Speaker w/BT 5.0/AUX/USB Mode, Back Ambient RGB Backlight, Enhanced Bass and Easy-Access in-line Control Box, USB Powered" },
  { slry: "838", del: "986", icon: "img/GAMEPAD-1.webp", title: "SCALPEL GC-623 ATX Side Glass Gaming PC Case" },
  { slry: "838", del: "986", icon: "img/GAMEPAD-2.webp", title: "PAKTIS 2 GC-540 M-ATX Gaming PC Case" },
  { slry: "838", del: "986", icon: "img/HEADSET-3.webp", title: "Redragon H510 Zeus-X RGB Pink Wired Gaming Headset - 7.1 Surround Sound - 53MM Audio Drivers in Memory Foam Ear Pads w/Durable Fabric Cover- Multi Platforms Headphone - USB Powered for PC/PS4/NS" },
  { slry: "838", del: "986", icon: "img/HEADSET-4.webp", title: "Redragon H868 Gaming Headset, RGB, 2.4GHz/BT/Wired, Black" },
  { slry: "838", del: "986", icon: "img/case-6.webp", title: "Redragon MC211 ITX Gaming PC Case, M-ATX Computer Chassis w/ 2 Tempered Glass Panels & High Airflow Perforated Panels, 240mm Radiator Support, Rhythm Sync Lighting Bar, Easy Cable Management, White" },
  { slry: "838", del: "986", icon: "img/case-7.webp", title: "Redragon EB211 Mini-ITX Gaming PC Case, Small Form Factor Computer Chassis w/ Vented Honeycomb Acrylic Transparent Panels, Triple-Slot GPU and 360 Degree Accessibility, White" },
  { slry: "838", del: "986", icon: "https://www.redragonzone.com/cdn/shop/products/redragonrgbgamingspeakergs520_1_540x.png?v=1598499483", title: "Redragon GS520 Anvil RGB Desktop Speakers, 2.0 Channel PC Computer Stereo Speaker with 6 Colorful LED Modes" },
  { slry: "838", del: "986", icon: "img/Keyboard_1_540x.webp", title: "Redragon K686 PRO SE 98 Keys Wireless Gasket RGB Gaming Keyboard" },
  { slry: "838", del: "986", icon: "img/Keyboard_2_540x.webp", title: "Redragon ECLIPSE K720 PRO 81 keys CNC Aluminum Gaming Keyboard" },
  { slry: "838", del: "986", icon: "img/muose-8.webp", title: "Redragon M616 TRIDENT RGB 10000 DPI Wired Optical Mouse" },
  { slry: "838", del: "986", icon: "img/muose-9.webp", title: "Redragon K1NG MAX M918 PRO 1K Hz 3-Mode Wireless Gaming Mouse" },
];

const mytitles = document.querySelector(".myjs");
if (mytitles) {
  mytitle.forEach((titl, num) => {
    

    mytitles.innerHTML += `
       <div class="bg-[#111111] text-white rounded-[15px] w-full flex flex-col overflow-hidden">
        <img src="${titl.icon}" class="w-full object-cover" alt="">
         <div class="p-4 flex flex-col gap-2 flex-1">
          <h6 class="text-[#e60012] font-semibold">🔥 15% Off with Code 'BTS15'</h6>
           <h5 class="font-semibold text-white test">
            (Only Keycaps) Redragon X LTC PBT 108 Keycaps Set, Thick PBT Keycaps for Mechanical Keyboard (Christmas Limited Edition)
           </h5>
          <img src="img/Stars.png" alt="" class="w-24">
         <span class="text-sm text-gray-400">(2)</span>
          <h5 class="py-3 font-semibold text-white">
            <span class="pr-4">EL ${titl.slry} EGP</span>
             <del class="text-[17px] text-[#ccc]">EL ${titl.del} EGP</del>
           </h5>
          <!-- ✅ btn btn-primary w-100 → w-full py-[10px] bg-[#e60012] hover:bg-[#ff0000] -->
           <a
            class="w-full py-[10px] text-center bg-[#e60012] text-white border-none cursor-pointer hover:bg-[#ff0000] transition-colors rounded-sm no-underline"
            onclick="addtocard(${num})"
         >
           Add to card <i class="fa-solid fa-cart-shopping"></i>
           </a>
       </div>
      </div>
    `;
  });
}

function addtocard(addindx) {
  const prodact = {
    img: mytitle[addindx].icon,
    cardName: mytitle[addindx].title,
    proQty: 1,
    total: mytitle[addindx].slry,
    delet: mytitle[addindx].del,
  };
  let brodacts = card.find((pro) => pro.cardName == mytitle[addindx].title);
  if (brodacts) {
    brodacts.proQty++;
    localStorage.setItem("itm", JSON.stringify(card));
    todocard();
  } else {
    card.push(prodact);
    getcardlinth();
    todocard();
  }
  localStorage.setItem("cards", JSON.stringify(card));
}

function add(myind) {
  card[myind].proQty++;
  localStorage.setItem("itm", JSON.stringify(card));
  todocard();
}

function dele(indx) {
  if (card[indx].proQty === 1) {
    deletCard(indx);
    todocard();
  } else {
    card[indx].proQty--;
    localStorage.setItem("itm", JSON.stringify(card));
    todocard();
  }
}

function deletCard(indxs) {
  card.splice(indxs, 1);
  localStorage.setItem("cards", JSON.stringify(card)) || [];
  todocard();
  getcardlinth();
}

// ✅ تقصير النص
const pes = document.getElementsByClassName("test");
let mLength = 28;
for (let i = 0; i < pes.length; i++) {
  let myTest = pes[i].textContent;
  if (myTest.length > mLength) {
    pes[i].textContent = myTest.substring(0, mLength) + "...";
  }
}