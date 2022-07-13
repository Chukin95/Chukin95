#controlador es el intermediario entre la vista y el modelo
# aqui ocurre la logica del programa

from app import *
from python.modelos.categoria_modelo import *

@app.route('/categorias',methods=['GET'])
def get_Categorias():
    all_categorias=Categoria.query.all()   # es una lista
    result=categorias_schema.dump(all_categorias)
    print(result)
    return jsonify(result)
 
@app.route('/categorias/<id>',methods=['GET'])
def get_categoria(id):
    categoria=Categoria.query.get(id)
    return categoria_schema.jsonify(categoria)

@app.route('/categorias', methods=['POST']) # crea ruta o endpoint
def create_categoria():
    #print(request.json)  # request.json contiene el json que envio el cliente
    descripcion=request.json['descripcion']
    
    new_categoria=Categoria(descripcion)
    db.session.add(new_categoria)
    db.session.commit()
    return categoria_schema.jsonify(new_categoria)


@app.route('/categorias/<id>' ,methods=['PUT'])
def update_categoria(id):
    categoria=Categoria.query.get(id)   
    descripcion=request.json['descripcion']
    categoria.descripcion=descripcion    
    db.session.commit()
    return categoria_schema.jsonify(categoria)
 
@app.route('/categorias/<id>',methods=['DELETE'])
def delete_categoria(id):
    categoria=Categoria.query.get(id)
    db.session.delete(categoria)
    db.session.commit()
    return categoria_schema.jsonify(categoria)
