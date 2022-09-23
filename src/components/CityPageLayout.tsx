import * as React from 'react';
import { graphql, PageProps } from "gatsby";

export type CityPageLayoutContext = {
    routeName: string;
}

type Props = PageProps<Queries.Query, CityPageLayoutContext>

export const CityPageLayout: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <main>
            <h1>{props.data.citiesCsv?.title}</h1>
            <p>{props.data.citiesCsv?.text}</p>
        </main>
    )
}

export const pageQuery = graphql`
query CityPageLayoutQuery($routeName: String) {
    citiesCsv(route: {eq: $routeName}) {    
        id
        route
        title
        subtitle
        text
    }
}
`