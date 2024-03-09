import { ReactElement } from "react"

interface Props {
    before?: ReactElement,
    text: string,
    after?: ReactElement
}

export default function Item({before , text , after} : Props) {
  return (
    <span>
      {before? before : null}
      <span>{" " + text}</span>
      {after? after : null}
    </span>
  )
}
