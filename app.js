let _index = 0;
let listContainer = document.getElementById('ul')

document.getElementById('add').onclick = () => {
    let _v = document.getElementById('text').value
    if (!_v) {
        alert("Input text!")
        return;
    }
    createListItem(_v)
    document.getElementById('text').value = ''
}

const createListItem = (_v) => {
    let _item = document.createElement('li')
    _item.setAttribute('id', `li-${_index}`)


    let delbtn = document.createElement('button')
    delbtn.className = 'del-btn'
    delbtn.appendChild(document.createTextNode('Delete'))

    _item.appendChild(document.createTextNode(_v))
    delbtn.setAttribute('data-id', _index)
    _item.appendChild(delbtn)

    listContainer.appendChild(_item)
    _index++

    delbtn.onclick = function () {
        document.getElementById(`li-${this.getAttribute('data-id')}`).remove()
    }
}
