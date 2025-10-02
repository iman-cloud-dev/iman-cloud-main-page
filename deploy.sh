#!/bin/bash

# Iman Cloud - Deployment Script
# This script builds and deploys the website

set -e  # Exit on error

echo "🚀 Iman Cloud - Deployment Script"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run build
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed - dist directory not found"
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "📊 Build Statistics:"
du -sh dist
echo ""

# Ask if user wants to commit and push
read -p "Do you want to commit and push to GitHub? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Check if there are changes
    if [[ -z $(git status -s) ]]; then
        echo "ℹ️  No changes to commit"
    else
        echo "📝 Committing changes..."
        git add .
        read -p "Enter commit message: " commit_message
        git commit -m "$commit_message"
        
        echo "⬆️  Pushing to GitHub..."
        git push
        
        echo ""
        echo "✅ Deployed successfully!"
        echo ""
        echo "🌐 Your website will be available at:"
        echo "   https://iman-cloud-dev.github.io/iman-cloud-main-page/"
        echo ""
        echo "⏱️  GitHub Actions will deploy in ~1-2 minutes"
        echo "   Check status: https://github.com/iman-cloud-dev/iman-cloud-main-page/actions"
    fi
else
    echo ""
    echo "ℹ️  Build completed but not deployed"
    echo "   Run 'git add . && git commit -m \"message\" && git push' to deploy manually"
fi

echo ""
echo "🎉 Done!"