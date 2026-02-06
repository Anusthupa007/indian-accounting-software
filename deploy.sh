#!/bin/bash

# Indian Accounting Software - Deployment Script
# This script helps deploy the application to Vercel

echo "🚀 Starting deployment of Indian Accounting Software"

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
if ! vercel whoami &> /dev/null; then
    echo "🔑 Please login to Vercel first"
    vercel login
fi

# Install dependencies
 echo "📦 Installing dependencies..."
 npm install

# Build the application
 echo "🔨 Building application..."
 npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🌐 Deploying to Vercel..."
    
    # Check if this is the first deployment
    if [ ! -f .vercel/project.json ]; then
        echo "🆕 First time deployment - creating new project"
        vercel --prod --name "indian-accounting-software" --region blr1
    else
        echo "🔄 Updating existing deployment"
        vercel --prod
    fi
    
    echo "🎉 Deployment complete!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi