"use client"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { system } from "@/theme/theme"

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      {props.children}
    </ChakraProvider>
  )
}
