@echo off
call loadtest -T "application/json" -t 300 -c 10 --rps 100 -m POST http://localhost:29342/api/lookup -p samplelookup-01.js
call loadtest -T "application/json" -t 300 -c 10 --rps 100 -m POST http://localhost:29342/api/lookup -p samplelookup-03.js