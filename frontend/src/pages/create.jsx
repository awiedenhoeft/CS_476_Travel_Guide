import ReviewForm from "../components/ReviewForm";

export default function Create() {
    const handleCreate = async (data) => {
        console.log(data)
    };

    return (
        <>
            <div className="create">
                <ReviewForm onSubmit={handleCreate} />
            </div>
            
        </>
    )
}