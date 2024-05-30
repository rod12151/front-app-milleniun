import baserUrl from "../services/auth/authHelper";

export const urlsToSkip = [
    `${baserUrl}/auth/login`,
    `${baserUrl}/auth/register`,
    
    `${baserUrl}/docente/list`,
    `${baserUrl}/docente/public/listPage`,
    `${baserUrl}/curso/public/listPage`

]