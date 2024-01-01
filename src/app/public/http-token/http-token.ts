import { HttpContextToken } from "@angular/common/http";

export const BYPASS_ALERT = new HttpContextToken(() => false);
