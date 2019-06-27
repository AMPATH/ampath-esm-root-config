import * as singleSpa from "single-spa";

// Importing zone-evergreen creates the window.Zone global variable
import "zone.js/dist/zone-evergreen.min.js";

// Set single-spa as a SystemJS module, without it being in the import map.
// This allows us to upgrade single-spa without having to update the import map.
// See https://github.com/systemjs/systemjs/blob/master/docs/api.md#systemsetid-module---module
System.set("single-spa", singleSpa);
