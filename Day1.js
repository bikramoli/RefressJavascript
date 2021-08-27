let i = 0;
function count() {
    const select = document.querySelector('h1')
    const select1 = document.querySelector('h2')

    if (i <= 10) {
        select.innerHTML = i++;

    } else if (i >= 10) {
        alert(`count limit reached ${i}`)
        select1.innerHTML = 'counter limit reach';
        i = 0;
    }
    else {
        document.querySelector('button').innerHTML = 'Restart'
    }
    //document.querySelector('button').onclick = count();
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = count;
});
