import { useState } from "react";
import "../styles.css"; 

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
            <h1>Create Review</h1>

            <div>
                <label htmlFor="title">Title</label> <br/>
                <input type="text" id="title" name="title"></input><br/>
            </div>

            <div>
                <label htmlFor="location">Location</label> <br/>
                <input type="text" id="location" name="location"></input><br/>
            </div>
        

            <div>
                <label>Price</label><br/>
                <select name="price" id="price">
                    <option value="price1">$</option>
                    <option value="price2">$$</option>
                    <option value="price3">$$$</option>
                    <option value="price4">$$$$</option>
                </select>

            </div>

            <div>
                <label htmlFor="duration">Duration</label><br/>
                <select name="duration" id="duration">
                    <option value="day">One day</option>
                    <option value="week">Week</option>
                </select>
            </div>

            <div>
                <label htmlFor="tags">Tags</label><br/>
                <input type="text" id="tags" name="tags"></input><br/>
            </div>


            <div>
                <label htmlFor="rating">Rating</label><br/>
                <input type="text" id="rating" name="rating" required></input><br/>
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