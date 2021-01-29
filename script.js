document.getElementById('first-class-ticket-increase').addEventListener("click", function () {
    handleTicket(true, 'first-class-ticket-counter');
})
document.getElementById('first-class-ticket-decrease').addEventListener("click", function () {
    handleTicket(false, 'first-class-ticket-counter');
})
document.getElementById('economy-ticket-increase').addEventListener("click", function () {
    handleTicket(true, 'economy-ticket-counter');
})
document.getElementById('economy-ticket-decrease').addEventListener("click", function () {
    handleTicket(false, 'economy-ticket-counter');
})
// plus minus button handler
function handleTicket(isIncrease, id) {
    let ticketQuantity = document.getElementById(id).value;
    let ticketQuantityNumber = parseInt(ticketQuantity);
    if (isIncrease == false && ticketQuantityNumber > 0) {
        ticketQuantityNumber--;
    } else {
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
    document.getElementById('showCost').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('showCost').style.display.block;
    document.getElementById('firstClassTicket').innerText = getInputValue('first-class-ticket-counter');
    document.getElementById('EconomyTicket').innerText = getInputValue('economy-ticket-counter');
    document.getElementById('SubTotalCost').innerText = document.getElementById('ticket-total').innerText;
    document.getElementById('VatCost').innerText = document.getElementById('vat').innerText;
    document.getElementById('TotalCost').innerText = document.getElementById('grand-total').innerText;
})
// confirm button handler
document.getElementById('confirm').addEventListener('click', function () {    
    document.getElementById('showCost').style.display = "none";
    document.getElementById('main').style.display = "grid";
    document.getElementById('header').style.display = "block";
    document.getElementById('first-class-ticket-counter').value = 0;
    document.getElementById('economy-ticket-counter').value = 0;
    document.getElementById('ticket-total').innerText = '$' + 0;
    document.getElementById('vat').innerText = '$' + 0;
    document.getElementById('grand-total').innerText = '$' + 0;
})