const showSeatListContainer = document.getElementById("seat-list-container");
const noSeatBooked = document.getElementById("no-seat-booked");
const totalSeatBooked = document.getElementById("total-seat-booked");
const availableSeat = document.getElementById("available-seat");
const totalPrice = document.getElementById("total-price");
const couponField = document.getElementById("coupon-field");
const grandTotal = document.getElementById("grand-total");
const couponInput = document.getElementById("coupon-input");
const applyCouponBtn = document.getElementById("apply-coupon-btn");

let selectSeats = [];

const handleSeatBooking = (e) => {
    const seatName = e.innerText;

    // check if already booked
    if (selectSeats.includes(seatName)) {
        alert("This seat is already booked!");
        return;
    }

    // check if more than 4 seat
    if (selectSeats.length >= 4) {
        alert("You cannot book more than 4 seat!");
        return;
    }

    // style update
    e.classList.add("bg-primary", "text-white");

    // push seat
    selectSeats.push(seatName);
    totalSeatBooked.innerText = selectSeats.length;

    // update available seat
    const currentAvailableSeat = Number(availableSeat.innerText);
    availableSeat.innerText = currentAvailableSeat - 1;

    // update total price (each seat = 550)
    const pricePerSeat = 550;
    const newTotalPrice = selectSeats.length * pricePerSeat;
    totalPrice.innerText = newTotalPrice;
    grandTotal.innerText = newTotalPrice;

    // update seat list
    noSeatBooked.classList.add("hidden");
    showSeatListContainer.innerHTML += `
      <li class="flex justify-between items-center mb-3 font-medium text-gray-600">
        <span>${seatName}</span>
        <span>Economy</span>
        <span>${pricePerSeat}</span>
      </li>
    `;

    // show coupon field when 4 seats booked
    if (selectSeats.length === 4) {
        couponField.classList.remove("hidden")
    }
};



applyCouponBtn.addEventListener("click", function () {
    const enteredCoupon = couponInput.value.trim();

    const currentPrice = Number(totalPrice.innerText);
    let discount = 0;

    if (enteredCoupon === "NEW15") {
        discount = currentPrice * 0.15;
    } else if (enteredCoupon === "Couple 20") {
        discount = currentPrice * 0.20;
    } else {
        alert("Invalid coupon code!"); 
        return;
    };

    const discountTotal = currentPrice - discount;
    grandTotal.innerText = discountTotal;

    couponInput.value = "";
    couponField.classList.add("hidden");
})