### Ambiente

* Node
* Yarn (pode ser alterado para npm, mas vai precisar alterar os scripts também)
* Docker com docker-compose
* Insomnia ou Postman

### Iniciando 

```bash
yarn install # ou npm install para instalar as dependencias na maquina para modo desenvolvedor

----

docker-compose up
# levantará o docker com o banco de dados e a aplicação.

yarn typeorm migration:run
# Ele aplicará as migrations do banco
```

### Rota e Formato json esperado:

* Cliente ( GET | POST | PUT | DELETE ):

``` bash
>> http://localhost:3000/users

>> POST:
# {
#	"name": "",
#	"email": "",
#	"tel": ,
#	"cpf":
# }

>> PUT:
# {
#	"id": "",
#	"email": "",
#	"tel": 
# }

>> DELETE:
# {
#	"id": ""
# }
```

* Experiencia ( GET | POST | PUT ):

``` bash
>> http://localhost:3000/experience

>> POST:
# {
#	"id_client": "",
#	"loja": "",
#	"colaborador": "",
#	"date": "",
#	"valor": 
# }

>> PUT:
# {
#	"id": "",
#	"loja": "",
#	"colaborador": "",
#	"date": "",
#	"valor": 
# }
```


* Avaliação Experiencia ( POST | GET ):

``` bash
>> http://localhost:3000/assessment

>> POST:
# {
#	"id_client": "",
#	"id_experience": "",
#	"note": ,
#	"comment": ""
# }
```