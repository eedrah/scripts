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
  sendMessage(message)
  setInterval(() => sendMessage(message), seconds * 1000)
}

function sendMessagesWithInterval(arrayOfMessages, seconds) {
  arrayOfMessages.forEach((message, index) => {
    setTimeout(() => sendMessage(message), index * seconds * 1000)
  })
}
