export default function Post({post}) {
    return (
        <div className = "post">
            <h2>{post.title}</h2>
            <p>by {post.username}</p>

            <img src={post.images[0]} alt={post.title} />
            <p>Location: {post.location}</p>
            <p>Address: {post.address}</p>

            <h3>Likes picture here: {post.likes}</h3>
            <h3>Star icon here: {post.rating}</h3>
            <h3>Number reviews: {post.reviewCount}</h3>
            <h3>Saved by: {post.savedBy}</h3>
        </div>
    )
}

