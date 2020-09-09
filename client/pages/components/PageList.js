import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import {getPagesQuery} from '../queries/queries'

class PageList extends Component{
    displayPages() {
        var data = this.props.data
        if(data.loading) {
            return (<div>Loading Anime/Manga Information...</div>)
        }
        else {
            return data.Page.media.map(media => {
            return (<div key={media.id}><img src={media.coverImage.large}></img>
                                    <h3>Title: {media.title.romaji}</h3>
                                    <h3>Type: {media.type}</h3>
                                    <h3>Popularity: {media.popularity}</h3>
                                    <h3>Average Score: {media.averageScore}</h3>
                    </div>)})
        }
    }
    render() {
        console.log(this.props)
    return (
        <div>
            <ul id="page-list">
                {this.displayPages()}
            </ul>
        </div>
    );
    }
}

export default graphql(getPagesQuery)(PageList);