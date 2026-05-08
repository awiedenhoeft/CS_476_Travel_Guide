import experiences from "../../experiences"
import Post from "../components/Post"

export default function Home() {
    return (
        <div className="home">
            {experiences.map((exp) => (
                <Post key={exp.id} post={exp} />
            ))}
        </div>
    );
}