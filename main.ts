//% color=#00AAFF weight=100
namespace fastyield {

    // C++ 関数を TS に宣言（shim名は C++ と完全一致）
    //% shim=fastyield::yield_now
    declare function yield_now(): void;

    //% block="即時 yield"
    export function yieldNow(): void {
        yield_now();
    }
}
