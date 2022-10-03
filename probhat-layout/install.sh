#!/bin/sh

cd /Library/Keyboard\ Layouts
sudo rm -f Probhat.keylayout
sudo rm -f Probhat.icns
sudo curl -O# https://raw.githubusercontent.com/4msar/probhat/main/probhat-layout/Probhat.keylayout
sudo curl -O# https://raw.githubusercontent.com/4msar/probhat/main/probhat-layout/Probhat.icns
