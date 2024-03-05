import axios from "axios";

const API_URL = "http://localhost:3131";

export const getListUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getListUsersSortedUserName = async (sortType) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?sortUserName=${sortType}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getListUsersSortedRole = async (sortType) => {
  try {
    const response = await axios.get(`${API_URL}/users?sortRole=${sortType}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getListUsersSortedLastName = async (sortType) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?sortLastName=${sortType}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (formData) => {
  try {
    const response = await axios.put(`${API_URL}/users`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDetaiUser = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};
