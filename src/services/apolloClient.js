import { ApolloClient, InMemoryCache } from "@apollo/client"

export const graphQlClient = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
})
