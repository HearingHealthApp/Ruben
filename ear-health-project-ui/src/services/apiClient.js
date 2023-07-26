import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "HearingHealthToken";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request({ endpoint, method = "GET", data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error({ errorResponse: error.response });

      const message = error?.response?.data?.error?.message;

      return { data: null, error: message || String(error) };
    }
  }

  async loginUser(credentials) {
    return await this.request({
      endpoint: "auth/login",
      method: "POST",
      data: credentials,
    });
  }

  async registerUser(credentials) {
    return await this.request({
      endpoint: "auth/register",
      method: "POST",
      data: credentials,
    });
  }

  async registerDoctor(credentials) {
    return await this.request({
      endpoint: "auth/register/doctor",
      method: "POST",
      data: credentials,
    });
  }

  async registerDoctor(credentials) {
    return await this.request({
      endpoint: "auth/register/doctor",
      method: "POST",
      data: credentials,
    });
  }

  async postPoster(data) {
    return await this.request({
      endpoint: "forum/post",
      method: "POST",
      data: data,
    });
  }

  async postsGetter(pageNum) {
    return await this.request({
      endpoint: `forum/${pageNum}`,
      method: "GET",
    });
  }

  async indvPostGetter(postId) {
    return await this.request({
      endpoint: `forum/post/${postId}`,
      method: "GET",
    });
  }

  async getComments(postId) {
    return await this.request({
      endpoint: `comments/${postId}`,
      method: "GET",
    });
  }

  async postComment(data) {
    return await this.request({
      endpoint: "comments/add",
      method: "POST",
      data: data,
    });
  }

  async getUserData(userId) {
    return await this.request({
      endpoint: `profile/${userId}`,
      method: "GET",
    });
  }

  async getPosts() {
    return await this.request({
      endpoint: "forum/",
      method: "GET",
    });
  }

  async getUserNotifications(userId) {
    return await this.request({
      endpoint: `notification/${userId}`,
      method: "GET",
    });
  }

  async notificationUpdater(notificationId) {
    return await this.request({
      endpoint: `notification/${notificationId}`,
      method: "PUT",
    });
  }

  async updateDescription(description, userId) {
    return await this.request({
      endpoint: `profile/description/${userId}`,
      method: "PUT",
      data: {description},
    });
  }

  async updateConditions(condition, userId) {
    return await this.request({
      endpoint:  `profile/conditions/${userId}`,
      method: "PUT",
      data: {condition}
    })
  }

  fetchUserFromToken = async () => {
    return await this.request({ endpoint: "auth/me", method: "GET" });
  };
}

export default new ApiClient("http://localhost:3001");
