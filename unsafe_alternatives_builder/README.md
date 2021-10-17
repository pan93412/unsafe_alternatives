# unsafe_alternatives_builder

## usage

```rust
unsafe_syntax_builder!(keyword);
```

## example

```rust
use unsafe_alternatives_builder::unsafe_syntax_builder;

fn main() {
    let mut num = 5;

    let r1 = &num as *const i32;
    let r2 = &mut num as *mut i32;

    unsafe_syntax_builder!(test);
    test! {{
        println!("r1 is: {}", *r1);
        println!("r2 is: {}", *r2);
    }}
}
```
