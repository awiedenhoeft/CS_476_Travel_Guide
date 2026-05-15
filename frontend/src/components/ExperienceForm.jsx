import { useState } from "react";
import "../styles.css"; 

export default function ExperienceForm( { onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            experience_title: formData.get("experience_title"),
            travel_style_tags: formData.getAll("travel_style_tags"),
            /* temp coordinates until Josh implements it*/
            coordinates: [44.56198548798089, -123.2823207472384],
            country: formData.get("country"),
            city: formData.get("city"),
            state: formData.get("state"),
            address: formData.get("address"),
            description: formData.get("description"),
            price: formData.get("price"),
            duration: formData.get("duration"),
            start_time: formData.get("start_time"),
            end_time: formData.get("end_time"),
            day_of_week: formData.get("day_of_week"),
            season: formData.get("season"),
            image: formData.get("image"),
        };
        onSubmit(data);
    }


    return <>
    <div>
        <form className="experience-form" onSubmit={handleSubmit}>
            <h1>Add New Experience</h1>

            <div>
                <label htmlFor="experience_title">Experience Name *</label> <br/>
                <input type="text" id="experience_title" name="experience_title" required></input><br/>
            </div>

            <div>
            <p>Travel Style Tags *</p>

            <label>
                <input type="checkbox" name="travel_style_tags" value="relaxation" />
                Relaxation
            </label>

            <label>
                <input type="checkbox" name="travel_style_tags" value="adventure" />
                Adventure
            </label>

            <label>
                <input type="checkbox" name="travel_style_tags" value="nature" />
                Nature
            </label>

            <label>
                <input type="checkbox" name="travel_style_tags" value="culture" />
                Culture
            </label>

            <label>
                <input type="checkbox" name="travel_style_tags" value="food" />
                Food
            </label>

            <label>
                <input type="checkbox" name="travel_style_tags" value="social" />
                Social
            </label>
            </div>
            <br/>

            <div>
                <label htmlFor="city">City</label> <br/>
                <input type="text" id="city" name="city" required></input><br/>
            </div>
    
            <div>
                <label htmlFor="state">State</label> <br/>
                <input type="text" id="state" name="state"></input><br/>
            </div>

            <div>
                <label htmlFor="country">Country</label> <br/>
                <input type="text" id="country" name="country" required></input><br/>
            </div>
            
            <div>
                <label htmlFor="address">Address</label> <br/>
                <input type="text" id="address" name="address"></input><br/>
            </div>

            <div>
                <label htmlFor="description">Describe your experience</label> <br/>
                <input type="text" id="description" name="description" required></input><br/>
            </div>          

            <div>
                <label>Price</label><br/>
                <select name="price" id="price">
                    <option value="price0">free</option>
                    <option value="price1">$</option>
                    <option value="price2">$$</option>
                    <option value="price3">$$$</option>
                    <option value="price4">$$$$</option>
                </select>
            </div>

            <div>
                <label htmlFor="duration">Duration</label><br/>
                <select name="duration" id="duration">
                    <option value="short">0-2 hours</option>
                    <option value="medium">2-6 hours</option>
                    <option value="long">6+ hours</option>
                </select>
            </div>

            <div>
            <label htmlFor="start_time">Start Time</label><br />
            <input type="time" id="start_time" name="start_time"/>
            <br/>
            <label htmlFor="end_time">End Time</label><br />
            <input type="time" id="end_time" name="end_time"/>
            </div>
            <br/>

            <div>
                <label htmlFor="day_of_week">Day of Week</label><br/>
                <select name="day_of_week" id="day_of_week">
                    <option value="mon">Monday</option>
                    <option value="tue">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thu">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Saturday</option>
                    <option value="sun">Sunday</option>
                </select>
            </div>

            <div>
                <label htmlFor="season">Season</label><br/>
                <select name="season" id="season">
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                </select>
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