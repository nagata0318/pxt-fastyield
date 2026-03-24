//% color=#00AAFF weight=100
//% block="高速yield"
namespace fastyield {
    //% block="即時 yield"
    export function yieldNow(): void {
        (fastyield as any).yield_now();
    }
}
