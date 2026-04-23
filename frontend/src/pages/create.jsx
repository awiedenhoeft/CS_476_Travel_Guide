import ReviewForm from "../components/ReviewForm";

export default function Create() {
    const handleCreate = async (data) => {
        console.log(data)
    };

    return (
        <>
            <h1>Create Review</h1>
            <ReviewForm onSubmit={handleCreate} />
        </>
    )
}