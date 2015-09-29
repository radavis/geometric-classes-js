describe("Square", function() {
  describe("new Square()", function() {
    it("takes a value for the length of a side", function() {
      var square = new Square(5);
      expect(square).toBeDefined();
    });

    it("takes optional values for the center point", function() {
      var square = new Square(5, 1, 2);
      expect(square).toBeDefined();
      expect(square.x).toEqual(1);
      expect(square.y).toEqual(2);
    });

    it("defaults to the origin point", function() {
      var square = new Square(5);
      expect(square.x).toEqual(0);
      expect(square.y).toEqual(0);
    });
  });

  describe("#length", function() {
    it("returns the value of the length of the square", function() {
      var square = new Square(5);
      expect(square.length).toEqual(5);
    });
  });

  describe("#width", function() {
    it("returns the value of the width of the square", function() {
      var square = new Square(5);
      expect(square.width).toEqual(5);
    });
  });

  describe(".diameter()", function() {
    it("returns the length of the diameter (or diagonal)", function() {
      var square = new Square(5);
      expect(square.diameter()).toBeCloseTo(7.071);
    });
  });
});
