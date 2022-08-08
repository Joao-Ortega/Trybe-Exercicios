from os import mkdir, listdir
from os.path import join
from shutil import rmtree

DISK_PATH = "./disk"


class SecondaryMemory:
    def __init__(self, disk_path=DISK_PATH):
        self.disk_path = disk_path
        try:
            mkdir(self.disk_path)
        except FileExistsError:
            pass

    def load(self, value):
        value = str(value)
        next_index = str(len(listdir(self.disk_path)))
        next_file_name = join(self.disk_path, next_index)
        with open(next_file_name, mode="w") as file:
            file.write(value)

    def get(self, index):
        index = str(index)
        file_name = join(self.disk_path, index)
        with open(file_name, mode="r") as file:
            content = int(file.read())
        return content

    def clean(self):
        rmtree(self.disk_path)
        mkdir(self.disk_path)
