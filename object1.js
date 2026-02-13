const student = {
    name: 'Sakib Khan',
    id: 121,
    add: 'Movie star',
    isSingle: true,
    friends: ['Apu','Raaz','Salman','amir'],
    movies: [{name: 'no 1', year: 2015},{name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting like sakib khan');
    },
    car: {
        brand: 'Tesla',
        price: 500000000,
        made: 2025,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Musk',
            country: 'USA'
        }
    }
}

console.log(student.car.price);
console.log(student.act);
student.act();


