import { useRef, useState } from "preact/hooks"

interface Props {
  timeClearMessage?: number
}

export const useHelpersForm = ({ timeClearMessage = 5000 }: Props) => {
	const [isLoading, setIsLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

  const timer = useRef<number>()

  const onChangeIsLoading = (value: boolean) => {
    setIsLoading(value)
  }

  const onChangeMessageError = (message: string) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      setErrorMessage('')
    }, timeClearMessage)
    
    setErrorMessage(message)
  }

  return {
    isLoading,
    errorMessage,

    onChangeIsLoading,
    onChangeMessageError,  
  }
}
