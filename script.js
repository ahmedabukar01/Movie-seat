const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

const moviePrice = parseInt(movieSelect.value);

// update selected fuction
function updateSelected(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedCount = selectedSeats.length;
    count.innerText = selectedCount
    total.innerText = selectedCount*moviePrice;
}
container.addEventListener('click',e=>{
    if(e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')

        updateSelected();
    }
})
