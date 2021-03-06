// first class ticket increase button
document.getElementById('first-class-ticket-increase').addEventListener("click", function () {
    handleTicket(true, 'first-class-ticket-counter');
})
// first class ticket decrease button
document.getElementById('first-class-ticket-decrease').addEventListener("click", function () {
    handleTicket(false, 'first-class-ticket-counter');
})
// economy ticket decrease button
document.getElementById('economy-ticket-increase').addEventListener("click", function () {
    handleTicket(true, 'economy-ticket-counter');
})
// economy ticket decrease button
document.getElementById('economy-ticket-decrease').addEventListener("click", function () {
    handleTicket(false, 'economy-ticket-counter');
})
// plus minus button handler
function handleTicket(isIncrease, id) {
    let ticketQuantity = document.getElementById(id).value;
    let ticketQuantityNumber = parseInt(ticketQuantity);
    // let ticketNew = ticketQuantityNumber;

    // if (isIncrease == true) {
    //     ticketQuantityNumber++;
    if (isIncrease == false && ticketQuantityNumber > 0) {
        ticketQuantityNumber--;
        // ticketNew = ticketQuantityNumber - 1;
    } else if (isIncrease == true) {
        ticketQuantityNumber++;
    }
    document.getElementById(id).value = ticketQuantityNumber;
    calculateTotal()
}
// cost calculation
function calculateTotal() {
    let firstClassTicketCount = getInputValue('first-class-ticket-counter');
    let economyTicketCount = getInputValue('economy-ticket-counter');
    let totalPrice = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('ticket-total').innerText = '$' + totalPrice;
    let vat = totalPrice * 0.1
    document.getElementById('vat').innerText = '$' + vat;
    let grandTotal = vat + totalPrice;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
// converting string value to number
function getInputValue(id) {
    let Ticket = document.getElementById(id).value;
    let TicketCount = parseInt(Ticket);
    return TicketCount;
}
// book now button handler
document.getElementById('book-now').addEventListener('click', function () {
    bookAndConfirmShowHide("block", "none", "none");
    document.getElementById('firstClassTicket').innerText = getInputValue('first-class-ticket-counter');
    document.getElementById('EconomyTicket').innerText = getInputValue('economy-ticket-counter');
    document.getElementById('SubTotalCost').innerText = document.getElementById('ticket-total').innerText;
    document.getElementById('VatCost').innerText = document.getElementById('vat').innerText;
    document.getElementById('TotalCost').innerText = document.getElementById('grand-total').innerText;
})
// confirm button handler
document.getElementById('confirm').addEventListener('click', function () {
    bookAndConfirmShowHide("none", "grid", "block");
    document.getElementById('first-class-ticket-counter').value = 0;
    document.getElementById('economy-ticket-counter').value = 0;
    document.getElementById('ticket-total').innerText = '$' + 0;
    document.getElementById('vat').innerText = '$' + 0;
    document.getElementById('grand-total').innerText = '$' + 0;
})
// bookAndConfirmShowHide function
function bookAndConfirmShowHide(showCost, main, header) {
    document.getElementById('showCost').style.display = showCost;
    document.getElementById('main').style.display = main;
    document.getElementById('header').style.display = header;
}