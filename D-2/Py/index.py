f = open('../input.txt', 'r').read().split("\n")

x = 0
y = 0

for e in f:
    e = e.split(" ")
    if e[0] == "forward":
        x += int(e[1])
    elif e[0] == "up":
        y -= int(e[1])
    elif e[0] == "down":
        y += e[1]

print(f"Part 1: {x*y}")

aim = 0
x = 0
y = 0

for e in f:
    e = e.split(" ")
    if e[0] == "forward":
        x += int(e[1])
        y += aim * int(e[1])
    elif e[0] == "up":
        aim -= int(e[1])
    elif e[0] == "down":
        aim += int(e[1])

print(f"Part 1: {x*y}")
