# Lappiz Demo - Backend (Node.js)

API REST desarrollada con Node.js y Express para la gestión de interesados en una demo de Lappiz LowCode.

##  Descripción

Este servicio permite:

* Registrar personas interesadas en una demo
* Listar las personas registradas
* Persistir los datos en un archivo JSON (sin base de datos)

---
## Tecnologías

* Node.js
* Express
* CORS
* File System (JSON)

## Estructura del proyecto

```
src/
├── routes/        # Definición de endpoints
├── controllers/   # Lógica de control (req/res)
├── services/      # Lógica de negocio
├── utils/         # Manejo de archivos
└── data/          # Persistencia en JSON
```

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

Servidor disponible en:

```
http://localhost:3000
```

---

## Endpoints

### Obtener personas

```
GET /people/getPeople
```

### Registrar persona

```
POST /people/addPerson
```

## Validaciones implementadas

* Campos obligatorios (name, email)
* Validación básica de email
* Prevención de emails duplicados

## Consideraciones

* Los datos se almacenan en un archivo JSON local
* Arquitectura basada en separación de responsabilidades

## 👩‍💻 Autor

Desarrollado por: **Heidy Vanegas Suazo**

## Nota

Este proyecto fue desarrollado como parte de una prueba técnica.
