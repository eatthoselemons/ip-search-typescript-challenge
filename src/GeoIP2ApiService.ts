class GeoIP2ApiService implements GeoLocationService, Service {
    constructor(private useCache: boolean = true) {

    }

    getLocationForIp(ip: Address4 | Address6): string {
        // TODO
    }

    setup() {

    }
}