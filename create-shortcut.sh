#!/bin/bash

echo "Creating desktop shortcut for Indian Accounting Software..."

# Create shortcut file
SHORTCUT_FILE="~/Desktop/Indian Accounting Software.desktop"

cat > "$SHORTCUT_FILE" << EOF
[Desktop Entry]
Version=1.0
Type=Application
Name=Indian Accounting Software
Comment=Hybrid Accounting System with Tally Integration
Exec=/usr/bin/google-chrome-stable --app=http://localhost:3000
Icon=utilities-terminal
Path=/home/ubuntu/apps/indian-accounting-software
Terminal=false
StartupWMClass=Indian Accounting Software
Categories=Office;Finance;
EOF

# Make it executable
chmod +x "$SHORTCUT_FILE"

echo "✅ Desktop shortcut created successfully!"
echo "You can find it on your desktop as 'Indian Accounting Software'"
echo "Double-click to launch the application in Chrome as a standalone app."

# Also create a simple HTML launcher
HTML_LAUNCHER="~/Desktop/Indian Accounting Software.html"

cat > "$HTML_LAUNCHER" << EOF
<!DOCTYPE html>
<html>
<head>
    <title>Indian Accounting Software</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background-color: #f5f5f5;
        }
        .launcher {
            background-color: #3b82f6;
            color: white;
            padding: 20px 40px;
            font-size: 18px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .launcher:hover {
            background-color: #2563eb;
        }
        .logo {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="logo">📊</div>
    <h1>Indian Accounting Software</h1>
    <p>Click below to launch the application</p>
    <button class="launcher" onclick="launchApp()">Launch Application</button>
    
    <script>
        function launchApp() {
            window.location.href = 'http://localhost:3000';
        }
        
        // Auto-redirect after 3 seconds
        setTimeout(function() {
            launchApp();
        }, 3000);
    </script>
</body>
</html>
EOF

echo "✅ HTML launcher also created on desktop!"
echo "This will automatically redirect to the application."

echo "\n📋 To use the application:"
echo "1. Make sure the development server is running: npm run dev"
echo "2. Double-click the desktop shortcut or HTML launcher"
echo "3. The application will open in your default browser"

echo "\n💡 Tip: For best experience, use Google Chrome or Firefox."
