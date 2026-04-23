# Lappiz Demo - Backend (Node.js)

API REST desarrollada con Node.js y Express para gestionar interesados en una demo.

## Descripción

Permite:

Registrar usuarios
Listar usuarios
Persistir datos en archivo JSON

## Tecnologías

Node.js
Express
JSON (persistencia)

## Instalación

npm install
npm run dev


Servidor:
http://localhost:3001

##  Endpoints

GET /getPeople
POST /addPerson

## Arquitectura

```
src/
├── routes/
├── controllers/
├── services/
├── utils/
└── data/
```

## Nota

Persistencia simple en JSON para efectos de la prueba técnica.

## Autor

Desarrollado por: Heidy Vanegas Suazo

## Licencia 

Proyecto desarrollado como parte de una prueba técnica.