/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: function(){ alert("Beep") }
        }
    }
}



/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.
house.areas.livingRoom.items.push('dining table');

// (2) Add a stove to the kitchen.
house.areas.kitchen.items.push('stove');

// (3) Remove the washing machine from bedroomOne.

let items = house.areas.bedroomOne.items;
let newArray = [];

for (let i = 0; i < items.length; i++) {
  if (items[i] !== 'washing machine') {
    newArray.push(items[i]);
  }
}

house.areas.bedroomOne.items = newArray;

// (4) Change the color of the car to blue.
house.garage.car.color = 'blue';

// (5) Add a another car to the garage with a honk function.
house.garage.car2 = {
    color: 'green',
    wheels: 4,
    honk: function() {
      alert('Beep beep');
    }
  };
  
// (6) Make the new car honk.
house.garage.car2.honk = function() {
    console.log('Beep beep');
  };
  
// (7) If the house has a garden, console.log the name of the flower.
if (house.garden[0]) {
    console.log(house.garden[1]);
  }

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function
let brokenChairIndex = house.areas.kitchen.items.indexOf('broken chair');

if (brokenChairIndex !== -1) {
    house.areas.kitchen.items[brokenChairIndex] = 'broken chair'.replace('broken', 'new');
  }

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.
let numberOfAreas = Object.keys(house.areas).length;
console.log(numberOfAreas);

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.
let totalBeds = 0;

Object.values(house.areas).forEach(area => {
  if (Array.isArray(area.items)) {
    area.items.forEach(item => {
      if (item === 'bed') {
        totalBeds++;
      }
    });
  }
});

console.log(totalBeds);
