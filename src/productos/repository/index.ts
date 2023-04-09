import { PERSISTENCIA } from "../config/config";
import { product } from "./product";
import { Container } from "../daos/container/containerArchivo";
import { ContainerMongodb } from "../daos/container/containerMongodb";
import { Contenedor } from "../daos/container/container";
import { clienteSql } from "../daos/db/clienteSql";

let Products

switch (PERSISTENCIA){
    case 'fs':
        const dao_fs = new Container('productos.txt')
        Products = new product(dao_fs)
        break
    case 'mongodb':
        const dao_mongodb = new ContainerMongodb('productos')
 
        Products = new product(dao_mongodb)
        break
    case 'relacional':
        const dao_relacional = new Contenedor(clienteSql, 'productos')
        Products = new product(dao_relacional)
        break
}

export {Products}