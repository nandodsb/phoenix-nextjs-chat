import React, { Fragment } from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '../src/fetcher'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<Fragment>
			<SWRConfig value={{
				fetcher,
				revalidateOnFocus: true
			}}>
				<Navbar />
			</SWRConfig>
			{children}
		</Fragment>
	)
}

export default Layout