import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const path = window.location.pathname

  const pathSplit = path.split('/search')[0]

  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    switch (pathSplit) {
      case '/admin/productlist':
      case `/admin/productlist/search/${keyword}`:
        if (keyword.trim()) {
          history.push(`/admin/productlist/search/${keyword}`)
        } else {
          history.push('/admin/productlist')
        }
        break
      default:
        if (keyword.trim()) {
          history.push(`/search/${keyword}`)
        } else {
          history.push('/')
        }
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={
          path === '/admin/userlist' ? 'Search Users...' : 'Search Products...'
        }
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
