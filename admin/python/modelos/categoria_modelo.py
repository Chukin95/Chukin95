from app import db,ma

class Categoria(db.Model):  # defino la tabla
    id=db.Column(db.Integer, primary_key=True)
    descripcion=db.Column(db.String(100))
    
    def __init__(self,descripcion):
        self.descripcion=descripcion
    
    def __str__(self) :
        return "id:"+str(self.id)+" descripcion:"+ self.descripcion

db.create_all()  # crea las tablas 

class CategoriaSchema(ma.Schema):
    class Meta:
        fields=('id','descripcion')
 
categoria_schema=CategoriaSchema()           # para  un registro
categorias_schema=CategoriaSchema(many=True)  # multiples registros

