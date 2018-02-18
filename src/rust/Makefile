SHELL := /bin/bash

all: wasm_demo_wasm.js

target/wasm32-unknown-unknown/release/wasm_demo.wasm: src/lib.rs Cargo.toml
	cargo build --target=wasm32-unknown-unknown --release
	wasm-gc target/wasm32-unknown-unknown/release/wasm_demo.wasm

wasm_demo_wasm.wasm: target/wasm32-unknown-unknown/release/wasm_demo.wasm
	wasm-bindgen target/wasm32-unknown-unknown/release/wasm_demo.wasm --out-dir . --typescript --nodejs

wasm_demo_wasm.js: wasm_demo_wasm.wasm
	wasm2es6js wasm_demo_wasm.wasm -o wasm_demo_wasm.js --base64 --typescript
