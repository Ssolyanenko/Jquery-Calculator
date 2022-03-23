$(document).ready(function () {
    const label = $('.label output')
    let firstNString = '',
        secondNString = '',
        arifmetic = '',
        isSecond = false,
        result = 0
    $('#plus').click(() => {
        arifmetic = '+'
        isSecond = true
        label.val(firstNString + arifmetic)
    })
    $('#minus').click(() => {
        arifmetic = '-'
        isSecond = true
        label.val(firstNString + arifmetic)
    })
    $('#multiply').click(() => {
        arifmetic = '*'
        isSecond = true
        label.val(firstNString + arifmetic)
    })
    $('#del').click(() => {
        arifmetic = '/'
        isSecond = true
        label.val(firstNString + arifmetic)
    })
    const math = (arifmetic, firstN, secondN) => {
        switch (arifmetic) {
            case '+':
                return firstN + secondN

            case '-':
                return firstN - secondN

            case '*':
                return firstN * secondN

            case '/':
                return firstN / secondN
        }
    }
    $('#0').click(() => {
        !isSecond ? firstNString += '0' : secondNString += '0'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#1').click(() => {
        !isSecond ? firstNString += '1' : secondNString += '1'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#2').click(() => {
        !isSecond ? firstNString += '2' : secondNString += '2'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#3').click(() => {
        !isSecond ? firstNString += '3' : secondNString += '3'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#4').click(() => {
        !isSecond ? firstNString += '4' : secondNString += '4'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#5').click(() => {
        !isSecond ? firstNString += '5' : secondNString += '5'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#6').click(() => {
        !isSecond ? firstNString += '6' : secondNString += '6'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#7').click(() => {
        !isSecond ? firstNString += '7' : secondNString += '7'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#8').click(() => {
        !isSecond ? firstNString += '8' : secondNString += '8'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#9').click(() => {
        !isSecond ? firstNString += '9' : secondNString += '9'
        label.val(!isSecond ? firstNString : firstNString + arifmetic + secondNString)
    })
    $('#equals').click(() => {
        result = math(arifmetic,
            parseInt(firstNString),
            parseInt(secondNString)
        )
        if (arifmetic === '/' && secondNString === '0') {
            return label.val('ERROR').css({
                'color': 'red'
            })
        }
        prep()
        label.val(result)
        firstNString = result;
        secondNString = '';
    })
    $('#clear').click(() => {
        firstNString = ''
        secondNString = ''
        arifmetic = ''
        isSecond = false
        result = 0
        label.val('0')
    })
    let oneT = 1000
    const log = setInterval(() => {
        console.log('FirstNString: ', firstNString)
        console.log('SecondNString: ', secondNString)
        console.log('Arifmetic: ', arifmetic)
        console.log('Result: ', result)
    }, oneT)
    console.log(log)
    const prep = () => $('.field').prepend(`
    <div class="delete_div">
<div class="circle"></div>
<div class="midle">${firstNString} ${arifmetic} ${secondNString} = ${result}</div>
<div class="fieldx"><span style='font-size:50px;'>&#10006;</span></div>
</div> </div>
`);
    $('.field').on('click', '.fieldx', function () {
        $(this).parent($('.delete_div')).remove();
    });
    $('.field').on('click', '.circle', function () {
        $('.circle').toggleClass('circle-red')
    })
    $('.field').bind('DOMSubtreeModified', function func() {
        const liS = document.querySelector('.midle').innerText
        console.log(liS)
        let a = liS.split(' ')
        console.log(a)

        a.forEach((el) => {
            const regExp = /48/
            if (regExp.test(el)) {
                $('.midle').css({
                    'text-decoration': 'underline'
                })
            }

        })
    })
})