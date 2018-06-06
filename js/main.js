var paintings = [
    /*{
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
        "colors": ["green"],
        "tags": []
    },*/ {
        "title": "Forest Light Rays",
        "path": "forest_light-rays.jpg",
        "colors": ["green", "yellow", "blue", "brown"],
        "date": "05-05-2018",
        "tags": []
    }, {
        "title": "Frosty Sunrise",
        "path": "frosty-sunrise.jpg",
        "colors": ["red", "orange", "yellow", "black", "white", "lavender"],
        "tags": []
    }, {
        "title": "Calm Winter",
        "path": "calm-winter.jpg",
        "colors": ["blue", "white", "brown"],
        "tags": []
    }, {
        "title": "Warm Seascape",
        "path": "warm-seascape.jpg",
        "colors": ["green", "blue", "red", "lavender"],
        "tags": []
    }, {
        "title": "Sunset Mountains",
        "path": "sunset-mountains.jpg",
        "colors": ["red", "yellow", "lavender"],
        "tags": []
    }, {
        "title": "Cold Mountain",
        "path": "cold-mountain.jpg",
        "colors": ["green", "white", "black", "brown", "blue"],
        "tags": []
    }, {
        "title": "Bridge Reflections",
        "path": "bridge-reflections.jpg",
        "colors": ["green", "red", "orange", "yellow", "lavender", "blue", "brown"],
        "tags": []
    }, {
        "title": "Vivid Colours",
        "path": "vivid-colours.jpg",
        "colors": ["green", "brown", "red", "yellow", "blue", "lavender"],
        "tags": []
    }, {
        "title": "Waterfall",
        "path": "waterfall.jpg",
        "colors": ["green", "blue", "red"],
        "tags": []
    }
];

var colors = [
    {color: "green", id: "check-green", name: "Green"},
    {color: "yellow", id: "check-yellow", name: "Yellow"},
    {color: "blue", id: "check-blue", name: "Blue"},
    {color: "orange", id: "check-orange", name: "Orange"},
    {color: "red", id: "check-red", name: "Red"},
    {color: "lavender", id: "check-lavender", name: "Lavender"},
    {color: "brown", id: "check-brown", name: "Brown"},
    {color: "white", id: "check-white", name: "White"},
    {color: "black", id: "check-black", name: "Black"}
]



var myPaintings = new Vue({
    el: "#paintings",
    data: function () {
        return {
            paintings: paintings,
            previews: paintings,
            searchColor: "",
            colors: colors,
            gridActive: false,
            amount: Object.keys(paintings).length,
            checked: []
        }
    },
    methods: {
        filterByColor: function (color) {
            myPaintings.paintings = paintings.filter(function (p) {
                for(var x=0; x<Object.keys(p.colors).length; x++) {
                    if(p.colors[x].match(color.toLowerCase())) {
                        return p.colors[x]
                    }
                }
            })
            finalAction(false, true)
        },
        showAll: function () {
            myPaintings.paintings = paintings
            finalAction(true, true)
        },
        checkboxClicked: function () {

            if(myPaintings.checked.length > 0) {
                filterPaintings(myPaintings.checked)
            } else {
                myPaintings.paintings = paintings
            }
            finalAction(true, false)
        },
        resetSelection: function () {
            myPaintings.paintings = paintings
            finalAction(true, true);
        },
        changeView(type) {
            if(type === "grid"){
                myPaintings.gridActive = true
            }else if(type === "full") {
                myPaintings.gridActive = false
            }
        }
    }
})

$(document).ready(function() {
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
});

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


function finalAction(clearTextField, clearCheckboxes) {
    myPaintings.amount = myPaintings.paintings.length

    if(clearTextField) {
        myPaintings.searchColor = ""
    }

    if(clearCheckboxes) {
        myPaintings.checked = []
    }
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
