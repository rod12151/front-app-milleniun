import baserUrl from "../services/auth/authHelper";

export const urlsToSkip = [
    `${baserUrl}/auth/login`,
    `${baserUrl}/auth/register`,
    
    `${baserUrl}/docente/list`,
    `${baserUrl}/docente/public/listPage`,

    `${baserUrl}/curso/public/listPage`,    
    `${baserUrl}/curso/public/listCursosAndDocentes`,
    `${baserUrl}/curso/public/listPage/cursosAndDocentes`,

]
export const urlStatics =[
    `${baserUrl}/auth/login`,
    `${baserUrl}/auth/register`,
    
    `${baserUrl}/docente/list`,
    `${baserUrl}/docente/public/listPage`,

    `${baserUrl}/curso/public/listPage`,    
    `${baserUrl}/curso/public/listCursosAndDocentes`,
    `${baserUrl}/curso/public/listPage/cursosAndDocentes`,
    
    `${baserUrl}/curso/public/curso/`,
    `${baserUrl}/modulo/public/modulo/`
]