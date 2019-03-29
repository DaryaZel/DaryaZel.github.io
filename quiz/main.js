let box = document.getElementById("box"),
    submition = document.getElementById("submit"),
    myResult = document.getElementById("result__contain")


//функция по подсчету весов выбранных ответов и вывод результата
function showResults(box) {
    debugger
    //коллекция из всех вариантов ответов
    let answerContainers = box.querySelectorAll('.answers');
    debugger
    let userAnswers = [];
    //теперь нужно найти выбранные ответы 
    for (var i = 0; i < answerContainers.length; i++) {
        //проверяем какие ответы checked 
        let userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked'))
        //если не все ответы выбраны выскакивает просьба заполнить все ответы
        if (userAnswer === null) {

            return alert("Ответьте на все вопросы!");
        }
        //если все ответы выбраны присваиваем перемменной uderAnswer вес ответа и создаем массив из весов ответов  
        else {
            let userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked')).value;
            userAnswers.push(userAnswer)
        }

    }
    //определяем какой вариант весов встречается чаще
    function maxValue(array) {
        debugger
        let obj = {};
        let maxEl = array[0],
            maxCount = 1;
        for (let i = 0; i < array.length; i++) {
            let el = array[i];
            (obj[el] == null) ? (obj[el] = 1) : obj[el]++;
            if (obj[el] > maxCount) {
                maxEl = el;
                maxCount = obj[el];
            }
        }
        myResult.innerHTML = maxEl;
    }
    return maxValue(userAnswers)
}
//кликом по баттону выводим результат
submition.addEventListener('click', () => {
    showResults(box);
});