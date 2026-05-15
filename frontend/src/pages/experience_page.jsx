import ExperienceForm from "../components/ExperienceForm";

export default function ExperiencePage() {
    const handleExperiencePage = async (data) => {
        console.log(data)
    };

    return (
        <>
            <div className="experience_form">
                <ExperienceForm onSubmit={handleExperiencePage} />
            </div>
            
        </>
    )
}