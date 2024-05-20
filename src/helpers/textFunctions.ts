
export function encodeText(text: string) {
     // Reemplazar los saltos de línea con su valor codificado
  var mensajeSinSaltosDeLinea = text.replace(/\n/g, '%0A');
  // Codificar el mensaje modificado
  return encodeURIComponent(mensajeSinSaltosDeLinea);
  }