from nodes import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}), value={self.head_value}"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.head_value

        if self.is_empty():
            return self.insert_first(value)

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        node_position = self.__get_node_at(position)
        next_value = Node(value)
        next_value.next = node_position
        self.__length += 1

    def remove_first(self):
        value_to_remove = self.head_value
        if value_to_remove:
            self.head_value = self.head_value.next
            value_to_remove.next = None
            self.__length -= 1
        return value_to_remove

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()
        previous_to_remove = self.head_value
        while previous_to_remove.next.next:
            previous_to_remove = previous_to_remove.next
        value_to_remove = previous_to_remove.next
        previous_to_remove.next = None
        self.__length -= 1
        return value_to_remove

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()
        return self.__get_node_at(position)

    def get_element_at(self, position):
        return self.__get_node_at(position)

    def is_empty(self):
        return not self.__length

    def clear(self):
        self.head_value.next = None
        return self

    def __get_node_at(self, position):
        value_to_return = self.head_value
        if position < 1:
            return self.head_value.next
        if position >= len(self):
            while self.head_value.next:
                self.head_value = self.head_value.next
            return self.head_value
        while position > 1 and value_to_return.next:
            value_to_return = value_to_return.next
            position -= 1
        return value_to_return


if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty())  # saída: True
    linked_list.insert_first(1)
    print(
        linked_list
    )  # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_first(2)
    print(
        linked_list
    )  # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.insert_last(3)
    print(
        linked_list
    )  # saída: LinkedList(len=3 value=Node(value=2 next=Node(value=1 next=Node(value=3 next=None))))

    linked_list.remove_last()
    print(
        linked_list
    )  # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.remove_first()
    print(
        linked_list
    )  # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_at(5, 1)
    print(
        linked_list
    )  # saída: LinkedList(len=2 value=Node(value=1 next=Node(value=5 next=None)))

    linked_list.remove_at(0)
    print(
        linked_list
    )  # saída: LinkedList(len=1 value=Node(value=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(8, 3)
    linked_list.insert_at(9, 4)
    print(linked_list.get_element_at(3))  # saída: Node(value=8 next=None)
