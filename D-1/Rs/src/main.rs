use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut f = File::open("input.txt").expect("file not found");

    let mut contents = String::new();
    f.read_to_string(&mut contents)
        .expect("something went wrong reading the file");

    let file: Vec<_> = contents
        .lines()
        .map(|e| e.parse::<i32>().unwrap())
        .collect();

    let mut counter = 0;
    for i in 0..file.len() {
        if i > 0 && file[i] > file[i - 1] {
            counter += 1
        }
    }

    println!("Part 1: {}", counter);

    let mut counter = 0;
    for i in 0..file.len() {
        if i > 0
            && i < file.len() - 2
            && file[i] + file[i + 1] + file[i + 2] > file[i - 1] + file[i] + file[i + 1]
        {
            counter += 1
        }
    }

    println!("Part 2: {}", counter);
}
