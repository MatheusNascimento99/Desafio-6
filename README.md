# Desafio-6
Fala pessoal!

Conforme o desafio proposto, foram construídas as rotas para um aplicativo de compras, contendo  produtos, clientes, vendas, pedidos e estoque . No entanto, enfrentei um grande problema ao tentar instalar o MySQL. Como estou utilizando o computador de um amigo, e há arquivos relacionados a trabalhos antigos de MySQL em sua máquina, preferi não utilizá-lo. Diante disso, desenvolvi o projeto utilizando o MongoDB e fiz uma relação dos comandos utilizados, convertendo para o modelo NoSQL. Deixei as telas para verificação, mas caso deseja, o arquivo é [este](https://github.com/MatheusNascimento99/Desafio-6/blob/main/mysql.mk).

Abaixo, também estão os modelos do projeto de banco de dados relacionais, conforme destacado no escopo do exercício.



![image](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/78f3d7d0-7e58-4b42-8519-bada3152b2b6)
ùltimo modelo utilizado.
![image](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/29a0043e-5427-401b-9c25-d68cad040e19)


## Abaixo, segue a relação de um banco Sql para NoSql, dos comandos utilizados no projeto. 
![image](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/962bf4eb-659b-455d-9ee1-4bd90b9f2e04)
<br>
![image](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/1c93a72f-2edf-459a-bdd7-a7c7cc54e7d6)
### Segue as telas de testes utilizando Insomnia.
Teste criação de usuário, *senha criptografada*.
![Criação usuario](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/98a5dff3-53ac-481c-83e6-60daaeb30aa9)
Teste e-mail obrigatório, o mesmo ocorre com a senha.
![1 1teste campo email obrigatorio](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/438e8d48-3dde-4bf6-8a1d-a16e68b332f3)
Teste usuário já existente.
![1 2teste usuario existente](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/8292a0fb-1b68-4021-88f8-e1866b3dc39c)

Teste listar usuários.
![teste lista e ususarios cadastrados](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/0379f34a-434b-4a3d-98a5-f385693ebb45)
Teste usuários cadastrados banco de dados.
![teste ususarios cadastrados BD](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/4b60760d-1d78-4e35-866e-70fd79f75761)
Teste cadastro produto.
![teste cadastro produto](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/fe94a8e0-e6f1-4b86-88a1-8bc14469758f)
Teste listar produtos.
![5 teste lista produtos](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/6d624634-a8ad-4ede-9cbd-841274a6dabe)
Teste atualizar produtos.
![teste produto atualizado com sucesso](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/98d7e749-93a7-4228-88d0-190bd8ab26f1)
![teste atualização produto](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/bab372f7-9148-4f76-b98d-b757d4748961)
Teste falha ao atualizar.
![6 5 teste erro atualização](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/c0dd7fda-34fa-4ac2-88ed-a78aafa3ab86)
Teste atualizar produtos banco de dados.
![teste bd atualização produto](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/79b312b1-13e6-4ca2-b2a8-73d386dcd67f)
Teste cadastro pedidos.
![8 teste cadastro novo pedido](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/d1e07dec-a6a5-434d-9a11-5b475b6353b2)
Teste produto esgotado.
![4 5 teste pedido prduto esgotado](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/3118899c-ad7e-49e4-944e-1ca32dad05f9)
Teste listar pedidos.
![9 teste lista pedidos](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/111e066b-9757-46fa-a227-b9fa8f7361e4)
Teste cadastro venda.
![10 teste cadastro vendas](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/e13db794-9734-4575-b43c-8628fa888043)
Teste listar vendas.
![11 teste lista vedas](https://github.com/MatheusNascimento99/Desafio-6/assets/139829100/64e47317-eced-41ed-aa11-1b071b78be22)



