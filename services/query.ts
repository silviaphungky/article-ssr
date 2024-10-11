import gql from 'graphql-tag'

export const ArticlesGql = {
  getList: gql`
    query articles($page: Int, $limit: Int) {
      articles(page: $page, limit: $limit) {
        id
        title
        slug
        image
      }
    }
  `,
  // getPokemonDetail: gql`
  //   query pokemon($name: String!) {
  //     pokemon(name: $name) {
  //       id
  //       name
  //       sprites {
  //         front_default
  //       }
  //       moves {
  //         move {
  //           name
  //         }
  //       }
  //       types {
  //         type {
  //           name
  //         }
  //       }
  //     }
  //   }
  // `
}

// export default ArticlesGql