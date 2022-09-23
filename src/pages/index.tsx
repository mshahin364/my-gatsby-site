import * as React from "react"
import { graphql } from "gatsby"

type Props = {
  data: Queries.Query;
}

const IndexPage = (props: Props) => {
  return (
    <main>
      <ul>
        {
          props.data.allCitiesCsv?.edges.map(item =>
            <li key={item.node.title}>
              <h2>{item.node.title}</h2>
              <p>{item.node.subtitle}</p>
            </li>
          )
        }
      </ul>
    </main>
  )
}

export const pageQuery = graphql`
query {
  allCitiesCsv {
    edges {
      node {
        title,
        subtitle
      }
    }
  }
}
`


export default IndexPage