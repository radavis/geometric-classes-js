describe("Circle", function() {
  describe("new Circle()", function() {
    it("takes a value for the radius", function() {
      circle = new Circle(5);
      expect(circle).toBeDefined();
    });

    it("takes an optional argument for the center point", function() {
      circle = new Circle(5, 1, 2);
    });
  });
});
