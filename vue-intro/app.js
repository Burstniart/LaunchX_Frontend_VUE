const app = Vue.createApp ({
    data() {
        return {
            photo: 'http://pm1.narvii.com/6688/7ab5321cd10310e3f474615144f8a8f53e7928be_00.jpg',
            fname: 'Monika',
            lname: 'Garcia',
            email: 'mon1k@gmail.com',
            gender: 'female'
        }
    },
    methods: {
        async changeUser() {
            const res = await fetch('https://randomuser.me/api/');
            const { results } = await res.json();

            console.log(results);

            this.photo = results[0].picture.large;
            this.fname = results[0].name.first;
            this.lname = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
        }
    }
})

app.mount('#app');