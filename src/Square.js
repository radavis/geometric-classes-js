var Square = function Square(length, x, y) {
  this.constructor;
  this.length = length;
  this.width = length;
  this.x = x || 0;
  this.y = y || 0;
}

Square.prototype.diameter = function() {
  var length_squared = Math.pow(this.length, 2);
  var width_squared = Math.pow(this.width, 2);
  return Math.sqrt(length_squared + width_squared);
}
