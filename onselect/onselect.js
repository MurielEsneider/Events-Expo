function copyToClipboard(input) {
    input.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}