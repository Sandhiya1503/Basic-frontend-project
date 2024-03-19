/*
'Elephant': habit = 'Savannahs,forests,and grasslands of africa'
           diet = 'herbivorous,primarly feeding on grasses,leaves,fruits,and bark'
           average lifespan = 'around 60 to 70 years'
'Tiger':    habit = 'dense forests,mangrove swamps, and grasslands of India,Nepal,Bhutan,and Bangladesh'
            diet = ' carnivorous, preying on deer, wild boar, and other large mammals'
            average lifespan = ' approximately 10 to 15 years in the wild'
'Blue Whale': habit = 'oceans worldwide, preferring deep, cold waters'
              diet = 'Filter feeder, consuming tiny shrimp-like animals called krill by gulping large amounts of water and then filtering out the krill'
              average lifespan =' estimated to be around 70 to 90 years'
'Kangaroo': habit = 'arid and semi-arid regions of Australia'
            diet ='herbivorous, feeding on grasses, leaves, and shrubs'
            average lifespan = 'Typically 6 to 8 years in the wild'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/

const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

//event listener
button.addEventListener('click',displayStats)
function displayStats(){
    
    const input = document.getElementById("input")
    const animal = input.options[input.selectedIndex].value
    let habit = 0, diet = 0, lifespan =''
    switch(animal){
        case 'Elephant':
            habit = 'Savannahs,forests,and grasslands of africa'
            diet = 'herbivorous,primarly feeding on grasses,leaves,fruits,and bark'
            lifespan = 'around 60 to 70 years'
            break
        case 'Tiger':
            habit = 'dense forests,mangrove swamps, and grasslands of India,Nepal,Bhutan,and Bangladesh'
            diet = ' carnivorous, preying on deer, wild boar, and other large mammals'
            lifespan = ' approximately 10 to 15 years in the wild'
            break
        case 'Blue Whale':
             habit = 'oceans worldwide, preferring deep, cold waters'
             diet = 'Filter feeder, consuming tiny shrimp-like animals called krill by gulping large amounts of water and then filtering out the krill'
             lifespan =' estimated to be around 70 to 90 years'
            break
        case 'Kangaroo':
            habit = 'arid and semi-arid regions of Australia'
            diet ='herbivorous, feeding on grasses, leaves, and shrubs'
            lifespan = 'Typically 6 to 8 years in the wild'
            break

    }
    let text = `The diverse Landscape of our palnet,has many creatures amoung that one of them is ${animal} has a habitat of ${habit}. Sustaining itself on a diet of ${diet} and with a average lifespan of ${lifespan}.`
    console.log(text)
    
    document.getElementById('result').innerHTML = text

}