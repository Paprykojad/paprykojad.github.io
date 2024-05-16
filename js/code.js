function display(a) {
    let x = document.getElementById('gl')
    x.innerHTML = '';

    x.appendChild(a)
}

function genmem() {
    let x = document.createElement('img')
    x.src = 'js/jamnik.png'
    return x
}

function genzart() {
    let x = document.createElement('p')
    let y = document.createTextNode('uwr;oiuwqoiruwoeirumnxv.,mnxcva, asdjf;lk kjkjkjkjkj')
    x.appendChild(y)
    let z = document.createElement('div')
    let n = document.createAttribute('class')
    n.value = 'p'
    z.appendChild(n)
    z.appendChild(x)
    return z
}

function genmysl() {

}
