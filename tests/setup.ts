import "@testing-library/jest-dom/vitest";

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */

//https://stackoverflow.com/questions/41366380/matchmedia-not-present-when-testing-create-react-app-component-which-contain-rea
global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}