import { RefObject, useEffect } from "react"

type UseOutsideAlerterParamsType = {
  ref: RefObject<HTMLElement>
  callback: () => void
}

export const useOutsideAlerter = ({ ref, callback }: UseOutsideAlerterParamsType) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && event.target instanceof Node && !ref.current.contains(event?.target)) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}
