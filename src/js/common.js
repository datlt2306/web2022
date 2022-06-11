export function render(element, content) {
    const idElement = document.getElementById(element);
    if (!idElement) return;

    idElement.innerHTML = content;
}
