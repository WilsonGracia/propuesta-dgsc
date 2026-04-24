export class ShowExperienciaLaboralDto {
  experiencia_laboral_id: string;
  nombre_organizacion: string;
  puesto_persona: string;
  fecha_ingreso: string;
  fecha_salida: string | null;
  actual: boolean;
  funcion: string;
  persona_id: string;
  tipo_organizacion_id: string;
  puesto_id: string;
  total_meses: number | null;
}
