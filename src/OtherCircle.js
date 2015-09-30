function newCircle(radius, x, y) {
  return {
    radius: radius,
    diameter: radius * 2,
    x: x || 0,
    y: y || 0,

    area: function() {
      return Math.PI * Math.pow(this.radius, 2);
    },

    perimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  }
}
