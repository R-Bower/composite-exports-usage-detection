import {ReactElement} from "react"

export interface Example1Props {
  value: number
}

export function Example1({value}: Example1Props): ReactElement {
  return <div>{value}</div>
}
