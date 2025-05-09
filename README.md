# Merchant Invoice Generator

A professional invoice generation system designed for Mohammad Parcel service, featuring real-time barcode and
QR code generation for parcel tracking.

## Features

- Clean and professional invoice layout (484x605px)
- Automated barcode generation for parcel tracking
- QR code generation with encoded invoice details
- COD (Cash on Delivery) support
- Responsive design with Poppins font
- Print-ready format

## Project Structure

```
invoice/
├── index.html              # Main invoice template
├── package.json           # Project dependencies
├── assets/
│   ├── barcode.png       # Generated barcode image
│   ├── generate-barcode.js # Barcode generation script
│   ├── generate-qr.js    # QR code generation script
│   ├── logo.png          # Company logo
│   ├── logo.svg          # Vector logo
│   └── qr-code.svg       # Generated QR code
└── styles/
    └── main.css          # Invoice styles
```

## Dependencies

- Node.js
- jsbarcode (for barcode generation)
- qrcode (for QR code generation)
- Poppins font (via Google Fonts)

## Setup

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Generate Codes:**
   ```bash
   node assets/generate-barcode.js
   node assets/generate-qr.js
   ```

## Invoice Features

- **Header Section:**

  - Company name and branding
  - Parcel tracking number
  - Machine-readable barcode
  - Unique MP-ID

- **Information Layout:**

  - QR code with encoded invoice data
  - Invoice number, delivery type, and weight
  - Customer details section
  - COD amount with visual separator

- **Footer:**
  - Timestamp with date and time
  - Company website
  - Company logo

## Customization

The invoice template can be customized by:

1. Modifying the CSS in index.html
2. Updating QR/barcode generation scripts for different data formats
3. Adjusting dimensions (current: 484x605px)

## Usage

1. Open index.html in a modern web browser
2. The invoice will be displayed in the correct dimensions
3. Print or save as PDF using browser's print functionality

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome. Please ensure to update tests as appropriate.

## License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.
