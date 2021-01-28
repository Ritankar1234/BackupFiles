import os
import shutil
source=input("Enter the source folder name")
destination=input("Enter the destination folder name")
listOfFiles=os.listdir(source)
for file in listOfFiles:
    shutil.move((source+file),destination)