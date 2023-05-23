import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import {
	URL_MAP,
	URL_MYPAGE,
	URL_POST,
	URL_PLOGGING,
	URL_RECYCLE,
	URL_INTRODUCTION,
} from '../routesURL';

export default function SidebarList({ setIsSidebarOpen, isAuthenticated }) {
	const location = useLocation();
	const path = location.pathname.split('/')[1];
	const navigations = isAuthenticated
		? [
				{ url: URL_INTRODUCTION, name: 'About' },
				{ url: URL_MAP, name: 'Map' },
				{ url: URL_POST, name: 'Community' },
				{ url: URL_PLOGGING, name: 'Plogging' },
				{ url: URL_RECYCLE, name: 'How To Recycle' },
				{ url: URL_MYPAGE, name: 'My page' },
		  ]
		: [
				{ url: URL_INTRODUCTION, name: 'About' },
				{ url: URL_MAP, name: 'Map' },
				{ url: URL_POST, name: 'Community' },
				{ url: URL_PLOGGING, name: 'Plogging' },
				{ url: URL_RECYCLE, name: 'How to Recycle' },
		  ];
	return (
		<List>
			{navigations.map((el) => (
				<ListItem
					key={el.name}
					className={path === el.url.split('/')[1] && 'current'}
				>
					<NavigationLink to={el.url} onClick={() => setIsSidebarOpen(false)}>
						{el.name}
					</NavigationLink>
				</ListItem>
			))}
		</List>
	);
}

const List = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.current {
		border-radius: 10px;
		color: var(--text-white-color);
		background-color: var(--main-color);
	}
`;

const ListItem = styled.li`
	height: 40px;
	width: 240px;
	padding: 10px 0;
	margin: 10px 0;
	font-size: var(--base);
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	cursor: pointer;
	&:hover {
		border-radius: 10px;
		color: var(--text-white-color);
		background-color: var(--main-color);
	}
`;

const NavigationLink = styled(Link)`
	height: 40px;
	width: 230px;
	text-align: center;
	line-height: 40px;
`;
