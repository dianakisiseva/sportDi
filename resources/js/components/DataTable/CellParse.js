import parse from 'html-react-parser'

const CellParse = ({ value = '' }) => {
  if (typeof value === 'string') {
    return parse(value)
  }

  return value
}

export default CellParse
