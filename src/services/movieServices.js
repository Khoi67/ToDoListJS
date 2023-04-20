import http from "../constant/api"

export const movieServices = {
    //lấy danh sách Phim
    getMovieList: (query = '') => {
        return http.get(`QuanLyPhim/LayDanhSachPhim${query}`)
    }
}