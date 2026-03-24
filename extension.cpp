//% color=#00AAFF weight=100
namespace fastyield {

    // C++ の関数を TS に宣言
    //% shim=fastyield::yield_now
    declare function yield_now(): void;

    //% block="即時 yield"
    export function yieldNow(): void {
        yield_now();
    }
}
