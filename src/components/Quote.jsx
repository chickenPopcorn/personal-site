import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Quote = styled.blockquote`
  ${tw`text-1xl lg:text-2xl font-serif text-white mb-6`};
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`

const Cite = styled.cite`
  ${tw`text-1xl lg:text-xl font-serif text-white mb-6`};
  float: right;
  padding-right: 1.5em;
`

const Blockquote = ({ quote, cite }) => (
  <div>
    <Quote>{quote}</Quote>
    <Cite>- {cite}</Cite>
  </div>
)

export default Blockquote

Blockquote.propTypes = {
  quote: PropTypes.string.isRequired,
  cite: PropTypes.string.isRequired,
}
