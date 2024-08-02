// Question no 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items, "."));
}
make_sandwich("cheese");
make_sandwich("lettuce", "tomato");
make_sandwich("cheese", "mustard", "mayo");
