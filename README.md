# img to gd 1.9
use it here: https://img2gd19.6w6.repl.co
makes an image in geometry dash using only 3 color channels (for 1.9 gdps)
using this is pretty unintuitive but its better than doing it by hand so bear with me

prerequsites:
https://github.com/WEGFan/Geometry-Dash-Savefile-Editor
https://github.com/HJfod/gdshare
https://github.com/HJfod/BetterEdit
https://github.com/matcool/mats-nice-hacks

# step 1 - get the object string and colors
just put the image url and mess with the settings till you're happy with the output and object count

make sure to click 'generate' and then 'get strings' so they're updated correctly

# step 2 - insert into custom objects
first backup your save in case something goes wrong

create a custom object in 2.1 with just 1 block and close the game to save

decrypt your 2.1 save (recommended: use an xml formatter to make this easier) and look for 'customobjectdict'

under it will be all the custom objects; look the the shortest string of numbers, it should be the one you just created

paste the string from the image generator in place of what was there before

save and put it back into the gd appdata folder (dont worry about encrypting it again it does it for you)

# step 3 - place the object
make a new level in 2.1 and place the custom object, it should be a bunch of white squares

set color channels 1, 2, and 3 to the hex codes listed after you generated the strings, set them all to blending

# step 4 - transfer to 1.9
use gdshare and mats hacks to carry the level over to 1.9

ok thats it bye