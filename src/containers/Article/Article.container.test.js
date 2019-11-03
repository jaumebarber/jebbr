import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Article from './Article.container'

describe('An Article', () => {
  let getByTestId

  afterEach(cleanup)

  describe('on publish button click', () => {
    let sendHandler
    beforeEach(() => {
      sendHandler = jest.fn()
      ;({ getByTestId } = render(<Article onSend={sendHandler} />))

      fireEvent.change(getByTestId('articleTitle'), {
        target: { value: 'New Article' }
      })

      fireEvent.change(getByTestId('articleText'), {
        target: { value: 'This is the body of the article' }
      })

      fireEvent.click(getByTestId('publishButton'))
    })

    it('clears the text fields', () => {
      expect(getByTestId('articleTitle').value).toEqual('')
      expect(getByTestId('articleText').value).toEqual('')
    })

    it('calls the sendHandler', () => {
      const mockEditor = {
        articleTitle: 'New Article',
        articleText: 'This is the body of the article'
      }
      expect(sendHandler).toHaveBeenCalledWith(mockEditor)
    })
  })
})
