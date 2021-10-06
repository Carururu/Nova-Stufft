import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='me-2 ms-lg-5 d-inline-block'
        style={{ width: 'auto' }}
      ></Form.Control>
      <Button type='submit' variant='success' style={{ padding: '6' }}>
        <i className='fas fa-search'></i>
      </Button>
    </Form>
  )
}

export default SearchBox
