app.component('review-list', {
    props: {
        reviews: {
            type: Function,
            required: true
        }
    },
    template:
        `<div class="review-container">
            <h3>Reviews: </h3>
            <ul>
                <li v-for="(review, index) of reviews()" :key="index">
                    {{ review.name }} gave this {{ review.rating }} stars
                    <br /> 
                    "{{ review.review }}"
                    <br /> 
                    Do I recommend this product? [{{ review.recommend }}]
                </li>
            </ul>
        </div>        
        `
});