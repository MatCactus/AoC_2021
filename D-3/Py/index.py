import copy

file = open('../input.txt', 'r').read().split("\n")

# PART 1 :


def mostRec(column, file, equalCase, reversed=False):
    (zero, one) = (0, 0)

    for line in file:
        if line[column] == "0":
            zero += 1
        if line[column] == "1":
            one += 1
    if one == zero:
        return equalCase

    if one < zero:
        if not reversed:
            return "0"
        return "1"
    if not reversed:
        return "1"
    return "0"


gamma = "".join([mostRec(i, file, "1") for i in range(len(file[0]))])
epsilon = "".join([mostRec(i, file, "1", True) for i in range(len(file[0]))])

print(f"Part 1: {int(gamma, 2) * int(epsilon, 2)}")


# PART 2 :

def oxy(file):
    f = copy.deepcopy(file)

    i = 0
    while not len(f) == 1:
        mostRecNum = mostRec(i, f, "1")

        f = [f[j] for j in range(len(f)) if f[j][i] == mostRecNum]
        i += 1
    return f


def co2(file):
    f = copy.deepcopy(file)

    i = 0
    while not len(f) == 1:
        mostRecNum = mostRec(i, f, "0", True)

        f = [f[j] for j in range(len(f)) if f[j][i] == mostRecNum]
        i += 1
    return f


print("Part 2:", int("".join(oxy(file)), 2) * int("".join(co2(file)), 2))
