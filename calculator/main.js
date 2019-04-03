let num = document.querySelectorAll('.num'),
    operator = document.querySelectorAll('.operator'),
    display = document.querySelector('.calculator__display'),
    clear = document.querySelector('.clear'),
    clearAll = document.querySelector('.clearAll'),
    equal = document.querySelector('.equal'),
    save = document.querySelector('.save')

for (i = 0; i < num.length; i++) {
    let numbers = num[i]
    numbers.addEventListener('click', (e) => {
        let numberValue = e.target.value
        insert(numberValue)
    })
}
for (i = 0; i < operator.length; i++) {
    let operators = operator[i]
    operators.addEventListener('click', (e) => {
        let operatorValue = e.target.value
        insert(operatorValue)
    })
}

function insert(valueForDisplay) {
    display.value += valueForDisplay
}

clear.addEventListener('click', () => {
    display.value = " "
})
clearAll.addEventListener('click', () => {
    display.value = " "
    window.localStorage.clear();
})

equal.addEventListener('click', () => {
    display.value = eval(display.value)
})

save.addEventListener('click', () => {
    if (localStorage.getItem('loggedIn')) {
        display.value = localStorage.getItem('key');
    } else {
        localStorage.setItem('key', (function() {
            localStorage.setItem('loggedIn', 'true');
            let user = display.value;
            return user;
        })());
    }

})



if (localStorage.getItem('loggedIn')) {
    alert(`Результат последнего вычисления равен: ${localStorage.getItem('key')}`)
}