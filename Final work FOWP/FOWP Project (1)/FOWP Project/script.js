document.addEventListener("DOMContentLoaded", () => {
    const seats = document.querySelectorAll(".seat");
    const selectedSeatInput = document.getElementById("selected-seat");

    seats.forEach((seat) => {
        seat.addEventListener("click", () => {
            seats.forEach((s) => s.classList.remove("selected")); // Clear previous selection
            seat.classList.add("selected");
            selectedSeatInput.value = seat.dataset.seat; // Set selected seat value
        });
    });
});



