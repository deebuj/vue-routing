import axios from "axios";
var api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export default class UserAPI {
  static async getUsers(ref) {
    let users = await this.makeCall(`/users`);
    return users;
  }
  static async getPosts(userid) {
    let posts = await this.makeCall(`/posts?userId=` + userid);
    return posts;
  }
  static async makeCall(url) {
    try {
      const tempPromise = api.get(url);
      const [responseData] = await Promise.all([tempPromise]);
      return responseData.data;
    } catch (e) {
      console.log(e);
    }
  }
}
