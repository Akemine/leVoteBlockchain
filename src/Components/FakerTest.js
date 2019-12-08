import React from 'react';
//import { P } from 'react-bootstrap';
const faker = require('faker');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let jobTitle = faker.name.jobTitle();
let prefix = faker.name.prefix(); 
let suffix = faker.name.suffix();
let jobArea = faker.name.jobArea();

let phone = faker.phone.phoneNumber();

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Job area: ${jobArea}`);
console.log(`Phone: ${phone}`);

const Faker = (props) => {
    return( 
        <div className="container">
            <p> Coucou </p>
        </div>
        );
    };
    
    export default Faker;