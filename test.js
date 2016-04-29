QUnit.test( "1 is I", function( assert ) {
  assert.ok(romanize(1) == "I", "Passed!" );
});

QUnit.test( "2 is II", function( assert ) {
  assert.ok(romanize(2) == "II", "Passed!" );
});

QUnit.test( "3 is III", function( assert ) {
  assert.ok(romanize(3) == "III", "Passed!" );
});

QUnit.test( "4 is IV", function( assert ) {
  assert.ok(romanize(4) == "IV", "Passed!" );
});

QUnit.test( "5 is V", function( assert ) {
  assert.ok(romanize(5) == "V", "Passed!" );
});

QUnit.test( "6 is VI", function( assert ) {
  assert.ok(romanize(6) == "VI", "Passed!" );
});

QUnit.test( "7 is VII", function( assert ) {
  assert.ok(romanize(7) == "VII", "Passed!" );
});

QUnit.test( "8 is VIII", function( assert ) {
  assert.ok(romanize(8) == "VIII", "Passed!" );
});

QUnit.test( "9 is IX", function( assert ) {
  assert.ok(romanize(9) == "IX", "Passed!" );
});

QUnit.test( "10 is X", function( assert ) {
  assert.ok(romanize(10) == "X", "Passed!" );
});

QUnit.test( "11 is XI", function( assert ) {
  assert.ok(romanize(11) == "XI", "Passed!" );
});

QUnit.test( "12 is XII", function( assert ) {
  assert.ok(romanize(12) == "XII", "Passed!" );
});

QUnit.test( "20 is XX", function( assert ) {
  assert.ok(romanize(20) == "XX", "Passed!" );
});

QUnit.test( "21 is XXI", function( assert ) {
  assert.ok(romanize(21) == "XXI", "Passed!" );
});

QUnit.test( "50 is V", function( assert ) {
  assert.ok(romanize(50) == "L", "Passed!" );
});

QUnit.test( "74 is LXXIV", function( assert ) {
  assert.ok(romanize(74) == "LXXIV", "Passed!" );
});

QUnit.test( "89 is LXXXIX", function( assert ) {
  assert.ok(romanize(89) == "LXXXIX", "Passed!" );
});

QUnit.test( "100 is C", function( assert ) {
  assert.ok(romanize(100) == "C", "Passed!" );
});

QUnit.test( "145 is CXLV", function( assert ) {
  assert.ok(romanize(145) == "CXLV", "Passed!" );
});

QUnit.test( "222 is CCXXII", function( assert ) {
  assert.ok(romanize(222) == "CCXXII", "Passed!" );
});

QUnit.test( "500 is D", function( assert ) {
  assert.ok(romanize(89) == "LXXXIX", "Passed!" );
});

QUnit.test( "789 is DCCLXXXIX", function( assert ) {
  assert.ok(romanize(789) == "DCCLXXXIX", "Passed!" );
});

QUnit.test( "1000 is M", function( assert ) {
  assert.ok(romanize(1000) == "M", "Passed!" );
});

QUnit.test( "1378 is MCCCLXXVIII", function( assert ) {
  assert.ok(romanize(1378) == "MCCCLXXVIII", "Passed!" );
});

QUnit.test( "5467 is MMMMMCDLXVII", function( assert ) {
  assert.ok(romanize(5467) == "MMMMMCDLXVII", "Passed!" );
});

QUnit.test( "8790 is MMMMMMMMDCCXC", function( assert ) {
  assert.ok(romanize(8790) == "MMMMMMMMDCCXC", "Passed!" );
});

QUnit.test( "11567 is MMMMMMMMMMMDLXVII", function( assert ) {
  assert.ok(romanize(11567) == "MMMMMMMMMMMDLXVII", "Passed!" );
});

QUnit.test( "56789 is MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMDCCLXXXIX", function( assert ) {
  assert.ok(romanize(56789) == "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMDCCLXXXIX", "Passed!" );
});

QUnit.test( "123456 is MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCDLVI", function( assert ) {
  assert.ok(romanize(123456) == "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCDLVI", "Passed!" );
});
