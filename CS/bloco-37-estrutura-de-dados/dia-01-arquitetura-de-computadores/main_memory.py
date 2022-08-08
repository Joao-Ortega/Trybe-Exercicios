class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        current_position = self.loaded_memory[index]
        if not current_position or not current_position.isdigit():
            return 0
        return int(current_position)

    def clean(self):
        self.loaded_memory = []
