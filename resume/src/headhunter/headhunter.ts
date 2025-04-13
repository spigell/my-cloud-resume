import axios, { AxiosInstance } from 'axios';

const DEFAULT_HH_USER_AGENT =
  'my-cloud-resume (https://github.com/spigell/my-cloud-resume)';

export class HeadHunterAPI {
  private axiosInstance: AxiosInstance;

  constructor(
    private token: string,
    private userAgent: string = DEFAULT_HH_USER_AGENT,
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
