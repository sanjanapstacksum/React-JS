// import React, {useContext} from 'react'

// const AuthContext = React.createContext()

// export function AuthProvider({children, value}) {
//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export function useAuthValue(){
//   return useContext(AuthContext)
// }

import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;