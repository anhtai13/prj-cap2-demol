import axios from "axios"

// Địa chỉ URL cơ bản của API
const API_URL = 'http://localhost:3131';

// Hàm để lấy danh sách tất cả sản phẩm
export const getListServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data; // Trả về dữ liệu nhận được
    } catch (error) {
        throw error; // Nếu có lỗi, ném lỗi
    }
}

// Hàm để lấy chi tiết sản phẩm theo id
export const getDetailServices = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/services/${id}`);
        return response.data; // Trả về dữ liệu nhận được
    } catch (error) {
        throw error; // Nếu có lỗi, ném lỗi
    }
}

// Hàm để thêm một sản phẩm mới
export const addService = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/services`, formData);
        return response.data; // Trả về dữ liệu nhận được
    } catch (error) {
        throw error; // Nếu có lỗi, ném lỗi
    }
};

// Hàm để cập nhật một sản phẩm
export const updateService = async (formData) => {
    try {
        const response = await axios.put(`${API_URL}/services`, formData);
        return response.data; // Trả về dữ liệu nhận được
    } catch (error) {
        throw error; // Nếu có lỗi, ném lỗi
    }
};

// Hàm để xóa một sản phẩm
export const deleteService = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/services/${id}`,);
        return response.data; // Trả về dữ liệu nhận được
    } catch (error) {
        throw error; // Nếu có lỗi, ném lỗi
    }
};