
const heading=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hii,this is h1"),
        React.createElement("h2",{},"Hii ,this is h2")
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hii,this is h1"),
        React.createElement("h2",{},"Hii ,this is h2")  
    ])
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);