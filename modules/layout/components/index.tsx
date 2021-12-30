import styled from "styled-components";
import { SectionSplitterText } from "../../../common/components";

export const FooterContainer = styled.footer`
	width: 100%;
	margin: 1rem 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: row;
	border-top: 2px solid var(--purple);
`;

export const Column = styled.div`
	@media (max-width: 30em) {
		width: 25%;
	}
	width: 20%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	margin: 0;
`;

export const ColumnHeader = styled(SectionSplitterText)`
	font-size: 1rem;
	font-weight: normal;
`;

export const ColumnEntry = styled.a`
	font-size: 0.875rem;
	margin: 0.5rem 0;
	color: var(--text);
	text-decoration: none;
`;
