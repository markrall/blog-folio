import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
        query SITEMETADATA_QUERY {
            site {
              siteMetadata {
                title
                description
                tagline
              }
            }
          }
        `
    );
    return site.siteMetadata;
};