#!/bin/bash

echo "🌍 Setting up ngrok for public access"
echo ""

echo "📋 Step 1: Get your ngrok authtoken"
echo "   1. Go to: https://dashboard.ngrok.com/get-started/your-authtoken"
echo "   2. Sign up or login"
echo "   3. Copy your authtoken"
echo ""

read -p "Paste your ngrok authtoken here: " authtoken

if [ -z "$authtoken" ]; then
    echo "❌ No authtoken provided. Please run this script again with your authtoken."
    exit 1
fi

echo ""
echo "🔑 Adding authtoken to ngrok..."
ngrok config add-authtoken $authtoken

if [ $? -ne 0 ]; then
    echo "❌ Failed to add authtoken. Please check your authtoken and try again."
    exit 1
fi

echo "✅ Authtoken added successfully!"

echo ""
echo "🚀 Starting development server..."
cd ~/apps/indian-accounting-software

# Check if server is already running
PID=$(lsof -ti :3000)
if [ -z "$PID" ]; then
    npm run dev > /dev/null 2>&1 &
    echo "🔄 Starting server..."
    sleep 5
else
    echo "✅ Server is already running"
fi

echo ""
echo "🔗 Creating public tunnel..."
ngrok http 3000

echo ""
echo "🎉 Your application is now publicly accessible!"
echo "The ngrok URL above can be used from any device."
echo "Keep this terminal open to maintain the connection."
