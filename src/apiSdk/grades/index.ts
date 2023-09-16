import axios from 'axios';
import queryString from 'query-string';
import { GradeInterface, GradeGetQueryInterface } from 'interfaces/grade';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGrades = async (query?: GradeGetQueryInterface): Promise<PaginatedInterface<GradeInterface>> => {
  const response = await axios.get('/api/grades', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGrade = async (grade: GradeInterface) => {
  const response = await axios.post('/api/grades', grade);
  return response.data;
};

export const updateGradeById = async (id: string, grade: GradeInterface) => {
  const response = await axios.put(`/api/grades/${id}`, grade);
  return response.data;
};

export const getGradeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/grades/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGradeById = async (id: string) => {
  const response = await axios.delete(`/api/grades/${id}`);
  return response.data;
};
