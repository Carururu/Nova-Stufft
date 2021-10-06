import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords}></meta>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Nova Stufft',
  description: 'We sell the best products for cheap',
  keywords: 'stuffed toys, buy stuffed toys, cheap stuffed toys',
}

export default Meta
