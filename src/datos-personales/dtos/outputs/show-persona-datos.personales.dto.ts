export class ShowPersonaDatosPersonalesDto {
  id!: string;
  nombre!: string;
  apellido1!: string;
  apellido2!: string;
  nombre_padre!: string;
  nombre_madre!: string;
  conocido_como!: string | null;
  fecha_nacimiento!: string;
  usuario_id!: string;
  genero_id!: number;
  distrito_id!: number;
  nacionalidad_id!: string;
}
