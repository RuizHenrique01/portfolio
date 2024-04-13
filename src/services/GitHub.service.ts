import axios from "axios";

export class GitHubService {

    constructor(){}

    async getRepositories(){
        try{
        const response = await axios.get("https://api.github.com/users/RuizHenrique01/repos?per_page=100");
        console.log(response.data)
        return response.data;
    } catch(_) {
        throw new Error("Falha ao obter repositórios!");
    }
    }

    async getCommits() {
        try{
            const response = await axios.get("https://api.github.com/search/commits?q=author:RuizHenrique01")
            return response.data.total_count;
        } catch(_) {
            throw new Error("Falha ao obter commits!");
        }
    }

    async getPullRequests() {
        try{
            const response = await axios.get("https://api.github.com/search/issues?q=author:RuizHenrique01")
            return response.data.total_count;
        } catch(_) {
            throw new Error("Falha ao obter pull requests!");
        }
    }
}