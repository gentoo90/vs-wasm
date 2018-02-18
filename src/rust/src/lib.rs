#![feature(proc_macro)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub type Array;
    #[wasm_bindgen(constructor)]
    fn new() -> Array;
    #[wasm_bindgen(method)]
    fn push(this: &Array, item: &JsValue);
}

#[wasm_bindgen]
#[no_mangle]
pub extern fn range(number: u32) -> Array {
    let a = Array::new();
    for i in 0..number {
        a.push(&JsValue::from_f64(i as f64));
    }
    a
}
