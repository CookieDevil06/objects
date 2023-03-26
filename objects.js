const cars = {
    "name" : "Cars",
    "year" : 2006,
    "director" : "John Lasseter",
    "image" : '<img src="https://static.wikia.nocookie.net/international-entertainment-project/images/0/00/Cars_-_poster.jpg/revision/latest?cb=20220522073408" alt="Cars" height="400">'
};

const bolt = {
    "name" : "Bolt",
    "year" : 2008,
    "director" : "Chris Williams and Byron Howard",
    "image" : '<img src="https://lumiere-a.akamaihd.net/v1/images/p_bolt_19881_2a6c5fc2.jpeg" alt="Bolt" height="400">'
};

const totoro = {
    "name" : "My Neighbor Totoro",
    "year" : 1988,
    "director" : "Hayao Miyazaki",
    "image" : '<img src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421561226/my-neighbor-totoro-picture-book-new-edition-9781421561226_hr.jpg" alt="Totoro" height="400">'
};

let carsListItem = document.createElement("li");
carsListItem.innerHTML = "Name: " + cars.name + "<br/>Year: " + cars.year + "<br/>Director: " + cars.director + "<br/>" + cars.image;

let orderedList = document.querySelector("ol");

orderedList.appendChild(carsListItem);

let boltListItem = document.createElement("li");
boltListItem.innerHTML = "Name: " + bolt.name + "<br/>Year: " + bolt.year + "<br/>Director: " + bolt.director + "<br/>" + bolt.image;

orderedList.appendChild(boltListItem);

let totoroListItem = document.createElement("li");
totoroListItem.innerHTML = "Name: " + totoro.name + "<br/>Year: " + totoro.year + "<br/>Director: " + totoro.director + "<br/>" + totoro.image;

orderedList.appendChild(totoroListItem);