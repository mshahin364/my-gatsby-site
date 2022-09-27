import * as React from "react";
import { graphql, Link } from "gatsby";
import { PageFooter } from "../components/PageFooter";

type Props = {
  data: Queries.Query;
};

const IndexPage = (props: Props) => {
  return (
    <main>
      <nav>
        {
          props.data.allCitiesCsv?.edges.map(item =>
            <Link key={item.node.title} to={item.node.route!}>
              <h2>{item.node.title}</h2>
              <p>{item.node.subtitle}</p>
            </Link>
          )
        }
      </nav>
      <PageFooter />
    </main>
  );
};

export const pageQuery = graphql`
query {
  allCitiesCsv {
    edges {
      node {
        route
        title
        subtitle
      }
    }
  }
}
`;


export default IndexPage;