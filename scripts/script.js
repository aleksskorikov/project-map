

const tultip = document.querySelector("#tultip");
const countrys = document.querySelectorAll(".country");
const hotelsCauntry = document.querySelectorAll(".hotels-cauntry");

let hotelCauntrs = [];

hotelsCauntry.forEach(hotelCauntry => {
    hotelCauntrs.push(hotelCauntry.dataset.cauntry.toUpperCase()); 
});

countrys.forEach(country => {
    country.addEventListener("mousemove", function (e) {
        tultip.innerText = this.dataset.title;
        tultip.style.top = (e.y + 5) + "px";
        tultip.style.left = (e.x + -120) + "px";
    });

    country.addEventListener("mouseenter", function () {
        tultip.style.display = "block";
    });

    country.addEventListener("mouseleave", function () {
        tultip.style.display = "none";
    });

    country.addEventListener("click", () => {
        let cauntryname = country.dataset.title.toUpperCase();
        console.log("cauntryname:", cauntryname);
        console.log("hotelCauntrs:", hotelCauntrs);
        
        if (hotelCauntrs.includes(cauntryname)) {
            hotelsCauntry.forEach(hotelCauntry => {
                if (hotelCauntry.dataset.cauntry.toUpperCase() === cauntryname) {
                    hotelCauntry.classList.add("activ");
                } else {
                    hotelCauntry.classList.remove("activ");
                }
            });
        }
    });
});

// ==========================працює з розділом HANGARY ===================

// =========================POLAND підключена в інший спосіб================================


const mapButtons = document.querySelectorAll("#hotel__block-btn");

mapButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        let latitude = parseFloat(button.getAttribute('data-latitude'));
        let longitude = parseFloat(button.getAttribute('data-longitude'));

        openMapWithLocation(latitude, longitude);
    });
});

function openMapWithLocation(latitude, longitude) {
    let mapUrl = `${'https://www.google.com/maps?q='}  ${latitude} , ${longitude}`;

    window.open(mapUrl, '_blank');
};




