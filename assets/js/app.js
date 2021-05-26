const app = new Vue({
    el: "#app",

    data: {
        currentWhiskeyPic: null,

        whiskeyPics: [
            "prisk_01",
            "prisk_02",
            "prisk_03"
        ],

        currentZeldaPic: null,

        zeldaPics: [
            "zelda_01",
            "zelda_02",
            "zelda_03"
        ]
    },

    methods: {
        /**
         * Update the pic of the given array
         * @param {array} array 
         */
        getRandomPhoto(array) {
            const randomNumber = Math.floor(Math.random() * array.length);

            if (array === this.whiskeyPics) {
                this.currentWhiskeyPic = array[randomNumber];
            } else {
                this.currentZeldaPic = array[randomNumber];
            }
        }
    },

    created() {
        const randomWhiskey = Math.floor(Math.random() * this.whiskeyPics.length);
        const randomZelda = Math.floor(Math.random() * this.zeldaPics.length);

        this.currentWhiskeyPic = this.whiskeyPics[randomWhiskey];
        this.currentZeldaPic = this.zeldaPics[randomZelda];
    }
});