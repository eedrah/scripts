function sendMessage(message) {
  var input = document.querySelector('div[dir="ltr"]')
  input.innerText = message
  input.dispatchEvent(
    new InputEvent('input', {
      inputType: 'insertText',
      data: message,
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: 0,
    })
  )
  document.querySelector('button span[data-icon="send"]').click()
}

function sendMessageWithInterval(message, seconds) {
  const jitter = 0.2
  sendMessage(message)
  setInterval(
    () => sendMessage(message),
    seconds * 1000 * (1 + jitter - 2 * jitter * Math.random())
  )
}

function sendMessagesWithInterval(arrayOfMessages, seconds) {
  const jitter = 0.2
  arrayOfMessages.forEach((message, index) => {
    setTimeout(
      () => sendMessage(message),
      index * seconds * 1000 * (1 + jitter - 2 * jitter * Math.random())
    )
  })
}

//function sendMessageTo(person, message) {
//  const currentPerson = document.querySelector('header span[title]').title
//  const htmlPersonToSendTo = document.querySelector(`span[title="${person}"]`)
//  document.querySelector('input[title="Search or start new chat"]')
//}
