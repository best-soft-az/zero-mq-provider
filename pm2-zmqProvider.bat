@echo off

SET PM2_HOME = C:\etc\.pm2

pm2 start "C:\apps\zmqProvider\server.js" --name zeromqProvider