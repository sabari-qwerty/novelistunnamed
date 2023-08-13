import axios from "axios";

const key = process.env.NEXT_PUBLIC_GRAPHCMS_ACCESS
const url = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

var headers = {
  'Content-Type': 'application/json',
  "access": key
}



export const getCatgary = (id: string, skip = 0) => {

  const data = JSON.stringify({
    query: `
        query categaries {
            categaries(where: {id: "${id}"}, skip: ${skip}) {
              id
              name
              slug
              posts {
                id
                title
                slug
                excerot
                featuredImages {
                  url
                }
              }
            }
          }`
  })


  const catgray = axios.post((url as string), data, { headers }).then(data => data).catch(err => err)

  return catgray
}

export const getSinglePost = (slug: string) => {

  const data = JSON.stringify({
    query: `
    query singlePost {
      posts(where: {slug: "${slug}"}) {
        authors {
          id
          name
          bio
          photo {
            url
          }
        }
        slug
        title
        featuredImages {
          url
        }
        content {
          html
        }
        connections {
          id
          name
          slug
          post {
            id
            slug
            title
            excerot
            featuredImages {
              url
            }
          }
        }
      }
    }
    `
  })

  const sinlges = axios.post((url as string), data, { headers }).then(data => data[ 'data' ][ 'data' ][ 'posts' ]).catch(err => err)


  return sinlges
}