import { ReactElement } from "react"

export function ListItem({ before, text, after }: { before?: ReactElement, text: string, after?: ReactElement }) {
  return (
    <span>
      {before ? before : null}
      <span>{" " + text}</span>
      {after ? after : null}
    </span>
  )
}
