## Crie todos os testes possíveis para a feature abaixo:

Preciso que no meu programa cadastre uma categoria para meus produtos caso ela ainda não exista, este cadastro deve ter um nome de no mínimo 10 caracteres e uma descrição opcional de no máximo 50 caracteres. Para poder cadastrar ou excluir um categoria é preciso estar logado.

# Login (login/email e senha)

    - Sucesso
      - Com usuário e senha válidos
    - Falha
      - Login inválido
      - Senha inválida
      - E-mail é inválido**
      - Erro no servidor (conexão, banco, etc)

# Cadastrar categoria (nome, descrição)

    - Sucesso
      OK - Com dados válidos (nome e descrição preenchidos, e logado)
      OK - Com dados válidos, mas sem descrição
    - Falha
      - Caso ela já exista
      - Nome mínimo de 10 caracteres e máximo 100 caracteres
      - Descrição máxima de 10 caracteres
      - Preciso estar logado
      - Erro no servidor (conexão, banco, etc)

# Excluir

    - Sucesso
      - Com dados válidos
    - Falha
      - ID/UID que não exista no banco
      - ID/UID em branco**
      - ID/UID em formato inválido**
      - Preciso estar logado
      - Erro no servidor (conexão, banco, etc)
