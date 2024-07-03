document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const counterBtn = document.getElementById('counterBtn');
    const counterDisplay = document.getElementById('counter');

    let counter = 0;

    counterBtn.addEventListener('click', function() {
        counter++;
        counterDisplay.textContent = counter.toString();
        counterBtn.style.backgroundColor = getRandomColor();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name === '' || email === '') {
            alert('Please fill out all fields.');
        } else {
            alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);
            form.reset();
        }
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
