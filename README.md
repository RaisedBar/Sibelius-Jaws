# Sibelius-Jaws
Jaws scripts for Sibelius 2019.9 and beyond
# Installation
1 - copy all of the files in this folder to the clipboard.
2 - Hold down the Windows key and press R
3 - In the Run dialog, type in:
%appdata%\freedom scientific\jaws
then press Enter.
4 - Open the folder for the Jaws version you intend to use with Sibelius.
5 - Open the Settings folder.
6 - Open the ENU folder.
7 - Paste the files into place.
# Testing
Once you think that you have performed the installation steps correctly, follow these steps to check:
1 - Open Sibelius.
2 - Press JawsKey+Q.
You should hear a message saying something like "Sibelius scripts are loaded". If you hear a message saying that the default scripts are loaded then something went wrong.
# Fixing things
If you get the default scripts message then one of two things will be the problem:
1 - You copied the files intot he wrong place, so please double-check.
2 - Your version of Jaws might be different to mine and this can cause the scripts to fail.
If you are confident that the files are in the right place, try the following:
1 - Open Sibelius.
2 - Press JawsKey+0. Note that you have to use the zero key above the QWERTY keys, not the zero key on the number pad. This will load the Jaws Script Manager.
3 - Press JawsKey+T to read the title line. If it contains "Sibelius.jss" then your files are correctly located. If not, then you made a mistake somewhere.
4 - If the title contains "Sibelius.jss", just press Ctrl+S to rebuild the scripts.
5 - Press Alt+F4 to exit the script Manager and return to Sibelius.
6 - Press JawsKey+Q to check that the scripts are now loaded correctly.
# Script Functions
These scripts are extremely simple so, apart from JawsKey+Q, they don't contain anything other than a bit of code to make sure that Jaws doesn't block some particular keystrokes from getting through to Sibelius when Jaws is running.
