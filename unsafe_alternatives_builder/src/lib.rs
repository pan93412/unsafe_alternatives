use proc_macro::TokenStream;
use quote::{quote};

#[proc_macro]
pub fn ident(input: TokenStream) -> TokenStream {
    let ident = syn::parse_macro_input!(input as syn::Ident);
    
    let quote = quote! {
        #[macro_export]
        macro_rules! #ident {
            ($l:block) => { unsafe { $l } };
        }
    };

    quote.into()
}
