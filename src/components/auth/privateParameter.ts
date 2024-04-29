export const encodeParameter = (parameter: number | string) => {
    // const parameterToString = String(parameter).split("").join()
    // const encodedParameter = encodeURIComponent(parameterToString);
    // return encodedParameter
    return btoa(String(parameter));

}

export const decodeParameter = (parameter: string | number) => {
    const encodedValue = encodeParameter(parameter)
    const decoded = decodeURIComponent(encodedValue).split(",").join("")
    return Number(decodeURIComponent(decoded).split(",").join(""))


    // const decodedValue = Number(encodedValue.split(",").join(""))
    // return decodeURIComponent(decodedValue)
}