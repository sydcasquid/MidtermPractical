// Now it's your turn to create a midterm project that shows your mastery of all of these concepts. 
//You will create a CRUD application. CRUD?

// Create an object and add the object to an array
// Read (display an object's data)
// Update (make a change to an object's data)
// Delete (remove an object from a list of objects)
// You will create a simple interface that allows you to Create Objects and add these objects to an 
//array, access a specific object and Read (display) the details, access a specific object and Update 
//the attributes, Delete a specific object from the array.

// We have created arrays of objects in class. For this midterm assessment project, create your own 
//object to reflect your own hobby or interest. You could choose sports, cookies, music, books, 
//movies, cars ...

// Add multiple such objects to an array. Keep the total of objects to 10 or less, so you can display 
//them easily on an associated web page. Keep your interface simple.


cookies = [
    {
        flavor: "Sugar Cookie",

    },
    {
        flavor: "Chocolate Chip",
    },
    {
        flavor: "Snickerdoodle",
    },
    {
        flavor: "White Chocolate Macadamia Nut",
    },
    {
        flavor: "M&Ms"
    }
];


//List - foreach
const listedCookies = () => {
    let cookieList = document.querySelector(".cookieListPara");
    let allCookiesList = `<ol>`;
    cookies.forEach((cookie) => {
        allCookiesList += `<li> ${cookie.flavor}</li>`;
    });
    allCookiesList += `</ol>`;

    cookieList.innerHTML = allCookiesList;


};



listedCookies();

const crudChosen = () => {
    let crud = document.querySelector("#crud").ariaValueMax;
    let cookieChosen;
    switch (crud) {
        case "1" :
            createCookie();
            break;
        case "2" :
            cookieInformation();
            break;
        case "3" :
            cookieChosen = findCookie();
            alert(cookieChosen);
            console.log(cookieChosen);
            updateCookie(cookieChosen);
            break;
        case "4" :
            cookieChosen = findCookie();
            deleteCookie(cookieChosen);
            break;
            
    }
};


//Might change, sort of place holders for now 

//push
const createCookie = () => {
    setCookieInformation(null);
    let newFlavor = prompt("What is the flavor of the cookie?");
    cookies.push({
        flavor: newFlavor,
    });
    cookieList();
    console.log(cookies);
};

const cookieInformation = () => {

};

const findCookie = () => {

};

//update, read - find
const updateCookie = () => {

};


//delete - loop to find index, splice
const deleteCookie = () => {

};