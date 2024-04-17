interface ITextProps {
  textValue: string
}

const Text: React.FC<ITextProps> = ({ textValue = '' }) => {
  return <p>{textValue}</p>
}

export default Text
