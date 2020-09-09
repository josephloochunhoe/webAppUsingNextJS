import {gql} from 'apollo-boost'

const getPagesQuery = gql`
{
    Page {
        pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
        }
        media {
            id
            coverImage {
                extraLarge
                large
                medium
                color
            }
            title {
                romaji
                english
                native
                userPreferred
            }
            type
            popularity
            averageScore
        }
    } 
}
`

export {getPagesQuery}