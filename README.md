# LYR Inmobiliaria – Sitio Web & Plataforma de Gestión

## 📌 Descripción General del Proyecto

**Nombre del proyecto:** LYR Inmobiliaria  
**Tipo:** Sitio web institucional + catálogo de propiedades  
**Estado:** En desarrollo avanzado

Este proyecto consiste en el desarrollo de un sitio web moderno para una inmobiliaria, orientado a la presentación profesional de propiedades en venta y alquiler, con un sistema de contacto integrado y un panel de gestión de contenido basado en **Strapi CMS**.

---

## 🎯 Objetivos del Proyecto

- Contar con una presencia web profesional y moderna
- Centralizar la información de propiedades en un solo sistema
- Facilitar el contacto con potenciales clientes
- Automatizar la recepción de consultas
- Permitir escalabilidad futura del sistema

---

## 🧰 Stack Tecnológico

### Frontend

- React + Vite
- Tailwind CSS
- React Router
- React Icons

### Backend / CMS

- Strapi (Node.js)
- Base de datos: SQLite / PostgreSQL (según entorno)
- Plugin Email (SMTP – Nodemailer)

### Infraestructura

- Frontend: Netlify
- Backend: VPS Hostinger

---

## 🏗️ Arquitectura General del Sistema

Usuario
↓
Frontend React (Netlify)
↓
API REST – Strapi
↓
Base de datos

\*Envío automático de emails

---

## ⚙️ Funcionalidades Implementadas

- Listado de propiedades
- Ficha individual de propiedad
- Estados de publicación (Activo / Pausado / Oculto)
- Formulario de contacto general
- Formulario de consulta por propiedad
- Envío automático de emails mediante lifecycles de Strapi
- Botón de contacto directo por WhatsApp
- Chatbot FAQ basado en reglas
- Diseño responsive (desktop / mobile)

---

## ✉️ Gestión de Mensajes y Automatización

Las consultas realizadas desde el sitio web se almacenan en Strapi como registros de tipo **Mensaje**.

Se implementó un lifecycle `afterCreate` que:

- Detecta el origen del mensaje (contacto, propiedad, tasación)
- Genera dinámicamente el contenido del correo
- Envía el email automáticamente al administrador

Esto permite una gestión centralizada y ordenada de todas las consultas.

---

## 🤖 Chatbot de Atención Inicial (FAQ)

El sitio cuenta con un chatbot de atención inicial basado en reglas que:

- Responde preguntas frecuentes mediante palabras clave
- Reduce la carga de consultas repetitivas
- Redirige al usuario a WhatsApp si necesita atención personalizada

---

## 📊 Estado Actual del Proyecto

- Frontend: **90% completado**
- Backend funcional y probado
- Integraciones de formularios y mensajería: completadas

### Pendiente

- Mejora de caracteristicas (Filtros, botones de limpieza, paginas de carga de datos)
- Definición de hosting para backend
- Compra de dominio
- Deploy final en producción

---

## 🚀 Próximas Fases

### Fase de Implementación

- Configuración de hosting
- Publicación del backend
- Vinculación con dominio oficial

### Fase de Lanzamiento

- Pruebas finales
- Ajustes de contenido
- Publicación pública del sitio

### Fase Evolutiva (opcional)

- Filtros avanzados
- Métricas de visitas
- Autenticación de usuarios
- Panel de estadísticas

---

## 🔗 Enlace de Previsualización

**Versión de prueba:**  
👉 https://lyrinmobiliaria.netlify.app/

---

## 🛠️ Instalación y Puesta en Marcha (Entorno Local)

Esta sección describe el paso a paso para levantar el proyecto en un entorno local, ya sea para desarrollo, mantenimiento o replicación en otro equipo.

### 📋 Requisitos Previos

Asegurarse de tener instaladas las siguientes herramientas:

- Node.js >= 18.x
- npm o yarn
- Docker y Docker Compose
- Git

## 📥 1. Clonar el Repositorio

```bash
git clone https://github.com/USUARIO/REPO.git
cd REPO
```

## 2. Instalación y ejecución del Frontend

```bash
cd frontend
npm i
npm run dev
```

## 3. Instalación de Strapi (Backend)

```bash
cd backend
npm install
```

Crear el archivo de variables de entorno:

```bash
cp .env.example .env
```

Configurar las variables necesarias (base de datos, email, etc.).

## 4. Base de Datos PostgreSQL (Docker)

Desde la raíz del proyecto o carpeta /docker:

```bash
docker-compose up -d
```

# 5. Conexión de Strapi con PostgreSQL

En el archivo:

```bash
/config/database.js
```

Configurar:
Host
Puerto
Usuario
Contraseña
Nombre de la base de datos

Ejemplo:

```bash
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
    },
  },
});
```

# 6. Inicialización de la Base de Datos

Restaurar Backup
Si existe un backup .sql:

```bash
docker exec -i postgres_container psql -U usuario dbname < backup.sql
```

# 7. Configuración Inicial de Strapi

Crear usuario administrador
Configurar permisos públicos (Roles & Permissions)
Publicar contenidos necesarios
Configurar plugin de Email (SMTP)

---

## 👨‍💻 Responsable del Desarrollo

**Nombre:** Alex A bazila
**Rol:** Desarrollo Frontend & Backend
**Tecnologías:** React, Strapi, Node.js

---

📌 _Este documento se actualizará a medida que el proyecto avance y se implementen nuevas funcionalidades._

```

```
