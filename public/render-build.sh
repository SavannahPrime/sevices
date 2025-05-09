
#!/usr/bin/env bash
# Exit on error
set -e

# Build the app
npm run build

# Navigate into the build directory
cd dist

# Create a basic server configuration for client-side routing
echo '/* /index.html 200' > _redirects
