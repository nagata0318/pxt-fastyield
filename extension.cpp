#include "pxt.h"

namespace fastyield {
    // JavaScript から呼ばれる関数
    void yield_now() {
        fiber_sleep(0);  // ← 最短の協調的yield！
    }
}
