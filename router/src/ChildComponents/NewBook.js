import React from 'react'
import { useOutlet, useOutletContext } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

function NewBook() {
   const {testContext}= useOutletContext()
  //  console.log("context",test)

  return (
    <div>
        New Book
     {` This is New Book .....${testContext}`}
    </div>
  )
}

export default NewBook
