# 🚌 GoTicket – Bus Seat Booking System

A simple bus seat booking web application built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

This project demonstrates dynamic seat booking logic, pricing calculation, coupon discounts, input validation, and a responsive confirmation modal.

---

## ✨ Features

- **Seat Booking Logic**
  - Maximum 4 seats can be booked per user
  - Prevents duplicate seat selection with alert
  - Updates available seat count dynamically

- **Pricing & Grand Total**
  - Each seat costs **550 BDT**
  - Total price updates automatically with every seat booked
  - Grand total calculation with coupon discounts

- **Coupon System**
  - `NEW15` → 15% discount
  - `Couple 20` → 20% discount
  - Coupon field appears only after 4 seats are booked
  - Coupon field hides after successful application

- **Validation & Modal**
  - Phone number input must be **11 digits** to enable Next button
  - Confirmation modal appears after Next button click
  - Continue button reloads the site to reset everything

- **Smooth Scroll**
  - Banner **"Buy Ticket"** button scrolls directly to the seat booking section

---

## 🛠️ Technologies Used

- **HTML5** → Structure of the app  
- **Tailwind CSS3** → Styling and responsive design  
- **Vanilla JavaScript** → Dynamic logic, event handling, and DOM manipulation  

---


## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/joynul24/smart-bus-ticketing
