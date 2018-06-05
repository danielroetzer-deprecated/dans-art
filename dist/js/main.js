var paintings = [
    {
        "title": "Sunrise",
        "path": "painting1.png",
        "colors": ["black"]
    }, {
        "title": "Cold Winter",
        "path": "painting2.png",
        "colors": ["yellow"]
    }, {
        "title": "Aurora",
        "path": "painting3.jpg",
        "colors": ["blue", "yellow"]
    }, {
        "title": "Mighty Mountains",
        "path": "painting4.jpg",
        "colors": ["green"]
    }
];

var colors = [
    {color: "green", id: "check-green", name: "Green"},
    {color: "yellow", id: "check-yellow", name: "Yellow"},
    {color: "blue", id: "check-blue", name: "Blue"},
    {color: "black", id: "check-black", name: "Black"}
]


var myPaintings = new Vue({
    el: "#paintings",
    data: function () {
        return {
            paintings: paintings,
            searchColor: "",
            colors: colors,
            checked: []
        }
    },
    methods: {
        filterByColor: function (color) {
            myPaintings.checked = []
            myPaintings.paintings = paintings.filter(function (p) {
                for(var x=0; x<Object.keys(p.colors).length; x++) {
                    if(p.colors[x].match(color.toLowerCase())) {
                        return p.colors[x]
                    }
                }
            })
        },
        showAll: function () {
            myPaintings.paintings = paintings
            myPaintings.checked = []
        },
        checkboxClicked: function () {

            if(myPaintings.checked.length > 0) {
                filterPaintings(myPaintings.checked)
            } else {
                myPaintings.paintings = paintings
            }
        },
        resetSelection: function () {
            myPaintings.paintings = paintings
            myPaintings.checked = []
            searchColor = ""
        }
    }
})

function filterPaintings(selected) {
    myPaintings.paintings = paintings.filter(function (p) {
        for(var x=0; x<Object.keys(p.colors).length; x++) {
            for (var i=0; i<selected.length; i++) {
                if(p.colors[x].match(selected[i].toLowerCase())) {
                    return p.colors[x]
                }
            }
        }
    })
}

/*
function selectedColors() {
    var array = new Array()
    var counter = 0

    Object.keys(myPaintings.checkboxes).forEach(function (color) {
        console.log(color)
        if(myPaintings.checkboxes[color] === true) {
            array.push(color)
            counter++
        }
    })

    return (counter !== 0) ? array : -1
}*/
