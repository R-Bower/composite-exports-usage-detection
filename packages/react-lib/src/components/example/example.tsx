import {ReactElement} from "react"

export interface ExampleProps {
  value: string
}

export function Example({value}: ExampleProps): ReactElement {
  return <div>{value}</div>
}
