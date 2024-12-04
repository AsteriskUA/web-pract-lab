function clearAll() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.textContent = '';
    });
}
