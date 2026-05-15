import ReviewForm from "../components/ReviewForm";

export default function ReviewPage() {
    const handle_review_form = async (data) => {
        console.log(data)
    };

    return (
        <>
            <div className="review_form">
                <ReviewForm onSubmit={handle_review_form} />
            </div>
            
        </>
    )
}