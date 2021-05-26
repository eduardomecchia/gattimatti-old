const app = new Vue({
    el: "#app",

    data: {
        currentWhiskeyPic: null,

        whiskeyPics: [
            "prisk_01",
            "prisk_02",
            "prisk_03",
            "prisk_04",
            "prisk_05",
            "prisk_06",
            "prisk_07",
            "prisk_08",
            "prisk_09",
            "prisk_10",
            "prisk_11",
            "prisk_12",
            "prisk_13",
            "prisk_14",
            "prisk_15",
            "prisk_16",
            "prisk_17",
            "prisk_18",
            "prisk_19",
            "prisk_20",
            "prisk_21",
            "prisk_22",
            "prisk_23",
            "prisk_24",
            "prisk_25",
            "prisk_26",
            "prisk_27",
            "prisk_28"
        ],

        currentZeldaPic: null,

        zeldaPics: [
            "zelda_01",
            "zelda_02",
            "zelda_03"
        ],

        currentPallinoPic: null,

        pallinoPics: [
            "pallino_01",
            "pallino_02",
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
            } else if (array === this.zeldaPics) {
                this.currentZeldaPic = array[randomNumber];
            } else {
                this.currentPallinoPic = array[randomNumber];
            }
        }
    },

    created() {
        const randomWhiskey = Math.floor(Math.random() * this.whiskeyPics.length);
        const randomZelda = Math.floor(Math.random() * this.zeldaPics.length);
        const randomPallino = Math.floor(Math.random() * this.pallinoPics.length);

        this.currentWhiskeyPic = this.whiskeyPics[randomWhiskey];
        this.currentZeldaPic = this.zeldaPics[randomZelda];
        this.currentPallinoPic = this.pallinoPics[randomPallino];
    }
});