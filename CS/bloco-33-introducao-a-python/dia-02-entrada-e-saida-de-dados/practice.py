# file = open("alunos-notas.txt", mode='r')

# content = file.read()

# print(content)

# file.close()

reproved = []


with open("alunos-notas.txt") as grades:
    for line in grades:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            reproved.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuFile:
    recuFile.writelines(reproved)
