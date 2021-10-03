import { useState, useEffect } from "react"

import LetterList from "../components/letters/LetterList"
import {API_FETCH_DATA} from "../global/constants"

function AllLettersPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedLetters, setLoadedLetters] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(API_FETCH_DATA)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const letters = []

        for (const key in data) {
          const letter = {
            id: key,
            ...data[key],
          }

          letters.push(letter)
        }

        setIsLoading(false)
        setLoadedLetters(letters)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Letters</h1>
      <LetterList letters={loadedLetters} />
    </section>
  )
}

export default AllLettersPage
