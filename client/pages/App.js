import React, {Component} from 'react'
import {ApolloProvider} from 'react-apollo'
import {ApolloClient, InMemoryCache} from '@apollo/client'

// components
import PageList from './components/PageList'

// apollo client setup
const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
})

class App extends Component{
  render() {
    return (
      <ApolloProvider client={client}>
		<div class="main">
			<h1>Anime/Manga Search Engine</h1>
			<PageList />
		</div>
      </ApolloProvider>
    )
  }
}

export default App