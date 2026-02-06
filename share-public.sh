#!/bin/bash

echo "🌍 Setting up public access to Indian Accounting Software..."
echo ""

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok not found. Installing..."
    npm install -g ngrok
fi

# Check if ngrok is authenticated
if ! ngrok authtoken status &> /dev/null; then
    echo "🔑 ngrok requires authentication."
    echo "Please get your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken"
    read -p "Enter your ngrok authtoken: " authtoken
    ngrok authtoken $authtoken
fi

# Start the development server if not running
PID=$(lsof -ti :3000)
if [ -z "$PID" ]; then
    echo "🚀 Starting development server..."
    cd ~/apps/indian-accounting-software
    npm run dev > /dev/null 2>&1 &
    
    # Wait for server to start
    sleep 5
fi

# Start ngrok tunnel
echo "🔗 Creating public tunnel..."
ngrok http 3000 --region=in

echo ""
echo "🎉 Your application is now publicly accessible!"
echo "Use the ngrok URL above to access from any device."
