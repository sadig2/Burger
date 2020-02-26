import os
import re
# listOfFile = os.listdir(".")
# for i in listOfFile:


for dirpath, dirname, filenames in os.walk("/home/sadig/Desktop/Burger"):
    for file in filenames:
        if (re.match("^\w+[.]css$", file)):
            newFilarray = re.split("[.]", file)
            os.rename(os.path.join(dirpath, file), os.path.join(
                dirpath, newFilarray[0] + ".module.css"))
