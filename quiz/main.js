let box = document.getElementById("box"),
    submition = document.getElementById("submit"),
    myResult = document.getElementById("result__contain")


function showResults(box) {
    let answerContainers = box.querySelectorAll('.answers');
    debugger
    let userAnswers = [];
    for (var i = 0; i < answerContainers.length; i++) { 
        let userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked'))
        if (userAnswer === null) {
            return alert("Ответьте на все вопросы!");
        }  
        else {
            let userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked')).value;
            userAnswers.push(userAnswer)
        }
    }
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
submition.addEventListener('click', () => {
    showResults(box);
});
