const form1 = document.querySelector('.form1');
    form1.addEventListener('submit', (e) => {
        e.preventDefault();
        const count = document.querySelector('.count').value;
        const dateCheckIn = document.querySelector('.dateCheckIn').value;
        const dateCheckOut = document.querySelector('.dateCheckOut').value;
        console.log(count, dateCheckIn, dateCheckOut);
    });