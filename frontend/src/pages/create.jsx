export default function Create() {
    return <>
    <h1>Create Review</h1>
    <body>
        <form>
            <label for="title">Title</label> <br/>
            <input type="text"></input><br/>

            <label for="location">Location</label> <br/>
            <input type="text"></input><br/>
        
            <label for="price">Price</label><br/>
            <input type="radio" id="singles" name="singles" value="singles" checked/>
            <label for="singles">$</label><br/>
            <input type="radio" id="tens" name="tens" value="tens"/>
            <label for="tens">$$</label><br/>
            <input type="radio" id="hundreds" name="hundreds" value="hundreds"/>
            <label for="hundreds">$$$</label><br/>
            <input type="radio" id="thousands" name="thousdands" value="thousdands"/>
            <label for="thousands">$$$$</label><br/> 

            <label for="duration">Duration</label><br/>
            <input type="text"></input><br/>

            {/* look for ways to make the input seperatable based off spaces or if they can enter multiple tags at once */}
            <label for="tags">Tags</label><br/>
            <input type="text"></input><br/>

            {/* https://dev.to/alvaromontoro/single-html-element-star-rating-component-205l */}
            <label for="rating">Rating</label><br/>
            <input type="text"></input><br/>

            <label for="description">Description: </label><br/>
            <input type="text"></input><br/>

            <label for="image">Upload image</label><br/>
            <input type="image"></input><br/>
        </form>
    </body>

    </>
}