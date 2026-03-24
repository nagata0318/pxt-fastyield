#include "pxt.h"

namespace fastyield {
    //% shim=fastyield::yield_now
    void yield_now() {
        fiber_sleep(0);
    }
}
