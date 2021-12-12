use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut f = File::open("../input.txt").expect("file not found");

    let mut contents = String::new();
    f.read_to_string(&mut contents)
        .expect("something went wrong reading the file");

    let file: Vec<_> = contents.lines().collect();

    let mut x = 0;
    let mut y = 0;

    for e in file.iter() {
        let e: Vec<_> = e.split(" ").collect();

        match e[0] {
            "forward" => x += e[1].parse::<i32>().unwrap(),
            "up" => y -= e[1].parse::<i32>().unwrap(),
            "down" => y += e[1].parse::<i32>().unwrap(),
            _ => (),
        }
    }

    println!("Part 1: {}", x * y);

    let (mut aim, mut x, mut y) = (0, 0, 0);

    for e in file.iter() {
        let e: Vec<_> = e.split(" ").collect();

        match e[0] {
            "forward" => {
                x += e[1].parse::<i32>().unwrap();
                y += aim * e[1].parse::<i32>().unwrap();
            }
            "up" => aim -= e[1].parse::<i32>().unwrap(),
            "down" => aim += e[1].parse::<i32>().unwrap(),
            _ => (),
        }
    }

    println!("Part 2: {}", x * y);
}
