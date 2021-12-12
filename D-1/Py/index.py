f = open('input.txt', 'r').read().split("\n")

counter = 0
for i in range(len(f)-1):
    if i > 0 and int(f[i]) > int(f[i-1]):
        counter+=1

print("Part 1:",counter)

counter = 0
for i in range(len(f)-1):
    if i > 0 and i < len(f)-1 and int(f[i]) + int(f[i+1]) + int(f[i+2]) > int(f[i-1]) + int(f[i]) + int(f[i+1]):
        counter+=1

print("Part 2:",counter)