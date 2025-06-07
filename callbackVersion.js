function mowYard(callback) {
     setTimeout(() => {
            console.log("You mowed the yard");
            callback();
        }, 2000);
}

function weedEat(callback) {
    setTimeout(() => {
        console.log("You finished using the weed eater");
        callback();
    }, 1500);
}
function trimHedges(callback) {
    setTimeout(() => {
        console.log("You finished trimming the hedges");
        callback();
    }, 1000);

}
function collectWood(callback) {
    setTimeout(() => {
        console.log("You finished collecting the wood"); 
        callback();   
    }, 2500);
}
function waterGarden(callback) {
    setTimeout(() => {
        console.log("You finished watering the garden"); 
        callback();   
    }, 500);
}




mowYard(() => {
    weedEat(() => {
        trimHedges(() => {
            collectWood(() => {
                waterGarden (() => console.log("You finsihed all their chores!"));
            });
        });
    });
});