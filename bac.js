function final(a, w, h) {
  var result = (a * 5.14/w*0.69);
  var bac = (result-.015*h);
  return Number(bac.toPrecision(4));
}

module.exports = final;
