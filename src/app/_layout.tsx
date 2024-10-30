import {Stack} from 'expo-router';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://radojewice.us-east-a.ibm.stepzen.net/api/wobbly-hamster/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 'apikey radojewice::local.net+1000::e19cf972c272627d299358904965786c1b5503e1f3c2518058012343a56ab9e7'
    },
});

const RootLayout = () => {
    return (
        <ApolloProvider client = {client}>
            <Stack />
        </ApolloProvider>
    );
};

export default RootLayout;