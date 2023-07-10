import React from 'react'
import ComponentD from './Components/useContext Hook/ComponentD'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


function useContextHook() {
    return (
		<div>
			<UserContext.Provider value={'Maheswar'}>
            <ChannelContext.Provider value={'Codevolution'}>
					<ComponentD />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default useContextHook