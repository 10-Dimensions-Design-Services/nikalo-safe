# Logo Assets

This folder contains the logo assets for Nikalo Safe.

## Available Logo Variants

### 1. `logo.svg` (40x40)
- **Size**: 40x40 pixels
- **Usage**: Primary logo for navigation bars and small spaces
- **Features**: Shield design with lock icon, blue color scheme

### 2. `logo-large.svg` (60x60)
- **Size**: 60x60 pixels
- **Usage**: Larger contexts where more detail is needed
- **Features**: Same design as logo.svg but larger for better visibility

### 3. `logo-text.svg` (200x40)
- **Size**: 200x40 pixels
- **Usage**: Full logo with company name for headers and branding
- **Features**: Shield icon + "Nikalo Safe" text

## Design Elements

- **Shield**: Represents security and protection
- **Lock Icon**: Symbolizes data encryption and access control
- **Color Scheme**: 
  - Primary Blue: #3B82F6
  - Dark Blue: #1E40AF
  - White: #FFFFFF

## Usage in Components

```jsx
// For navigation bar
<img src="/assets/images/logo.svg" alt="Nikalo Safe Logo" className="w-8 h-8" />

// For larger contexts
<img src="/assets/images/logo-large.svg" alt="Nikalo Safe Logo" className="w-12 h-12" />

// For full branding
<img src="/assets/images/logo-text.svg" alt="Nikalo Safe" className="h-8" />
```

## File Structure

```
assets/
└── images/
    ├── logo.svg          # Standard logo (40x40)
    ├── logo-large.svg    # Large logo (60x60)
    ├── logo-text.svg     # Logo with text (200x40)
    └── README.md         # This file
``` 