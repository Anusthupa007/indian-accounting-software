#!/bin/bash

echo "🖥️  Deploying Indian Accounting Software to your server..."
echo ""

# Build the application for production
echo "🔨 Building production version..."
cd ~/apps/indian-accounting-software
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check errors above."
    exit 1
fi

echo "✅ Build successful!"

# Install PM2 for process management
echo "📦 Installing PM2 for process management..."
npm install -g pm2

# Start the application
echo "🚀 Starting application with PM2..."
pm2 start npm --name "indian-accounting" -- start

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
pm2 save

echo ""
echo "🎉 Application deployed successfully!"
echo ""
echo "📋 Access Information:"
echo "- Local Access: http://localhost:3000"
echo "- Network Access: http://<your-server-ip>:3000"
echo ""
echo "🔒 Security Recommendations:"
echo "1. Set up a domain name with HTTPS"
echo "2. Configure firewall rules"
echo "3. Set up authentication"
echo "4. Use environment variables for sensitive data"
echo ""
echo "📚 Management Commands:"
echo "- pm2 list              # List running processes"
echo "- pm2 logs             # View application logs"
echo "- pm2 restart all      # Restart all applications"
echo "- pm2 stop all         # Stop all applications"
