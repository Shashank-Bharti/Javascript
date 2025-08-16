//                            Javascript B.O.M

//                                 Window
//                                   |
//     ----------------------------------------------------------
//     |             |              |             |            |
//  Document      History        Screen      Navigator      Location

// Window Object
window.alert("Hello There")
console.log(window.innerWidth);

// Navigator 
console.log(navigator.userAgent);
console.log(navigator.language);

// Location
console.log(location.href);
// location.href = "https://www.google.com"
console.log(location.protocol);
console.log(location.pathname);
console.log(location.hostname);

// Screen
console.log(screen.width);
console.log(screen.height);

//History
// history.back()
// history.forward()

// Using resize To to open popup
let newWindow = window.open("https://www.example.com/", "NewWindow", "width=500,height=500");
newWindow.resizeTo(300, 300);