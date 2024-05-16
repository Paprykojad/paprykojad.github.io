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

    let y = document.createTextNode('Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.')

    x.appendChild(y)
    let n = document.createAttribute('class')
    n.value = 'p'
    x.setAttributeNode(n)
    return x
}

function wyswietlmysl() {
    let v = document.getElementById('imysl').value
    document.getElementById('gl').innerHTML = ''
    let x = document.createElement('p')
    x.appendChild(document.createTextNode(v))
    let n = document.createAttribute('class')
    n.value = 'p'
    x.setAttributeNode(n)
    document.getElementById('gl').appendChild(x)

}

function genmysl() {
    let x = document.createElement('input')
    x.type = 'text'
    x.id = 'imysl'

    let y = document.createElement('label')
    y.htmlFor = 'imysl'
    y.appendChild(document.createTextNode('Myśl roku'))

    let b = document.createElement('input')
    b.type = 'button'
    b.addEventListener('click', () => wyswietlmysl())

    let w = document.createElement('div')
    w.appendChild(y)
    w.appendChild(x)
    w.appendChild(document.createElement('br'))
    w.appendChild(b)
    // let clasa = document.createAttribute('class')
    // clasa = 'p'
    // w.setAttributeNode(clasa)
    return w
}

