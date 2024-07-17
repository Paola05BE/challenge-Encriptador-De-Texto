# Encriptador de Texto

**Encriptador de Texto** es una aplicación web y version movile que permite a los usuarios encriptar y desencriptar texto utilizando técnicas simples de sustitución de caracteres.

## Descripción del Proyecto

Este proyecto está organizado en dos columnas para la vista, para la version movile solo se oculta la imagen de la columna dos, del mensaje inicial:

### Columna 1

- **Campo de Texto:** Aquí el usuario puede ingresar el texto que desea encriptar o desencriptar.
- **Botón de Encriptar:** Transforma el texto ingresado en su versión encriptada.
- **Botón de Desencriptar:** Convierte el texto encriptado de vuelta a su forma original.

### Columna 2

- **Mensaje Inicial:** Muestra un mensaje indicando que aún no se ha ingresado un texto.
- **Resultado:** Muestra el texto encriptado o desencriptado después de hacer clic en los botones correspondientes.
- **Botón de Copiar:** Permite copiar el texto encriptado o desencriptado al portapapeles.

## Cómo Funciona

1. **Ingreso de Texto:** El usuario escribe el texto en el campo de texto de la Columna 1, texto que no puede estar vacio, debe tener solo letras minusculas, sin acentos y sin caracteres especiales.
2. **Encriptar Texto:** Al hacer clic en el botón de encriptar, el texto se convierte según reglas predefinidas:
   - **e** → **enter**
   - **i** → **imes**
   - **a** → **ai**
   - **o** → **ober**
   - **u** → **ufat**
3. **Desencriptar Texto:** Al hacer clic en el botón de desencriptar, el texto encriptado se convierte de vuelta a su forma original.
4. **Copiar Texto:** Se puede copiar el texto encriptado o desencriptado al portapapeles para usarlo en el campo de texto de la Columna 1.

## Instalación

1. **Clona el Repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/encriptador-de-texto.git
