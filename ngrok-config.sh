#!/bin/bash

echo "🌍 Setting up ngrok for public access"
echo ""

# Check if authtoken is provided as argument
if [ -z "$1" ]; then
    echo "❌ No authtoken provided."
    echo ""
    echo "Usage: ./ngrok-config.sh YOUR_NGROK_AUTHTOKEN"
    echo ""
    echo "Get your authtoken from: https://dashboard.ngrok.com/get-started/your-authtoken"
    exit 1
fi

AUTHTOKEN=$1

echo "🔑 Adding authtoken to ngrok..."
ngrok config add-authtoken $AUTHTOKEN

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
echo "Your public URL will be available below:"
echo ""
ngrok http 3000

echo ""
echo "🎉 Your application is now publicly accessible!"
echo "Keep this terminal open to maintain the connection."
