import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Editor from './Editor'

describe('Editor component', () => {
  let getByTestId

  afterEach(cleanup)

  describe('on publish button click', () => {
    let sendHandler
    beforeEach(() => {
      sendHandler = jest.fn()
      ;({ getByTestId } = render(<Editor onSend={sendHandler} />))

      fireEvent.change(getByTestId('editorTitle'), {
        target: { value: 'New Article' },
      })

      fireEvent.change(getByTestId('editorText'), {
        target: { value: 'This is the body of the article' },
      })

      fireEvent.click(getByTestId('publishButton'))
    })

    it('clears the text fields', () => {
      expect(getByTestId('editorTitle').value).toEqual('')
      expect(getByTestId('editorText').value).toEqual('')
    })

    it('calls the sendHandler', () => {
      const mockEditor = {
        editorTitle: 'New Article',
        editorText: 'This is the body of the article',
      }
      expect(sendHandler).toHaveBeenCalledWith(mockEditor)
    })
  })
})
