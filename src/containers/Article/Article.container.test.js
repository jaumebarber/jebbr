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

      fireEvent.change(getByTestId('title'), {
        target: { value: 'New Article' }
      })

      fireEvent.change(getByTestId('body'), {
        target: { value: 'This is the body of the article' }
      })

      fireEvent.click(getByTestId('publishButton'))
    })

    it('clears the text fields', () => {
      expect(getByTestId('title').value).toEqual('')
      expect(getByTestId('body').value).toEqual('')
    })

    it('calls the sendHandler', () => {
      const mockArticle = {
        title: 'New Article',
        body: 'This is the body of the article'
      }
      expect(sendHandler).toHaveBeenCalledWith(mockArticle)
    })
  })
})
