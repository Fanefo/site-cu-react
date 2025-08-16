#!/bin/bash

# Update system
sudo apt update
sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install dependencies
npm install

# Build the application
npm run build

# Install and configure Nginx
sudo apt install -y nginx
sudo tee /etc/nginx/sites-available/clinic-frontend << EOF
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/clinic-frontend;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
EOF

# Create web root directory
sudo mkdir -p /var/www/clinic-frontend

# Copy built files to web root
sudo cp -r dist/* /var/www/clinic-frontend/

# Enable the site
sudo ln -s /etc/nginx/sites-available/clinic-frontend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

echo "Frontend deployment complete!"