import styled from "styled-components";

export const SectionSplitterText = styled.span`
	color: var(--chakra-colors-neonPink);
	text-align: center;
	font-size: 0.9rem;
	text-transform: capitalize;
	font-weight: normal;

	@media (max-width: 30em) {
		width: 100%;
	}
	@media (min-width: 30em) {
		width: 75%;
	}
`;