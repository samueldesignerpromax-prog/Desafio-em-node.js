const qrcode = require("qrcode-terminal");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== GERADOR DE QR CODE PARA E-COMMERCE ===");

rl.question("Digite o link do produto: ", (link) => {

  qrcode.generate(link, { small: true });

  console.log("\nQR Code gerado com sucesso!");
  rl.close();

});
