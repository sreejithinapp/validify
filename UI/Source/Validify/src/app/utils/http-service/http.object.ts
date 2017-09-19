import { URLSearchParams } from "@angular/http";
export class HttpObject {
	public data: URLSearchParams = new URLSearchParams();
	public global: boolean = true;
	constructor() { }
}