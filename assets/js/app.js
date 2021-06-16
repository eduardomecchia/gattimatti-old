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
            "prisk_28",
            "prisk_29",
            "prisk_30",
            "prisk_31",
            "prisk_32",
            "prisk_33",
            "prisk_34",
            "prisk_35",
            "prisk_36",
            "prisk_37",
            "prisk_38",
            "prisk_39",
            "prisk_40",
            "prisk_41"
        ],

        currentZeldaPic: null,

        zeldaPics: [
            "zelda_01",
            "zelda_02",
            "zelda_03",
            "zelda_04",
            "zelda_05",
            "zelda_06",
            "zelda_07",
            "zelda_08",
            "zelda_09",
            "zelda_10",
            "zelda_11",
            "zelda_12",
            "zelda_13",
            "zelda_14"
        ]
    },

    methods: {
        /**
         * Update the pic of the given array
         * @param {array} array 
         */
        getRandomPic(array) {
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