# Inicio proyecto express
Grupo 1 
### **Aplicación de Compra y Venta de Artesanías**

### **Descripción del Proyecto**

El proyecto consiste en el desarrollo de una **Aplicación de Compra y Venta de Artesanías**. Esta aplicación tiene como objetivo conectar a artesanos de **Bucaramanga** con compradores interesados en productos artesanales únicos y auténticos. La plataforma será solicitada y gestionada por **Campuslands**, una empresa comprometida con la promoción y comercialización de productos locales, artesanales y tecnológicos.

**Problema:**

A pesar de la rica tradición artesanal en Bucaramanga, los artesanos locales enfrentan dificultades significativas para comercializar sus productos de manera efectiva. Entre los principales problemas se encuentran:

1. *Limitada Visibilidad y Alcance*
2. *Dificultades en la Gestión de Ventas*
3. *Falta de Acceso a Recursos de Comercialización*
4. *Comunicación Ineficiente con Compradores*

### **Características Principales**

1. **Gestión de Usuarios**
- *Registro e Inicio de Sesión*
   
- **Perfiles de Usuario (Compradores):**
   - **Actualización de Información*
  
   - *Actualización de Foto de Perfil*
  
    - *Favoritos de Artesanías*

    - *Favoritos de Talleres*
     
  - *Historial de Compras*
   
  - *Talleres Inscritos*
     
   - *Lista de Cupones*
  
   - *Chat con Artesanos*

2. **Gestión de Productos**

   - *Listado de Productos*

   - *Visualización de Productos*

   - *Cupones de Descuento*

3. **Búsqueda y Filtrado**

   - *Búsqueda de Productos*

   -**Filtrado por Categorías*
     
   - *Filtrado de Talleres*
   
4. **Carrito y Proceso de Compra**

   - *Carrito de Compras*

   - *Aplicación de Cupones:*

   - *Proceso de Pago*
   
5. **Comunicación**
   - *Mensajes Directos*

   
6. **Talleres Artesanales**

   - *Perfil de Talleres:*


# Cómo Usar Este Proyecto

Para poder utilizar este proyecto, sigue los siguientes pasos:

1. **Instalar dependencias**: 
   Instala todas las dependencias requeridas ejecutando el siguiente comando en la terminal:

   ```bash
   npm i
   ```

   Este comando instalará todas las dependencias listadas en el archivo `package.json`.

3. **Ejecutar el proyecto**:
   Después de instalar las dependencias, inicia el proyecto con el siguiente comando:

   ```bash
   npm run initproyect
   ```

   Esto ejecutará el servidor y el entorno de desarrollo, iniciando el programa.

4. **Acceder a la aplicación**:
   Una vez que el programa esté en ejecución, dirígete al enlace proporcionado por Vite en la terminal para visualizar la aplicación en tu navegador. Normalmente, este enlace será algo similar a:

   ```bash
    http://localhost:5173/
   ```


### Documentacion de las apis del backend

## Api de usuarios

**Base URL:** 
`http://localhost:3000/user/`

Esta API permite gestionar diferentes funcionalidades relacionadas con el usuario, incluyendo el manejo de productos en el carrito, compras, favoritos, cupones, y talleres (workshops). A continuación, se detallan las rutas disponibles:

---

**GET /favorite/check/:id**

- **Descripción**: Verifica si un producto con el `id` especificado está en la lista de favoritos del usuario.
- **Parámetros**:
  - `:id` (string): ID del producto a verificar.

---

**GET /cart**

- **Descripción**: Obtiene todos los artículos del campo `carrito` del usuario.
- **Parámetros**: Ninguno.

---

**GET /coupons**

- **Descripción**: Obtiene todos los cupones asociados con el usuario.
- **Parámetros**: Ninguno.

---

**GET /purchases**

- **Descripción**: Obtiene todas las compras realizadas por el usuario.
- **Parámetros**: Ninguno.

---

**GET /favorites/workshops**

- **Descripción**: Obtiene todos los talleres favoritos del usuario.
- **Parámetros**: Ninguno.

---

**GET /subscribed/workshops**

- **Descripción**: Obtiene todos los talleres en los que el usuario está inscrito.
- **Parámetros**: Ninguno.

---

**GET /favorites/products/details**

- **Descripción**: Obtiene los detalles de todos los productos favoritos del usuario.
- **Parámetros**: Ninguno.

---

**GET /cart/details**

- **Descripción**: Obtiene los detalles de todos los productos en el carrito del usuario, incluyendo información sobre los talleres asociados.
- **Parámetros**: Ninguno.

---

**GET /purchases/details**

- **Descripción**: Obtiene los detalles de todas las compras del usuario, incluyendo información sobre los talleres asociados.
- **Parámetros**: Ninguno.

---

**GET /favorites/workshops/details**

- **Descripción**: Obtiene los detalles de todos los talleres favoritos del usuario.
- **Parámetros**: Ninguno.

---

**GET /subscribed/workshops/details**

- **Descripción**: Obtiene los detalles de todos los talleres en los que el usuario está inscrito.
- **Parámetros**: Ninguno.

---

**GET /coupons/details**

- **Descripción**: Obtiene los detalles de todos los cupones asociados con el usuario.
- **Parámetros**: Ninguno.

---

**POST /favorites/products/:id**

- **Descripción**: Agrega un producto con el `id` especificado a la lista de favoritos del usuario.
- **Parámetros**:
  - `:id` (string): ID del producto a agregar.

---

**POST /cart/:id**

- **Descripción**: Agrega un producto con el `id` especificado al carrito del usuario.
- **Parámetros**:
  - `:id` (string): ID del producto a agregar.

---

**POST /purchases/:id**

- **Descripción**: Agrega un producto con el `id` especificado a la lista de compras del usuario.
- **Parámetros**:
  - `:id` (string): ID del producto a agregar.

---

**POST /favorites/workshops/:id**

- **Descripción**: Agrega un taller con el `id` especificado a la lista de talleres favoritos del usuario.
- **Parámetros**:
  - `:id` (string): ID del taller a agregar.

---

**POST /subscribed/workshops/:id**

- **Descripción**: Agrega un taller con el `id` especificado a la lista de talleres inscritos del usuario.
- **Parámetros**:
  - `:id` (string): ID del taller a agregar.

---

**POST /coupons/:id**

- **Descripción**: Agrega un cupón con el `id` especificado a la lista de cupones del usuario.
- **Parámetros**:
  - `:id` (string): ID del cupón a agregar.

---

**DELETE /favorites/products/:id**

- **Descripción**: Elimina un producto con el `id` especificado de la lista de favoritos del usuario.
- **Parámetros**:
  - `:id` (string): ID del producto a eliminar.

---

**DELETE /cart/:id**

- **Descripción**: Elimina un producto con el `id` especificado del carrito del usuario.
- **Parámetros**:
  - `:id` (string): ID del producto a eliminar.

---

**DELETE /favorites/workshops/:id**

- **Descripción**: Elimina un taller con el `id` especificado de la lista de talleres favoritos del usuario.
- **Parámetros**:
  - `:id` (string): ID del taller a eliminar.

---

**DELETE /subscribed/workshops/:id**

- **Descripción**: Elimina un taller con el `id` especificado de la lista de talleres inscritos del usuario.
- **Parámetros**:
  - `:id` (string): ID del taller a eliminar.

---

**DELETE /coupons/:id**

- **Descripción**: Elimina un cupón con el `id` especificado de la lista de cupones del usuario.
- **Parámetros**:
  - `:id` (string): ID del cupón a eliminar.

---

## Validaciones

- Las rutas que requieren un parámetro `:id` validan que dicho parámetro sea un ID válido.
- Para todas las rutas de `POST` y `DELETE`, se valida que el `id` proporcionado sea correcto y esté asociado al usuario.

---

### Notas adicionales
- Las rutas que obtienen detalles (`/details`) proveen información extendida de los productos o talleres, mostrando no solo el `id` sino también otros datos relevantes como nombre, descripción, precio, etc.



## Api de productos

**Base URL:**
`http://localhost:3000/product/`

Esta API permite gestionar los productos, incluyendo la obtención de productos por ID, por categoría, la obtención de todos los productos y la actualización de productos. A continuación, se detallan las rutas disponibles:

---

 **GET /:id**

- **Descripción**: Obtiene la información de un producto específico basado en el `id` proporcionado.
- **Parámetros**:
  - `:id` (string): ID del producto que se desea obtener.
- **Validaciones**:
  - Se valida que el `id` proporcionado sea un ID de producto válido.
  
---

 **GET /find/:category**

- **Descripción**: Obtiene una lista de productos pertenecientes a una categoría específica.
- **Parámetros**:
  - `:category` (string): Nombre de la categoría por la que se desea filtrar los productos.
- **Validaciones**:
  - Se valida que la `category` proporcionada sea una categoría válida dentro del sistema.

---

 **GET /**

- **Descripción**: Obtiene una lista de todos los productos disponibles en el sistema.
- **Parámetros**: Ninguno.

---

 **PUT /:id**

- **Descripción**: Actualiza la información de un producto específico basado en el `id` proporcionado.
- **Parámetros**:
  - `:id` (string): ID del producto que se desea actualizar.
  - **Body** (JSON): Se debe proporcionar un cuerpo en formato JSON con los datos del producto a actualizar, que pueden incluir:
    - `nombre`: Nombre del producto.
    - `descripcion`: Descripción del producto.
    - `precio`: Precio del producto.
    - `categoria`: Categoría a la que pertenece el producto.
    - Otros campos que sean relevantes para el producto.
- **Validaciones**:
  - Se valida que el `id` proporcionado sea un ID de producto válido.
  - Se validan los datos de actualización proporcionados en el cuerpo de la solicitud.

---

## Validaciones

- Para las rutas que incluyen el parámetro `:id` o `:category`, se aplican validaciones para asegurarse de que estos parámetros sean correctos.
- En las rutas de actualización (`PUT`), se valida que los datos del cuerpo de la solicitud contengan información válida para actualizar el producto.

---

### Notas adicionales

- La respuesta de la ruta `/` (GET) incluye un listado de todos los productos con sus respectivos detalles (nombre, precio, descripción, etc.).
- La ruta `/find/:category` permite filtrar productos por categorías específicas, devolviendo todos los productos que pertenecen a esa categoría.
- Las actualizaciones de productos deben cumplir con las validaciones establecidas y seguir el formato de datos requerido por el sistema.


## Api de talleres

**Base URL:**
`http://localhost:3000/workshops/`

Esta API permite gestionar la obtención de todos los workshops (talleres) disponibles y los productos asociados a un workshop específico. A continuación, se detallan las rutas disponibles:

---

 **GET /**

- **Descripción**: Obtiene una lista de todos los workshops (talleres) disponibles en el sistema.
- **Parámetros**: Ninguno.
- **Respuesta**:
  - Una lista de objetos de workshops con datos como:
    - `nombre`: Nombre del workshop.
    - `descripcion`: Breve descripción del workshop.
    - `fecha`: Fecha en que se realizará el workshop.
    - `ubicacion`: Ubicación donde se llevará a cabo.
    - Otros detalles relevantes del workshop.

 **Código de estado**:
  - `200 OK`: Si la solicitud se completa con éxito y retorna la lista de workshops.
  - `500 Internal Server Error`: Si ocurre un error en el servidor.

---

**GET /:workshopId/:search?**

- **Descripción**: Obtiene una lista de productos asociados a un workshop específico.
- **Parámetros**:
  - `workshopId` (requerido): El identificador único del workshop del que se desean obtener los productos.
  - `search` (opcional): Un término de búsqueda que permite filtrar los productos según el nombre o la descripción.

- **Respuesta**:
  - Una lista de productos asociados al workshop, con datos como:
    - `nombre`: Nombre del producto.
    - `descripcion`: Descripción del producto.
    - `precio`: Precio del producto.
    - Otros detalles relevantes del producto.

- **Código de estado**:
  - `200 OK`: Si la solicitud se completa con éxito y retorna los productos del workshop.
  - `404 Not Found`: Si no se encuentra un workshop con el `workshopId` proporcionado.
  - `500 Internal Server Error`: Si ocurre un error en el servidor.

---

### Notas adicionales:

- La ruta `GET /:workshopId/:search?` es flexible, permitiendo tanto la obtención de todos los productos de un workshop específico como la aplicación de filtros para buscar productos relacionados.
- La ruta raíz `GET /` proporciona una manera sencilla de listar todos los workshops disponibles sin ningún filtro.

