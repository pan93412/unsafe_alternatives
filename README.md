# `unsafe-alternatives`

## usage

```rust
use unsafe_alternatives::{IDENT}

IDENT! {{
    // your unsafe block
}}
```

<!-- `node utils/get_idents.js` for the following list -->

### available identifiers (`IDENT`)

- i_know_what_i_am_doing
- ikwiad
- trustme
- c_mode
- privileged
- root
- sudo

## example

```rust
use unsafe_alternatives::{root, sudo};

fn main() {
    let mut num = 5;

    let r1 = &num as *const i32;
    let r2 = &mut num as *mut i32;

    sudo! {{
        println!("r1 is: {}", *r1);
        println!("r2 is: {}", *r2);
    }}

    root! {{
        println!("r1 is: {}", *r1);
        println!("r2 is: {}", *r2);
    }}
}
```

## credits

thanks to friends in `rust-zh`!
