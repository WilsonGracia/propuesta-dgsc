export class ShowExperienciaLaboralResumenDto {
  experiencia_laboral_id: string;
  nombre_organizacion: string;
  puesto_persona: string;
  fecha_ingreso: string;
  fecha_salida: string | null;
  actual: boolean;
  puesto_equivalente: string;
}
