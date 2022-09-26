function greet() {
    const button1 = document.querySelector('#homescreen-btn-1');
    const greeting1 = document.querySelector('#greeting-1');
    const name = prompt('What is your name?');
    if (name){
        greeting1.textContent = `Good Morning ${name}!`;
    } else{
        alert(`Please Enter Your Name ~`);
    }
    
}