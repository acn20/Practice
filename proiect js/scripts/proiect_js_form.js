var x = document.getElementsByClassName('field')[0];
var y = document.getElementsByClassName('field')[1];

function pass() {
    if (y.value.length < 3) {
        document.getElementsByTagName('p')[2].innerHTML = 'Minim 3 caractere';
    } else {
        document.getElementsByTagName('p')[2].innerHTML = '';
    }
}

function mail() {
    if (
        x.value.indexOf('@') != x.value.lastIndexOf('@') ||
        x.value.indexOf('@') < 2 ||
        x.value.lastIndexOf('.') > x.value.length - 3 ||
        x.value.lastIndexOf('.') <= x.value.indexOf('@') + 3

    ) {
        document.getElementsByTagName('p')[1].innerHTML = 'E-mail incorect';
    } else {
        document.getElementsByTagName('p')[1].innerHTML = '';
    }
}