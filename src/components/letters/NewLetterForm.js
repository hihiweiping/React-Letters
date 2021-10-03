import { useRef } from "react"

import Card from "../ui/Card"
import classes from "./NewLetterForm.module.css"

function NewLetterForm(props) {
  const recipientInputRef = useRef()
  const imageInputRef = useRef()
  const senderInputRef = useRef()
  const textInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredRecipient = recipientInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredSender = senderInputRef.current.value
    const enteredText = textInputRef.current.value

    const letterData = {
      recipient: enteredRecipient,
      image: enteredImage,
      sender: enteredSender,
      text: enteredText,
    }

    props.onAddLetter(letterData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="recipient">Letter Recipient</label>
          <input type="text" required id="recipient" ref={recipientInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Letter Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="sender">Sender</label>
          <input type="text" required id="sender" ref={senderInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" required rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Letter</button>
        </div>
      </form>
    </Card>
  )
}

export default NewLetterForm
