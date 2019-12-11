import * as React from 'react'
import { useState, useEffect } from 'react';

// firebase
import { firebaseService } from '../../services/firebase/firebase'

// compontents
import NewsletterBox from '../Shared/Newsletter/Newsletter'
import Contactbox from '../Shared/Contactbox/Contactbox'
import Navigation from '../Shared/Navigation/Navigation'

// style
import * as S from './styled'

interface IFooterItem {
    name: string
    header: string
    content: string
}

const NavFooter = () => {
	const [settings, setSettings] = useState<undefined | Array<IFooterItem>>(undefined);

	useEffect(() => {
		firebaseService.getFooterItems().then((data) => {
			setSettings(data as Array<IFooterItem>)
		})
	}, []);

	return (
		<S.FooterWrapper>
			<S.Inner>
			{
				settings !== undefined ? 
				( 
					settings.map((itemSettings) => {
						switch(itemSettings.name) {
							case 'navigation':
								return ( <Navigation props={itemSettings} type="footer" /> ) 
							case 'newsletter':
								return ( <NewsletterBox props={itemSettings} type="footer" /> ) 
							case 'contactdetails':
								return ( <Contactbox props={itemSettings} type="footer" /> ) 
							default:
								return (' none ')
						}
					})
				) :
				('no loaded')
			}
			</S.Inner>
		</S.FooterWrapper>
	)
}

export default NavFooter