import { tipoCurso } from "./curso";


export interface paginationResponse<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
export interface paginationRequest {  
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}
interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}


export interface queryRequestCurso{
  type:tipoCurso;
  name:string;
  page:number;
  size:number
}
export interface queryRequestDocente{
  name:string;
  page:number;
  size:number
}
