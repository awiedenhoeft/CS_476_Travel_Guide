import "../styles.css";

export default function Post({post}) {
    return (
        <div className = "post">
            <center>
                <h2 className="post-title">{post.title}</h2>

                <img src={post.images[0]} alt={post.title} className="post-image"/>

                <p>Location: {post.location}</p>
                <p>Address: {post.address}</p>

                <div className="post-info">
                    <h2>by {post.username}</h2>
                    <h3>Likes picture here: {post.likes}</h3>
                    <h3>Star icon here: {post.rating}</h3>
                    <h3>Number reviews: {post.reviewCount}</h3>
                    <h3>Saved by: {post.savedBy}</h3>
                </div>
            </center>


        </div>
    )
}

