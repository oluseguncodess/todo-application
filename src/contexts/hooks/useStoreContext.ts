import { useContext } from "react"
import { Storecontext } from "../store"

export function useStoreContext() {
  const context  = useContext(Storecontext)
  if(context === undefined) {
    throw new Error('Theme context has to be used in a provider')
  }
  return context
}