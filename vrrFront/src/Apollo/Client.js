// https://www.apollographql.com/docs/react/migrating/boost-migration/#advanced-migration

import ApolloClient, { ApolloLink } from 'apollo-boost'
import { defaults, resolvers } from '../Apollo/LocalState'

export default new ApolloClient({
    // uri: 'http://13.124.58.19:4000/graphql',
    uri: 'http://127.0.0.1:4000/graphql',
    clientState: {
        defaults,
        resolvers
    },
    request: async operation => {
        const token = await localStorage.getItem('token')
        operation.setContext({
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }
})

// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { onError } from 'apollo-link-error';
// import { ApolloLink, Observable } from 'apollo-link';
// import { createUploadLink } from "apollo-upload-client";
// import { setContext } from 'apollo-link-context';
// import { withClientState } from 'apollo-link-state';

// // import { defaults, resolvers } from './LocalState'

// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem('token')
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : "",
//       }
//     }
// })

// // const requestLink = new ApolloLink((operation, forward) =>
// //   new Observable(observer => {
// //     let handle;
// //     Promise.resolve(operation)
// //       .then(oper => request(oper))
// //       .then(() => {
// //         handle = forward(operation).subscribe({
// //           next: observer.next.bind(observer),
// //           error: observer.error.bind(observer),
// //           complete: observer.complete.bind(observer),
// //         });
// //       })
// //       .catch(observer.error.bind(observer));

// //     return () => {
// //       if (handle) handle.unsubscribe();
// //     };
// //   })
// // );

// const cache = new InMemoryCache();
// const uploadLink = createUploadLink({ uri: "http://localhost:4000/graphql" });

// export default new ApolloClient({
//   link: ApolloLink.from([
//     uploadLink,
//     onError(({ graphQLErrors, networkError }) => {
//       if (graphQLErrors)
//         graphQLErrors.forEach(({ message, locations, path }) =>
//           console.log(
//             `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//           ),
//         );
//       if (networkError) console.log(`[Network error]: ${networkError}`);
//     }),
//     authLink.concat(
//         new HttpLink({
//             uri: 'http://localhost:4000/graphql',
//             credentials: 'same-origin'
//         })
//     ),
//     withClientState({
//         cache,
//         defaults: {
//             // Boolean(null) === false
//             isLoggedIn: Boolean(localStorage.getItem('token')) || false
//         },
//         resolvers: {
//             Mutation: {
//                 logUserIn: (_, {token}, {cache}) => {
//                     localStorage.setItem("token", token)
//                     cache.writeData({
//                         data: {
//                             isLoggedIn: true
//                         }
//                     })
//                     return null
//                 },
//                 logUserOut: (_, args, {cache}) => {
//                     localStorage.removeItem("token")
//                     window.location = "/"
//                     return null
//                 }
//             }
//         }
//     }),
//   ]),
//   cache
// });