@echo off
if exist node_modules (
    echo "Packages exists, start local server"
    npm start
) else (
    echo "Packages does not exist, start install proccess!"
    npm install
    echo "Packages installed!"
    npm start
)

