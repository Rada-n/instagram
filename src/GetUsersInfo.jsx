import axios from 'axios';

export async function GetUsersInfo() {
    const urls = [
        'https://api.unsplash.com/photos/?client_id=ExLH7FGRTc2HlvIug7SvCFZRRkiDGRofwLKZb4E8aF0',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/comments',
        'https://67153c5933bc2bfe40b9dcc7.mockapi.io/users',
        "https://api.coverr.co/videos?api_key=2714c685922c7e69fc42df45e5d75e69"
    ]


    const dataPromises = urls.map((url, index) => axios.get(url, { params : index === 5 ? { urls : true } : {}})
        .then(response => response.data));
    const allData = await Promise.all(dataPromises);

    const [photos, posts, users, comments, followers, stories] = allData;
    const usersData = [];

    for (const user of users) {
      const usersPosts = posts.filter(post => post.userId === user.id);
      const followersData = followers.filter(follower => follower.id === user.id.toString());
      const storiesVideo = stories.hits[Math.floor(Math.random() * stories.hits.length)];

      const userInfo = {
        user : {
          ...user,
          followers: {
            count: followersData[0].followers,
            following: followersData[0].following,
          },
          stories: storiesVideo,
        },
        posts: usersPosts.map(post => {
          const postComments = comments.slice(0, Math.floor((Math.random() * 11) + 10)).filter(comment => comment.postId === post.userId)

          const randomPhoto = photos[Math.floor(Math.random() * photos.length)]

          return {
            post: {
              ...post,
              image: randomPhoto.urls,
              comments: postComments,
              likes: [],
            }
          }
        })
      }
      usersData.push(userInfo)
    }


    return usersData
}

