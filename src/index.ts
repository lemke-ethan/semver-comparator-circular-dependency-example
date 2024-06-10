import { parse, sort, maxSatisfying } from "semver"

export function parseSemVer(semVer:string){
    return parse(semVer)
}

export function sortAsc(collection: string[]) {
    return sort(collection)
}

export function getNewestVersion(collection: string[], currentVersion: string) {
    return maxSatisfying(collection, ">" + currentVersion)
}
