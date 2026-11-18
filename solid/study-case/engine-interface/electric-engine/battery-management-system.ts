import Battery from "../../storage-interface/battery/battery"
import Electrons from "../../storage-interface/battery/electrons"

class BatteryManagementSystem {
    getBattery(): Battery {
        return new Battery(new Electrons())
    }
}

export default BatteryManagementSystem
