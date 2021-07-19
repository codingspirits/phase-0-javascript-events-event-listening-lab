function addingEventListener() {
    alert('I was clicked again')
}

const input= document.getElementById('input')
input.addEventListener('click', addingEventListener)
