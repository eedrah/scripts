class MM {
  constructor(arrayOfMessages) {
    this.jitter = 0.2
    this.interval = 5
    if(arrayOfMessages) this.arrayOfMessages = arrayOfMessages
    return this
  }

  withJitter(jitter) {
    this.jitter = jitter
    return this
  }
  withInterval(seconds) {
    this.interval = seconds
    return this
  }
  withMessages(arrayOfMessages) {
    this.arrayOfMessages = arrayOfMessages
    return this
  }

  push(arrayOfMessages) {
    this.arrayOfMessages.push(arrayOfMessages)
    return this
  }
  shift(arrayOfMessages) {
    this.arrayOfMessages.shift(arrayOfMessages)
    return this
  }
  popCount(count) {
    this.arrayOfMessages = this.arrayOfMessages.slice(0, -count)
    return this
  }
  unshiftCount(count) {
    this.arrayOfMessages = this.arrayOfMessages.slice(count)
    return this
  }

  start() {
    MM.sendMessage(this.arrayOfMessages.shift())
    if(this.arrayOfMessages.length) {
      this.timeout = setTimeout(this.start.bind(this), this.interval * 1000 * (1 + this.jitter - 2 * this.jitter * Math.random()))
    }
    return this
  }
  stop() {
    clearTimeout(this.timeout)
    this.timeout = 0
    return this
  }

  preview() {
    return this.arrayOfMessages
  }

  static sendMessage(message) {
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

  static sendMessageWithInterval(message, seconds) {
    const jitter = 0.2
    const loop = () => {
      sendMessage(message)
      setTimeout(loop, seconds * 1000 * (1 + jitter - 2 * jitter * Math.random()))
    }
  }

  static sendMessagesWithInterval(arrayOfMessages, seconds) {
    const jitter = 0.2
    arrayOfMessages.forEach((message, index) => {
      setTimeout(
        () => sendMessage(message),
        index === 0
          ? 0
          : seconds * 1000 * (index + jitter - 2 * jitter * Math.random())
      )
    })
  }
}

//function sendMessageTo(person, message) {
//  const currentPerson = document.querySelector('header span[title]').title
//  const htmlPersonToSendTo = document.querySelector(`span[title="${person}"]`)
//  document.querySelector('input[title="Search or start new chat"]')
//}
