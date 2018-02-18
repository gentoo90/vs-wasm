
/* tslint:disable */
import * as imports from './wasm_demo_imports'; // imports from wasm file
import * as wasm from './wasm_demo_wasm'; // imports from wasm file


// let slab = [];
// let slab_next = 0;

// function addHeapObject(obj) {
//     if (slab_next == slab.length)
//         slab.push(slab.length + 1);
//     const idx = slab_next;
//     const next = slab[idx];

//     slab_next = next;

//     slab[idx] = { obj, cnt: 1 };
//     return idx << 1;
// }
// export function __wbg_s_Array_new() {
//     return addHeapObject(new Array());
// }

// let stack = [];

// function getObject(idx) {
//     if ((idx & 1) === 1) {
//         return stack[idx >> 1];
//     } else {
//         const val = slab[idx >> 1];

//         return val.obj;

//     }
// }

// const __wbg_s_Array_push_target = Array.prototype.push;
// export function __wbg_s_Array_push(arg0, arg1) {
//     __wbg_s_Array_push_target.call(getObject(arg0), getObject(arg1))
// }

// function dropRef(idx) {


//     let obj = slab[idx >> 1];

//     obj.cnt -= 1;
//     if (obj.cnt > 0)
//         return;


//     // If we hit 0 then free up our space in the slab
//     slab[idx >> 1] = slab_next;
//     slab_next = idx >> 1;
// }

// function takeObject(idx) {
//     const ret = getObject(idx);
//     dropRef(idx);
//     return ret;
// }
export function range(arg0) {
    const ret = wasm.range(arg0);
    return imports.takeObject(ret);
}
// export const __wbindgen_object_drop_ref = dropRef;
// export const __wbindgen_number_new = addHeapObject;

// function getStringFromWasm(ptr, len) {
//     const buf = Buffer.from(wasm.memory.buffer).slice(ptr, ptr + len);
//     const ret = buf.toString();
//     return ret;
// }
// export const __wbindgen_throw =
//     function (ptr, len) {
//         throw new Error(getStringFromWasm(ptr, len));
//     }
//     ;

