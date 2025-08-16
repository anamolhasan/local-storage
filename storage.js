

// const handleAddToStorage = () => {
//    const name = 'Anamol Hasan'

//    localStorage.setItem('name', name)
// }

const handleAddToStorage = () => {
   const person = {
    name: 'anamol hasan',
    age: 20,
    friends: ['hasan, emon, sojon']
   }
   const convertedToString = JSON.stringify(person)
   
   localStorage.setItem('anam', convertedToString)
 
}

const data = localStorage.getItem('anam')
const converted = JSON.parse(data)
console.log(converted)