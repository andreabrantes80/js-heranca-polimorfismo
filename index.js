
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";

// const cliente1 = new Cliente("Ricardo", 11122233309);
// const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);
// const conta = new Conta(0, cliente1, 1001);

const diretor = new Diretor("Rodrigo", 10000, 12345678900);

diretor.cadastrarSenha("123456789");
const gerente1 = new Gerente("Gerente1", 5000, 123456);
gerente1.cadastrarSenha("123456");

const cliente = new Cliente("Lais", 98765432100, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente1, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


console.log(gerenteEstaLogado, diretorEstaLogado);
console.log(clienteEstaLogado);



