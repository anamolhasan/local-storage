

const handleAddToStorage = () => {
    const name = document.getElementById('name').value
    const id = document.getElementById('id').value

    const data = {id, name}

    localStorage.setItem(id, JSON.stringify(data))
}
const storageItem = localStorage.getItem('1233')
console.log(JSON.parse(storageItem))