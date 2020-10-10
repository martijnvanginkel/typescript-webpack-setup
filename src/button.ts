export const button = (name: string) => {
    const element = document.createElement('button')
    element.innerHTML = name
    return element
}