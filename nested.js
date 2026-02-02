const college={
    name: 'vnc',
    class: ['10','11'],
    events: ['science fair','bijoy dibosh'],
    unique: {
        color: 'Blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

college.events[1]='16 december';

console.log(college.unique.result.merit)
console.log(college.events[1])

delete college.class;
console.log(college)