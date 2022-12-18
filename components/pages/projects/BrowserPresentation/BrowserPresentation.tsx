import BrowserMock from "../../../BrowserMock/BrowserMock"
import Button from "../../../Button/Button"
import VStack from "../../../Stack/VStack"
import Text from "../../../Text/Text"

interface Props {
  title: string
  tech: string
  operator: string
  result: string
  source: string
}

export default function BrowserPresentation(props: Props) {
  const { tech, title, operator, result, source } = props

  return (
    <VStack spacing={40} padding={[0, 16]}>
      <Text variant="hero-heading">{title}</Text>
      <BrowserMock>
        <VStack padding={[80, 0]} spacing={80}>
          <VStack spacing={10}>
            <Text variant="hero-heading">{tech}</Text>
            <Text variant="hero-heading">{operator}</Text>
            <Text variant="code-heading">{result}</Text>
          </VStack>
          <Button action={source} trailing="github" variant="primary">
            Show on GitHub
          </Button>
        </VStack>
      </BrowserMock>
    </VStack>
  )
}
