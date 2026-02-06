#!/bin/bash

echo "🚀 Launching Indian Accounting Software..."
echo ""

# Check if the server is running
PID=$(lsof -ti :3000)

if [ -z "$PID" ]; then
    echo "❌ Development server is not running."
    echo ""
    echo "Starting server..."
    cd ~/apps/indian-accounting-software
    npm run dev &
    
    # Wait for server to start
    sleep 5
fi

# Check if we have a browser available
if command -v xdg-open &> /dev/null; then
    echo "🌐 Opening application in default browser..."
    xdg-open http://localhost:3000
elif command -v google-chrome &> /dev/null; then
    echo "🌐 Opening application in Google Chrome..."
    google-chrome http://localhost:3000
elif command -v firefox &> /dev/null; then
    echo "🌐 Opening application in Firefox..."
    firefox http://localhost:3000
else
    echo "📝 Please manually open your browser and go to:"
    echo "   http://localhost:3000"
fi

echo ""
echo "✅ Indian Accounting Software is ready!"
echo "   Access it at: http://localhost:3000"
