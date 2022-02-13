import {useContext} from 'react';
import {AuthContext} from '../hoc/Authprovieyde'

export function useAuth() {
    return useContext(AuthContext)
} 

