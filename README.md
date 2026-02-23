# 🎂 Age Calculator - Modern & Beautiful

A stunning, responsive age calculator web application built with vanilla HTML, CSS, and JavaScript. Calculate your exact age in years, months, and days with a modern, aesthetic interface.

![Age Calculator](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- **Precise Age Calculation** - Calculate exact age in years, months, and days
- **Next Birthday Countdown** - See how many days until your next birthday
- **Modern UI/UX** - Beautiful gradient design with smooth animations
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Input Validation** - Prevents invalid dates and future dates
- **Smooth Animations** - Fade-in, slide-in, and shake effects for better UX
- **Dark Gradient Theme** - Eye-catching purple gradient background
- **Glass Morphism** - Modern frosted glass effect on the calculator card
- **Zero Dependencies** - No external libraries required, just pure vanilla JavaScript

## 🎨 Design Highlights

- Purple gradient background (from `#667eea` to `#764ba2`)
- Glass morphism effect with backdrop blur
- Responsive grid layout for age display
- Smooth hover effects on buttons
- Clean, minimal interface
- Mobile-first responsive design

## 📋 Prerequisites

Before you begin, ensure you have:

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- A text editor (VS Code, Sublime Text, Notepad++, etc.) - optional, only if you want to modify the code
- Basic understanding of HTML/CSS/JavaScript (optional, for customization)

**That's it!** No Node.js, no npm, no build tools required.

## 🚀 Getting Started

### Option 1: Quick Start (Recommended)

1. **Download All Files**
   - Download `index.html`, `styles.css`, and `script.js` to your computer
   - Save all three files in the **same folder** (e.g., `Documents/age-calculator/`)
   - **Important:** All files must be in the same directory

2. **Open in Browser**
   - Double-click the `index.html` file
   - OR right-click → "Open with" → Select your preferred browser
   - The calculator will open immediately in your browser

3. **Start Using**
   - Select your birth date using the date picker
   - Click "Calculate Age" button
   - View your exact age and next birthday countdown!

### Option 2: Set Up a Local Development Environment

If you want to modify or customize the calculator:

1. **Clone or Download**
   ```bash
   # Create a project folder
   mkdir age-calculator
   cd age-calculator
   
   # Save all three files (index.html, styles.css, script.js) in this folder
   ```

2. **Open in Text Editor**
   ```bash
   # Using VS Code (open entire folder)
   code .
   
   # Or open individual files
   code index.html
   code styles.css
   code script.js
   ```

3. **Run with Live Server (Optional)**
   
   If you're using VS Code:
   - Install the "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - The page will open at `http://localhost:5500` (or similar)
   - Changes will auto-reload as you edit

   Alternatively, just open the `index.html` file directly in your browser (no server needed).

## 📁 Project Structure

```
age-calculator/
│
├── index.html                   # Main HTML structure
├── styles.css                   # All CSS styling
├── script.js                    # JavaScript functionality
└── README.md                    # This file
```

**Note:** The application is organized into three separate files for better maintainability and code organization. All files must be in the same directory to work properly.

## 🎯 How to Use

1. **Select Birth Date**
   - Click on the date input field
   - Choose your birth date from the calendar picker
   - The maximum date is set to today (you can't select future dates)

2. **Calculate Age**
   - Click the "Calculate Age" button
   - Your age will be displayed in years, months, and days
   - You'll also see a countdown to your next birthday

3. **Reset**
   - Click the "Reset" button to clear all inputs and results
   - Start over with a new birth date

## 🛠️ Customization Guide

### Changing Colors

Open `styles.css` in a text editor and modify these CSS rules:

```css
/* Main gradient background (line 8) */
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
/* Change to your preferred colors, e.g., */
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);

/* Primary color (line 41 - used in headings) */
color: #38bdf8;
/* Change to match your theme */

/* Accent colors (line 104 - button gradient) */
background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
```

### Changing Fonts

In `styles.css`:

```css
/* Current font (line 8) */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Change to Google Fonts (add link in index.html <head> first) */
font-family: 'Poppins', sans-serif;
```

To add Google Fonts, add this to `index.html` in the `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

### Adjusting Sizes

In `styles.css`:

```css
/* Container max-width (line 22) */
max-width: 500px;  /* Increase for wider calculator */

/* Font sizes */
h1 { font-size: 2.5rem; }  /* Main title (line 42) */
.age-number { font-size: 2rem; }  /* Age numbers (line 180) */
```

### Adding More Features

The JavaScript code in `script.js` is well-commented. You can easily add features like:
- Total days lived calculation
- Total hours/minutes/seconds lived
- Zodiac sign calculation
- Age in different planet years

**File to edit:** `script.js` - add new functions or modify the `calculateAge()` function.

## 📱 Browser Compatibility

Works on all modern browsers:

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 90+            |
| Firefox | 88+            |
| Safari  | 14+            |
| Edge    | 90+            |
| Opera   | 76+            |

## 🐛 Troubleshooting

### Issue: Styles not loading or page looks unstyled
**Solution:** Ensure all three files (`index.html`, `styles.css`, `script.js`) are in the **same folder**. Check that the file names match exactly (case-sensitive).

### Issue: Calculator not working (buttons don't respond)
**Solution:** Make sure `script.js` is in the same folder as `index.html`. Check browser console (F12) for any error messages.

### Issue: Date picker not working
**Solution:** Ensure you're using a modern browser. Date input type is supported in all browsers from 2020 onwards.

### Issue: Calculator shows wrong age
**Solution:** Check your system date and time are correct. The calculator uses your device's current date.

## 🎓 Learning Resources

If you want to learn how this calculator works:

- **HTML Structure** - `index.html`: See how the form and result sections are organized
- **CSS Styling** - `styles.css`: Learn about gradients, animations, and responsive design
- **JavaScript Logic** - `script.js`: Understand date calculations and DOM manipulation

Each file is well-commented with explanations of what each section does.

## 🤝 Contributing

Want to improve this calculator? Here's how:

1. Fork or copy the project
2. Make your changes
3. Test thoroughly in different browsers
4. Share your improvements!

Ideas for contributions:
- Add more languages (internationalization)
- Add themes (dark mode, light mode, color themes)
- Add more calculation options (weeks, hours, etc.)
- Improve accessibility (ARIA labels, keyboard navigation)

## 📄 License

This project is open source and available under the MIT License.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

## 🌟 Features Breakdown

### Age Calculation Algorithm
- Calculates years by comparing birth year to current year
- Accounts for months and days not yet reached in current year
- Handles edge cases (leap years, different month lengths)

### Next Birthday Countdown
- Determines if birthday has already occurred this year
- Calculates exact days until next birthday
- Shows special message on actual birthday

### Input Validation
- Prevents selection of future dates
- Requires date to be entered before calculation
- Shows clear error messages

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px for phones
- Grid layout automatically adjusts
- Touch-friendly button sizes

## 💡 Tips for Best Experience

1. **Keep files together** - All three files must be in the same folder
2. **Bookmark** the page for easy access
3. **Add to Home Screen** on mobile for app-like experience
4. **Use keyboard** - Press Enter after selecting date to calculate
5. **Customize** - Edit colors and styles to match your preference

## 📞 Support

Having issues or questions?

- Check the Troubleshooting section above
- Review the code comments in the HTML file
- Search for similar issues online

## 🚀 Deployment

Want to put this online?

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all three files: `index.html`, `styles.css`, and `script.js`
3. Enable GitHub Pages in repository settings
4. Access at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Create a folder with all three files
2. Drag and drop the folder to Netlify
3. Get instant URL

### Any Web Host
Simply upload all three files (`index.html`, `styles.css`, `script.js`) to your web hosting via FTP. Make sure they're all in the same directory.

## 🎉 Credits

Created with ❤️ using vanilla HTML, CSS, and JavaScript.

No frameworks, no dependencies, just clean code!

---

**Enjoy calculating ages! 🎂**

Made in 2026 | Version 1.0.0
