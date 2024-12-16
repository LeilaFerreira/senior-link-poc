# senior-link-poc
README.md para o ProjetoSeniorLink - Aplicativo para Monitoramento da Saúde de Idosos
Este repositório contém o código-fonte do SeniorLink, um aplicativo desenvolvido para ajudar filhos e familiares a monitorar a saúde e a medicação de seus entes queridos idosos, garantindo que estejam seguros e bem cuidados mesmo à distância.

O projeto está sendo desenvolvido utilizando o Angular 15.2.0, e a solução possui diversas funcionalidades, como monitoramento de sinais vitais, alertas personalizados, histórico de saúde acessível e muito mais.

#Funcionalidades do SeniorLink

Monitoramento em Tempo Real: Acompanhe sinais vitais, como pressão arterial, temperatura e batimentos cardíacos.
Alertas Personalizados: Notificações automáticas para medicação, exames e consultas.
Interação Direta com Profissionais de Saúde: Agende consultas e se comunique diretamente com médicos.
Facilidade de Uso: Interface simples e intuitiva para idosos e seus familiares.
Histórico de Saúde Acessível: Armazenamento seguro e organizado de dados médicos, com fácil acesso para familiares e médicos.
Análises Preditivas com IA: Identificação de padrões e alertas de saúde utilizando inteligência artificial.

#Pré-requisitos
Antes de começar, certifique-se de que você tem os seguintes itens instalados no seu computador:

Node.js (versão >= 15.2.0)
npm (gerenciador de pacotes do Node.js) - normalmente vem junto com o Node.js
Angular CLI (Command Line Interface para Angular)
Instalar o Node.js e npm
Você pode baixar o Node.js aqui. A instalação do Node.js inclui o npm, o que facilita a instalação de pacotes do JavaScript.

#Instalar o Angular CLI
Caso não tenha o Angular CLI instalado, use o comando abaixo para instalá-lo globalmente:

bash
Copy code
npm install -g @angular/cli
Instalação do Projeto
Siga os passos abaixo para clonar e configurar o ambiente de desenvolvimento local para o projeto SeniorLink.

1. Clonar o Repositório
Primeiro, clone o repositório para o seu computador: bash
Copy code git clone https://github.com/seu-usuario/senior-link-poc.git

2. Instalar as Dependências
Acesse o diretório do projeto:

bash
Copy code
cd seniorlink
Agora, instale todas as dependências necessárias com o comando:

bash
Copy code
npm install
Este comando irá instalar todos os pacotes listados no package.json que são necessários para rodar o projeto.

Executando o Projeto
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento e visualizar o aplicativo em seu navegador.

Rodando o Projeto Localmente
Para rodar o servidor de desenvolvimento, execute o comando:

bash
Copy code
ng serve
Ou, caso você queira rodar em uma porta diferente, você pode especificar a porta, como exemplo:

bash
Copy code
ng serve --port 4200
Após isso, o aplicativo estará disponível em http://localhost:4200 (ou a porta que você escolheu).

Verificando o Projeto no Navegador
Abra seu navegador e vá para o endereço:

arduino
Copy code
http://localhost:4200
Isso deve carregar a aplicação SeniorLink no seu navegador.

Scripts de Desenvolvimento
Aqui estão alguns comandos úteis que você pode usar para interagir com o projeto:

Rodar os Testes
Se quiser rodar os testes unitários, execute:

bash
Copy code
ng test
Rodar a Build para Produção
Para gerar uma versão de produção do seu projeto (com arquivos otimizados), use:

bash
Copy code
ng build --prod
Isso irá gerar os arquivos minificados e prontos para deploy na pasta dist/.

Estrutura do Projeto
O projeto segue a estrutura padrão do Angular, com os seguintes diretórios principais:

src/app: Contém os componentes principais da aplicação.
src/assets: Contém arquivos estáticos como imagens e fontes.
src/environments: Contém os arquivos de configuração de ambiente, como as variáveis de ambiente para desenvolvimento e produção.
src/styles.css: Arquivo de estilo global.
Contribuindo para o Projeto
Se você deseja contribuir para o desenvolvimento do SeniorLink, siga estas etapas:

Faça um fork do repositório.
Crie uma branch com suas alterações: git checkout -b minha-branch.
Realize suas alterações e faça o commit: git commit -am 'Adicionando nova funcionalidade'.
Envie a branch para o seu fork: git push origin minha-branch.
Abra um Pull Request explicando as alterações feitas.
Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

Agradecimentos
Agradecemos pelo seu interesse em contribuir para o projeto SeniorLink. Se você tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue no repositório ou enviar um pull request.

Equipe SeniorLink 🧑‍⚕️👵
