import { Feature } from './feature';
import './components.css';
import chat from '../assets/img/icon-chat.png';
import money from '../assets/img/icon-money.png';
import security from '../assets/img/icon-security.png';

export function Features() {
	return (
		<div className="features">
			<Feature
				iconSrc={chat}
				iconAlt={'chat icon'}
				motto={'You are our #1 priority'}
				description={
					'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
				}
			/>
			<Feature
				iconSrc={money}
				iconAlt={'money icon'}
				motto={'More savings means higher rates'}
				description={
					'The more you save with us, the higher your interest rate will be!'
				}
			/>
			<Feature
				iconSrc={security}
				iconAlt={'security icon'}
				motto={'Security you can trust'}
				description={
					'We use top of the line encryption to make sure your data and money is always safe. '
				}
			/>
		</div>
	);
}
