const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

let moviePrice = parseInt(movieSelect.value);

populateUi();

// saving movie index and move price
function movieData(movieIndex,moviePrice){
    localStorage.setItem('movieprice',moviePrice);
    localStorage.setItem('movieIndex',movieIndex);
}
movieSelect.addEventListener('change',e=>{
     moviePrice = +e.target.value;
     movieData(e.target.selectedIndex,moviePrice);
     updateSelected();
})

// get data from local storage
function populateUi(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedseats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
                
            }
        })
    }

    const movieIndex = localStorage.getItem('movieIndex');
    if(movieIndex !== null){
        movieSelect.selectedIndex = movieIndex;
    }
}
// update selected fuction
function updateSelected(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedCount = selectedSeats.length;
    count.innerText = selectedCount
    total.innerText = selectedCount*moviePrice;
    
    const seatIndex = [...selectedSeats].map(seat=> [...seats].indexOf(seat));
    localStorage.setItem('selectedseats', JSON.stringify(seatIndex));
}
container.addEventListener('click',e=>{
    if(e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')

        updateSelected();
    }
})

updateSelected();