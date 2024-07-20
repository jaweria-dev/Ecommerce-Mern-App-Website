@echo off
For /f "tokens=1-4 delims=/-" %%a in ('date /t') do (set mydate=%%a-%%b-%%c)
For /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)
set dt=%mydate%%mytime%

git add .
git commit -m "Updation of %dt%"
git push origin master

timeout 5