const JsBarcode = require("jsbarcode");
const { createCanvas } = require("canvas");

const canvas = createCanvas();
JsBarcode(canvas, "01684645670", {
  format: "CODE128",
  width: 2,
  height: 100,
  displayValue: false,
});

const fs = require("fs");
const out = fs.createWriteStream(__dirname + "/barcode.png");
const stream = canvas.createPNGStream();
stream.pipe(out);
