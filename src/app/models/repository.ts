export class Repository {
  constructor (
    public name: string,
    public description: string,
    public html_url: string,
    public owner: any,
    public language: string,
    public forks_count: number,
    public watchers_count: number,
    public updated_at: Date,
  ){}
}
