// without using prototype
function newSquare(length, x, y) {
  return {
    length: length,
    width: length,
    x: x || 0,
    y: y || 0,

    diameter: function() {
      var length_squared = Math.pow(this.length, 2);
      var width_squared = Math.pow(this.width, 2);
      return Math.sqrt(length_squared + width_squared);
    },

    perimeter: function() {
      return this.length * 4;
    },

    area: function() {
      return Math.pow(this.length, 2);
    },

    containsPoint: function(x, y) {
      var delta = this.width / 2;
      if(((this.x - delta <= x) && (x <= this.x + delta)) &&
        ((this.y - delta <= y) && (y <= this.y + delta))) {
        return true;
      }
      return false;
    }
  }
}
