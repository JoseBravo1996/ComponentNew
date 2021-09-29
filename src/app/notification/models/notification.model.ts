export class NotificationModel {
    usuario: string;
    tipo: number;
    mensaje: string;
    fecha: string;
    link: string;

    constructor(data?: any){
        this.usuario = null;
        this.tipo = null;
        this.mensaje = null;
        this.fecha = null;
        this.link = null;

        if (typeof data !== 'undefined') {
            for (const i in data) {
                if (this.hasOwnProperty(i)) {
                    this[i] = data[i];
                }
            }
        }
    }
}