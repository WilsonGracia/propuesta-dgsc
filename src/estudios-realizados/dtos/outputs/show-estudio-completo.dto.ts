export class ShowEstudioCompletoDto {
  estudio_id: string;
  registro_id: string;
  tipo_documento_id: string;
  persona_id: string;
  carrera_id: string;
  nivel_academico_id: string; // ← agregar
  institucion_academica_id: string; // ← agregar
  grado_academico_id: string | null;
  nombre: string;
  fecha_obtencion: string;
  documento_id: string;
  tomo: string | null;
  folio: string | null;
  asiento: string | null;
  registro_publico: boolean | null;
}
