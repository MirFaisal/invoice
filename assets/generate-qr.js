const QRCode = require("qrcode");

// Create QR code data with invoice information
const invoiceData = {
  mpId: "142970246",
  invoiceNo: "51225",
  phone: "01723251225",
  amount: "1250",
};

const qrData = JSON.stringify(invoiceData);

// Generate QR code as SVG
QRCode.toString(
  qrData,
  {
    type: "svg",
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  },
  function (err, string) {
    if (err) throw err;

    const fs = require("fs");
    fs.writeFileSync(__dirname + "/qr-code.svg", string);
  },
);
