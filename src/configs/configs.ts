//@ts-ignore
import ampathLoginConfig from "./login.config.json";
import programConfig from "./programs.config.json";
import patientChartConfig from "./patient-chart.config.json";
import { provide } from "@openmrs/esm-module-config";

provide(ampathLoginConfig);
provide(programConfig);
provide(patientChartConfig);
