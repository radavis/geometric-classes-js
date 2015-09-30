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

Square.prototype.perimeter = function() {
  return this.length * 4;
}

Square.prototype.area = function() {
  return Math.pow(this.length, 2);
}

Square.prototype.containsPoint = function(x, y) {
  var delta = this.width / 2;
  if(((this.x - delta <= x) && (x <= this.x + delta)) &&
    ((this.y - delta <= y) && (y <= this.y + delta))) {
    return true;
  }
  return false;
}
