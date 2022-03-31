
const carElem = document.querySelector('#car')
const carBoxElem = document.querySelector('.car-box')
const catBoxElem = document.querySelector('.cat-box')
const catElem = document.querySelector('#cat')
const sunElem = document.querySelector('#sun')
const sunBoxElem =document.querySelector('.sun-box')



carElem.addEventListener('dragstart', (e) => {
    
    e.dataTransfer.setData('icon', carElem.id);
})

catElem.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('icon',catElem.id )
})

sunElem.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('icon', sunElem.id)
}) 


//-----------------------------------------------------------------------------------

carBoxElem.addEventListener('dragover', (e) => {
    e.preventDefault()
})

catBoxElem.addEventListener('dragover', (e) => {
    e.preventDefault()
})

sunBoxElem.addEventListener('dragover', (e) => {
    e.preventDefault()
})

//----------------------------------------------------------------------------------

carBoxElem.addEventListener('drop', (e) => {
    e.preventDefault()

    let id = e.dataTransfer.getData('icon')
    carBoxElem.appendChild(document.getElementById(id))
    
    if(carBoxElem.firstChild.id === carElem.id){
        carBoxElem.style.backgroundColor = 'green'
    } else{
        carBoxElem.style.backgroundColor = 'brown'
    }
 
})

catBoxElem.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = e.dataTransfer.getData('icon')
    
    catBoxElem.appendChild(document.getElementById(id))

    if(catBoxElem.firstChild.id === catElem.id){
        catBoxElem.style.backgroundColor = 'green'
    } else{
        catBoxElem.style.backgroundColor = 'brown'
    }    
})

sunBoxElem.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = e.dataTransfer.getData('icon')
    

    sunBoxElem.appendChild(document.getElementById(id))

    if(sunBoxElem.firstChild.id === sunElem.id){
        sunBoxElem.style.backgroundColor = 'green'
        
    } else{
        sunBoxElem.style.backgroundColor = 'brown'
    }

    
    
   
})

