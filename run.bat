call pm2 stop all
call pm2 delete all
call pm2 start server.js -i max -f --wait-ready
call pm2 monit
call pm2 stop all
call pm2 delete all
pause