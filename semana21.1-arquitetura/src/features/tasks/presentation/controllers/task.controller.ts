import { HttpRequest, HttpResponse, MVCController } from "../../../projects/presentation";

export class TaskController implements MVCController {
  public async index(request: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }

  public async show(request: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }

  public async store(request: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }

  public async update(request: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }

  public async delete(request: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }
}