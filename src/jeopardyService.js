//import the axios HTTP client to communicate with the API
import axios from 'axios';
class JeopardyService {
    constructor(url = 'http://jservice.io/api/random', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    getQuestion(){
        return this.client.get(this.url);
    }
}
export default JeopardyService;