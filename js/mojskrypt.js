function Toggler(domElem) {
    this.elem = domElem;
}

Toggler.prototype.getElem = function() {
    return document.querySelector(this.elem);
};

Toggler.prototype.show = function() {
    document.querySelector(this.elem).style.display = "";
};

Toggler.prototype.hide = function() {
    document.querySelector(this.elem).style.display = "none";
};

var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);
