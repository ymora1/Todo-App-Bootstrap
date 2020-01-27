const fixHover = () => {
  const todos = document.querySelectorAll('.list-group-item')

  todos.forEach(todo => {
    todo.addEventListener('mouseover', () => {
      todo.classList.add('active')
    })
    todo.addEventListener('mouseleave', () => {
      todo.classList.remove('active')
    })
  })
}

fixHover()

const get = element => document.getElementById(element)

const newText = get('newText')
const newBtn = get('newBtn')
const pendingList = get('pendingList')
const completedList = get('completedList')

newBtn.addEventListener('click', () => {
  if (newText.value != '') {
    const newTodo = document.createElement('li')
    newTodo.classList.add('list-group-item')
    newTodo.innerHTML = newText.value
    newText.value = ''
    pendingList.appendChild(newTodo)
    fixHover()
  } else {
    alert('Please provide a Task to Add')
  }
})

newText.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    event.preventDefault()
    newBtn.click()
  }
})

const move = (element, destination) => {
  if (element.localName == 'li') {
    destination.appendChild(element)
    element.classList.remove('active')
  }
}

pendingList.addEventListener('click', event => {
  move(event.target, completedList)
})

completedList.addEventListener('click', event => {
  move(event.target, pendingList)
})
