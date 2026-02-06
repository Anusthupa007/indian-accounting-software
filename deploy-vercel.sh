#!/bin/bash

echo "🚀 Deploying to Vercel for permanent public access"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "⏳ Installing Vercel CLI..."
    npm install -g vercel
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Vercel CLI"
        echo "Please install it manually with: npm install -g vercel"
        exit 1
    fi
fi

echo "✅ Vercel CLI installed"

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo ""
    echo "🔑 Please login to Vercel"
    vercel login
    
    if [ $? -ne 0 ]; then
        echo "❌ Login failed. Please try again."
        exit 1
    fi
fi

echo "✅ Logged in to Vercel"

# Build the application
echo ""
echo "🔨 Building application..."
cd ~/apps/indian-accounting-software
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check errors above."
    exit 1
fi

echo "✅ Build successful"

# Deploy to Vercel
echo ""
echo "🌐 Deploying to Vercel..."

# Check if this is the first deployment
if [ ! -f .vercel/project.json ]; then
    echo "🆕 First deployment - creating new project"
    vercel --prod --name "indian-accounting-software" --region blr1 --confirm
else
    echo "🔄 Updating existing project"
    vercel --prod --confirm
fi

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "Your application is now live at:"
    echo "https://indian-accounting-software.vercel.app"
    echo ""
    echo "📋 Next steps:"
    echo "1. Test all features in production"
    echo "2. Set up custom domain if needed"
    echo "3. Configure environment variables"
    echo "4. Set up monitoring and analytics"
else
    echo "❌ Deployment failed. Please check errors above."
fi