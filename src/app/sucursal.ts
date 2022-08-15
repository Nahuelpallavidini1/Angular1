export class Sucursal {
  constructor(
    public _nombre: string,
    public _direccion: string,
    private _categoria: string,
    private responsable: string
  ) {}
}
