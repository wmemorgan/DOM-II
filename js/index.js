
//==== Create Unique Event Listeners
// mouseover & mouseleave
document.querySelectorAll('h1, h2, h4')
  .forEach(elem => {
    elem.addEventListener('mouseover', event => event.target.style.transform = 'scale(2)')
    console.log(`mouseover event on ${elem}`)
    elem.addEventListener('mouseleave', event => event.target.style.transform = 'scale(1)')
    console.log(`mouseover event on ${elem}`)
  })

// keydown
document.querySelector('html').addEventListener('keydown', event => {
  console.log(`Key press`)
  event.target.style.backgroundColor = 'blue'
})

// wheel
document.querySelector('html').addEventListener('wheel', event => {
  console.log(`Using the wheel`)
  event.target.style.backgroundColor = 'green'
})
//stop propagation
document.querySelector('header').addEventListener('wheel', event => event.stopPropagation())
document.querySelector('.home').addEventListener('wheel', event => event.stopPropagation())

// drag / drop
//code is based on article by Kirupa: https://www.kirupa.com/html5/drag.htm
const dragStart = (event) => {
  initialX = event.clientX - xOffset
  initialY = event.clientY - yOffset

  if (event.target) {
    active = true
  }
}

const drop = () =>{
  initialX = currentX
  initialY = currentY

  active = false
}

const drag = (event) => {
  if (active) {

    event.preventDefault()

    currentX = event.clientX - initialX
    currentY = event.clientY - initialY

    xOffset = currentX
    yOffset = currentY

    setTranslate(currentX, currentY, event.target)
  }
}

const setTranslate = (xPos, yPos, elem) => {
  elem.style.transform = `translate3d(${xPos}px,  ${yPos}px, 0)`
}


document.querySelectorAll('img').forEach(elem => {
  elem.draggable = true
  elem.ondragstart = dragStart
})

const dropZone = document.querySelector('.home')

let active = false
let currentX
let currentY
let initialX
let initialY
let xOffset = 0
let yOffset = 0

dropZone.ondragover = drag
dropZone.ondrop = drop


// load
window.addEventListener('load', () => {
  console.log(`site loaded!`)
  document.querySelectorAll('h1, h2, h4').forEach(elem => {
    elem.textContent = `site loaded!`
  })
})

// focus & blue
window.addEventListener('focus', () => {
  console.log('FOCUS')
  document.querySelector('.intro h2').textContent = `FOCUS`
})

window.addEventListener('blur', () => {
  console.log('LOST FOCUS')
  document.querySelector('.intro h2').textContent = "LOST FOCUS"
})

// resize
window.addEventListener('resize', () => {
  alert(`Page reset`)
  location.reload()
})

// scroll
window.addEventListener('scroll', (event) => {
  console.log(`Scroll event: ${event}`)
  
  document.querySelectorAll('p').forEach(elem => {
    elem.style.opacity = 0.3
  })
})

// select
// code based on MDN example: https://developer.mozilla.org/en-US/docs/Web/Events/select#Example
const input = document.createElement('input')
input.value = `Select some text in this element.`
input.setAttribute(
  `style`,
  `
    display: block;
    width: 30%;
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 1.5rem;
    text-align: center;
    `
)
document.querySelector('footer').prepend(input)

input.addEventListener('select', () => {
  let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)
  console.log(`${selection}`)
  const selectedText = document.createElement('p')
  selectedText.textContent = `You selected: ${selection}`
  document.querySelector('footer').prepend(selectedText)
})

//stop propagation of wheel event
input.addEventListener('wheel', event => event.stopPropagation())

// dblclick
document.querySelectorAll('.btn ').forEach(elem => {
  elem.addEventListener('dblclick', (event) => {
    console.log(`Double-click event is: ${JSON.stringify(event.isTrusted)}`)
    event.target.style.color = 'red'
    event.target.style.backgroundColor = 'white'
    event.target.textContent = 'Double-Clicked!'
  })
})

//preventDefault()
const homeLink = document.querySelector('.nav-link:first-child')
homeLink.href = '/'
homeLink.addEventListener('click', event => event.preventDefault())
