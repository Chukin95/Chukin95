# controlador es el intermediario entre la vista y el modelo
# aqui ocurre la logica del programa
from app import *
from python.modelos.producto_modelo import *
from sqlalchemy import desc, asc


@app.route('/productos', methods=['GET'])
def get_Productos():
    productos_filtrados = Producto.query.all()   # es una lista
    result = productos_schema.dump(productos_filtrados)
    return jsonify(result)


@app.route('/productos/<id>', methods=['GET'])
def get_producto(id):
    producto = Producto.query.get(id)
    return producto_schema.jsonify(producto)


@app.route('/productos', methods=['POST'])  # crea ruta o endpoint
def create_producto():
    # print(request.json)  # request.json contiene el json que envio el cliente
    nombre = request.json['nombre']
    descripcion = request.json['descripcion']
    categoria = request.json['categoria']
    precio = request.json['precio']
    stock = request.json['stock']
    imagen = request.json['imagen']
    descuento = request.json['descuento']

    new_producto = Producto(nombre, descripcion, categoria,
                            precio, stock, imagen, descuento)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)


@app.route('/productos/<id>', methods=['PUT'])
def update_producto(id):
    producto = Producto.query.get(id)

    nombre = request.json['nombre']
    descripcion = request.json['descripcion']
    categoria = request.json['categoria']
    precio = request.json['precio']
    stock = request.json['stock']
    imagen = request.json['imagen']
    descuento = request.json['descuento']

    producto.nombre = nombre
    producto.descripcion = descripcion
    producto.categoria = categoria
    producto.precio = precio
    producto.stock = stock
    producto.imagen = imagen
    producto.descuento = descuento

    db.session.commit()
    return producto_schema.jsonify(producto)


@app.route('/productos/<id>', methods=['DELETE'])
def delete_producto(id):
    producto = Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)


@app.route('/productos/filtros', methods=['GET'])
def get_ProductosFiltrados():  # filtros

    categoria = request.args.get('categoria')
    filtrar = request.args.get('filtrar')
    orden = request.args.get('orden')

    if categoria == "" or categoria == None:
        categoria = 'Ninguna'
    if filtrar == "" or filtrar == None:
        filtrar = 'Ninguno'
    if orden == "" or orden == None:
        orden = 'Ninguno'

    # si no se filtra nada, se muestran todos los productos
    if categoria == 'Ninguna' and filtrar == 'Ninguno' and orden == 'Ninguno':
        productos_filtrados = Producto.query.all()

    # si solo se categoriza, se muestran los productos de esa categoria
    elif categoria != 'Ninguna' and filtrar == 'Ninguno' and orden == 'Ninguno':
        productos_filtrados = Producto.query.filter_by(
            categoria=categoria).all()

    # si solo filtra, se muestran los productos que contengan ese filtro de manera ascendente
    elif categoria == 'Ninguna' and filtrar != 'Ninguno' and orden == 'Ninguno':
        productos_filtrados = Producto.query.order_by(asc(filtrar)).all()

    # si solo se ordena, se muestran los productos ordenados por precio
    elif categoria == 'Ninguna' and filtrar == 'Ninguno' and orden != 'Ninguno':
        if orden == 'ASC':
            productos_filtrados = Producto.query.order_by(
                asc(Producto.precio)).all()
        else:
            productos_filtrados = Producto.query.order_by(
                desc(Producto.precio)).all()

    # si se categoriza, filtra y se ordena, se muestran los productos de esa categoria que contengan ese filtro y ordenados por precio
    elif categoria != 'Ninguna' and filtrar != 'Ninguno' and orden != 'Ninguno':
        if orden == 'ASC':
            productos_filtrados = Producto.query.filter_by(
                categoria=categoria).order_by(asc(filtrar)).all()
        else:
            productos_filtrados = Producto.query.filter_by(
                categoria=categoria).order_by(desc(filtrar)).all()

    # si se filtra y se ordena, se muestran los productos que contengan ese filtro y ordenados por el filtro
    elif categoria == 'Ninguna' and filtrar != 'Ninguno' and orden != 'Ninguno':  # si se filtra y se ordena
        if orden == 'ASC':
            productos_filtrados = Producto.query.order_by(asc(filtrar)).all()
        else:
            productos_filtrados = Producto.query.order_by(desc(filtrar)).all()

    # si se categoriza y se ordena, se muestran los productos de esa categoria ordenados por el precio
    elif categoria != 'Ninguna' and filtrar == 'Ninguno' and orden != 'Ninguno':
        if orden == 'ASC':
            productos_filtrados = Producto.query.filter_by(
                categoria=categoria).order_by(asc(Producto.precio)).all()
        else:
            productos_filtrados = Producto.query.filter_by(
                categoria=categoria).order_by(desc(Producto.precio)).all()

    # si se categoriza y se filtra, se muestran los productos de esa categoria
    elif categoria != 'Ninguna' and filtrar != 'Ninguno' and orden == 'Ninguno':
        productos_filtrados = Producto.query.filter_by(
            categoria=categoria).all()

    # sino, se muestran todos los productos
    else:
        productos_filtrados = Producto.query.all()

    resultado = productos_schema.dump(productos_filtrados)

    return jsonify(resultado)
