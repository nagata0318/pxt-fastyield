//% color=#00AAFF weight=100
namespace fastyield {
    //% block="即時 yield"
    export function yieldNow(): void {
        yield_now();   // ← C++ 関数名と一致
    }

    // C++ の関数を宣言
    //% shim=fastyield::yield_now
    declare function yield_now(): void;
}
