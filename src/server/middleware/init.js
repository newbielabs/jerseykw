export default function(req, res, next) {
  const themeColors = {
    dark: {
      'color-text': '#f5f5f5',
      'color-text-faded': '#acacac',
      'color-text-invert': '#161616',
      'color-background': '#161616',
      'color-background-faded': '#262626',
      'color-disabled': '#666',
      'color-border': '#444',
      'color-document-background-primary': '#161616',
      'color-document-background-secondary': '#182125'
    },
    light: {
      'color-text': '#222',
      'color-text-faded': '#333',
      'color-text-invert': '#f5f5f5',
      'color-background': '#f0f0f0',
      'color-background-faded': '#e0e0e0',
      'color-disabled': '#aaa',
      'color-border': '#ccc',
      'color-document-background-primary': '#fff',
      'color-document-background-secondary': '#f5f5f5'
    }
  }

  req.shop = {
    colors: {
      theme: 'light',
      'color-branding': '#dd0000'
      // ...themeColors['light']
    }
  }
  next()
}
