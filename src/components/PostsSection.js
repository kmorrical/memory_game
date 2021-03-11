import PostsCol from './PostsCol'

export const PostsSection = props => {
  const { myPosts, userPosts, loading, error } = props
  return (
    <div className='posts-holder'>
      <PostsCol
        posts={myPosts}
        postsTitle={'My Posts'}
        loading={loading}
        error={error}
      ></PostsCol>
      <PostsCol
        posts={userPosts}
        postsTitle={'User Posts'}
        loading={loading}
        error={error}
      ></PostsCol>
    </div>
  )
}

export default PostsSection
