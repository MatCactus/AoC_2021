use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut f = File::open("input.txt").expect("file not found");

    let mut contents = String::new();
    f.read_to_string(&mut contents)
        .expect("something went wrong reading the file");

    let file: Vec<&str> = contents.lines().collect();

    let mut counter = 0;
    for i in 0..file.len() {
        if i > 0 && file[i].parse::<i32>().unwrap() > file[i - 1].parse::<i32>().unwrap() {
            counter += 1
        }
    }

    println!("Part 1: {}", counter);
}
