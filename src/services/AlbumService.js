import http from "../http-common";
class AlbumService {
  getAll() {
    return http.get("/album");
  }

  get(id) {
    return http.get(`/album/${id}`);
  }

  create(data) {
    return http.post("/album", data);
  }
  //create new question
  createQuestion(data) {
     return http.post("/surveyapi/question", data);
  }

  update(id, data) {
    return http.put(`/album/${id}`, data);
  }

  delete(id) {
    return http.delete(`/album/${id}`);
  }


  updateArtist(id, data) {
    return http.put(`/artist/${id}`, data);
  }

  deleteArtist(id) {
    return http.delete(`/artist/${id}`);
  }  

  deleteAll() {
    return http.delete(`/album`);
  }

  findByTitle(title) {
    return http.get(`/album?title=${title}`);
  }

  createSong(data) {
    return http.post("/song", data);
  }
  findSongsByAlbumId(id) {
    return http.get(`/songs/${id}`)
  }
  getSong(id){
    return http.get(`/song/${id}`);
  }
  updateSong(id, data) {
    return http.put(`/song/${id}`, data);
  }
  deleteSong(id) {
    return http.delete(`/song/${id}`);
  }
  findByTitleSong(title) {
    return http.get(`/song?title=${title}`);

  }
  findAllByArtist(artist){
    return http.get(`/artist?artist=${artist}`);
  }
  getAllArtist() {
    return http.get(`/artists`);
  }
  getOneArtist(id) {
    return http.get(`/artists/${id}`);
  }
  updateArt(id, data) {
    return http.put(`/artist/${id}`, data);
  }

  deleteArt(id) {
    return http.delete(`/artist/${id}`);
  }
}

export default new AlbumService();
