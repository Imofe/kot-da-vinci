const replyButtons = document.querySelectorAll('.check-answer__button');

var answers = {
    '1': '58',
    '2': 'yxzw',
    '3': '355',
    '4': '14',
    '5': '16',
    '6': '38',
    '7': '98',
    '8': '2961',
    '9': '2241',
    '10': '45',
    '11': '22016',
    '12': '5',
    '13': '21',
    '14': '8767',
    '15': '94',
    '16': '8266912626',
    '17': '180 190360573',
    '18': '1099 1026',
    '19': '64',
    '20': '32 63',
    '21': '62',
    '22': '17',
    '23': '98',
    '24': '95',
    '25': '162139404 80148 162139404 80148 1421396214 702618 1521393104 752048',
    '26': '1521393104 752048',
    '27': '51063 5634689219329'
};

// function addAnswers () {
//     var answers = {
//         '1': '58',
//         '2': 'yxzw',
//         '3': '355',
//         '4': '14',
//         '5': '16',
//         '6': '38',
//         '7': '98',
//         '8': '2961',
//         '9': '2241',
//         '10': '45',
//         '11': '22016',
//         '12': '5',
//         '13': '21',
//         '14': '8767',
//         '15': '94',
//         '16': '8266912626',
//         '17': '180 190360573',
//         '18': '1099 1026',
//         '19': '64',
//         '20': '32 63',
//         '21': '62',
//         '22': '17',
//         '23': '98',
//         '24': '95',
//         '25': '162139404 80148 162139404 80148 1421396214 702618 1521393104 752048',
//         '26': '1521393104 752048',
//         '27': '51063 5634689219329'
//     };

//     var json = JSON.stringify(answers);
//     localStorage.setItem(variantNumber, json);
// }

// varButton.addEventListener('click', addAnswers);


for (index = 0; index < replyButtons.length; index++) {
    currentButton = replyButtons[index];
    currentButton.addEventListener('click', function (event) {
        var target = event.target;
        var answerId = target.closest('li').id;
        var answer = document.getElementById(`t-${answerId}`).value;

        if (answers[answerId] == answer) {
            document.getElementById(`t-${answerId}`).style.background = 'rgb(60, 179, 113, 0.7)';
        } else {
            document.getElementById(`t-${answerId}`).style.background = 'rgb(179, 60, 67, 0.7)';
        }
    });
}