import { useState } from "react";
 
export default function ReviewForm( { onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            title: formData.get("title"),
            location: formData.get("location"),
            price: formData.get("price"),
            duration: formData.get("duration"),
            tags: formData.get("tags"),
            rating: formData.get("rating"),
            description: formData.get("description"),
            image: formData.get("image"),
        };
        onSubmit(data);
    }


    return <>
    <div>
        <form className="review-form" onSubmit={handleSubmit}>

            <div>
                <label htmlFor="title">Title</label> <br/>
                <input type="text" id="title" name="title"></input><br/>
            </div>

            <div>
                <label htmlFor="location">Location</label> <br/>
                <input type="text" id="location" name="location"></input><br/>
            </div>
        

            <div>
                <p>Price</p>

                <input type="radio" id="price1" name="price" value="1" defaultChecked></input>
                <label htmlFor="price1">$</label><br/>

                <input type="radio" id="price2" name="price" value="2"></input>
                <label htmlFor="price2">$$</label><br/>

                <input type="radio" id="price3" name="price" value="3"></input>
                <label htmlFor="price3">$$$</label><br/>

                <input type="radio" id="price4" name="price" value="4"></input>
                <label htmlFor="price4">$$$$</label><br/>
            </div>

            <div>
                <label htmlFor="duration">Duration</label><br/>
                <input type="text" id="duration" name="duration"></input><br/>
            </div>

            <div>
                <label htmlFor="tags">Tags</label><br/>
                <input type="text" id="tags" name="tags"></input><br/>
            </div>


            <div>
                <label htmlFor="rating">Rating</label><br/>
                <input type="text" id="rating" name="rating"></input><br/>
            </div>

            <div>
                <label htmlFor="description">Description: </label><br/>
                <input type="text" id="description" name="description"></input><br/>
            </div>

            <div>
                <label htmlFor="image">Link to image</label><br/>
                <input type="text" id="image" name="image"></input><br/>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>

        </form>

    </div>

    


    </>
}