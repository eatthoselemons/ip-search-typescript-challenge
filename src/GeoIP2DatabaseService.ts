import {Address4, Address6} from "ip-address";

class GeoIP2DatabaseService implements GeoLocationService, Service {
    getLocationForIp(ip: Address4 | Address6): string {
        // TODO
    }

    setup() {

    }
}