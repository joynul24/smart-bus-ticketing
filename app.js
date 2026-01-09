const showSeatListContainer = document.getElementById("seat-list-container");
const noSeatBooked = document.getElementById("no-seat-booked");
const totalSeatBooked = document.getElementById("total-seat-booked");

let selectSeats = []

const handleSeatBooking = (e) => {

    e.classList.add("bg-primary", "text-white");

    selectSeats.push(e.innerText);
    totalSeatBooked.innerText = selectSeats.length;

    noSeatBooked.classList.add("hidden");
    showSeatListContainer.innerHTML += `
    <li class="flex justify-between items-center mb-3 font-medium text-gray-600">
     <span>${e.innerText}</span>
     <span>Economy</span>
     <span>550</span>
    </li>
   `
}