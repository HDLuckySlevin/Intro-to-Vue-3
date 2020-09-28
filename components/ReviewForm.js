app.component('review-form', {
    template:
    /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <!-- modifier Typecasts the value as a numer -->
    <select id="rating" v-model="rating.number">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit">
  </form>`,
    data() {
        return {
            //die interaktiven Elemente haben "id's" die hier genutzt werden (v-model)
            //als 2 way binding
            name: '',
            review: '',
            rating: 0
        };
    },
    method: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            };
            this.$emit('review-submitted', productReview);

            this.name = "";
            this.review = "";
            this.rating = null;
        }
    }
});