import axios, { AxiosInstance } from 'axios';

export class HeadHunterAPI {
  private axiosInstance: AxiosInstance;

  constructor(
    private token: string,
    private userAgent: string = 'private-app (spigelly@gmail.com)',
  ) {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.hh.ru',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'HH-User-Agent': this.userAgent,
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    });
  }

  async updateResume(resumeId: string, data: string): Promise<any> {
    const response = await this.axiosInstance.put(`/resumes/${resumeId}`, data);
    return response.status;
  }
}
