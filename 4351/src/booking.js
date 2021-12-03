function addBooking(booking) {
    let existingBook = window.localStorage.getItem("Bookings");
    existingBook = existingBook ? JSON.parse(existingBook) : [];
    existingBook.push(booking);

    window.localStorage.setItem("Bookings", JSON.stringify(existingBook));
}